import { NextApiRequest, NextApiResponse } from 'next';
import connectToDB from '../lib/mongodb';
import { createAssessment, deleteAssessment, editAssessment } from '../services/assessmentService';
import { getUserFromSession, isUserLoggedIn } from '../utils/helpers';

connectToDB();

// @Desc Add new assessment
// @Route /api/assessments/add
// @Method POST

export const addAssessmentController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const { subject, date, description } = req.body;
      const user = getUserFromSession(req);
      const newAssessment = await createAssessment(subject, date, description, user.email);
      res.status(200).json({ newAssessment, message: 'Assessment added' });
    }
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
    if (isUserLoggedIn(req, res)) {
      const { assessmentId, date, description } = req.body;
      const updatedAssessment = await editAssessment(assessmentId, date, description);
      res.status(200).json({ updatedAssessment, message: 'Assessment updated' });
    }
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
    if (isUserLoggedIn(req, res)) {
      const { assessmentId } = req.body;
      await deleteAssessment(assessmentId);
      res.status(200).json({ message: 'Assessment deleted' });
    }
  } catch (err: any) {
    console.error(err);
    res.status(400).json({ message: 'Assessment not deleted', error: err.message });
  }
};