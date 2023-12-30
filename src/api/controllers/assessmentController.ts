import { NextApiRequest, NextApiResponse } from 'next';
import connectToDB from '../lib/mongodb';
import { createAssessment, deleteAssessment, editAssessment } from '../services/assessmentService';

connectToDB();

// @Desc Add new assessment
// @Route /api/assessments/add
// @Method POST

export const addAssessmentController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = req.session.user;

    if (!user) {
      return res.status(401).json({ message: 'Not logged in.' });
    }

    const { subject, date, description } = req.body;

    const newAssessment = createAssessment(subject, date, description, user.email);

    res.status(200).json({ newAssessment, message: 'Assessment added' });
  } catch (err: any) {
    console.error(err);
    res.status(400).json({ message: 'Assessment not added', error: err.message });
  }
};

// @Desc Edit assessment
// @Route /api/assessments/edit
// @Method POST

export const editAssessmentController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = req.session.user;

    if (!user) {
      return res.status(401).json({ message: 'Not logged in.' });
    }

    const { assessmentId, date, description } = req.body;

    const updatedAssessment = editAssessment(assessmentId, date, description);

    res.status(200).json({ updatedAssessment, message: 'Assessment updated' });
  } catch (err: any) {
    console.error(err);
    res.status(400).json({ message: 'Assessment not updated', error: err.message });
  }
};

// @Desc Delete assessment
// @Route /api/assessments/delete
// @Method DELETE

export const deleteAssessmentController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = req.session.user;

    if (!user) {
      return res.status(401).json({ message: 'Not logged in.' });
    }

    const { assessmentId } = req.body;

    deleteAssessment(assessmentId);

    res.status(200).json({ message: 'Assessment deleted' });
  } catch (err: any) {
    console.error(err);
    res.status(400).json({ message: 'Assessment not deleted', error: err.message });
  }
};