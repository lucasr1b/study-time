import { NextApiRequest, NextApiResponse } from 'next';
import connectToDB from '../lib/mongodb';
import Assessment from '../models/Assessment';
import { v4 as uuidv4 } from 'uuid';

connectToDB();

// @Desc Add new assessment
// @Route /api/assessments/add
// @Method POST

export const addAssessmentController = async (req: NextApiRequest, res: NextApiResponse) => {

  const user = req.session.user;

  try {
    if (user) {
      const { subject, date, description } = req.body;

      const assessmentId = uuidv4();

      const newAssessment = await Assessment.create({
        assessment_id: assessmentId,
        user: user.email,
        subject_id: subject.subject_id,
        subject_name: subject.subject_name,
        subject_icon: subject.subject_icon,
        description,
        date,
      });

      res.status(200).json({ newAssessment, message: 'Assessment added' });
    } else {
      res.send('Not logged in.');
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Assessment not added', error: err.message });
  }
};

// @Desc Edit assessment
// @Route /api/assessments/edit
// @Method POST

export const editAssessmentController = async (req: NextApiRequest, res: NextApiResponse) => {

  const user = req.session.user;

  try {
    if (user) {
      const { assessmentId, date, description } = req.body;

      await Assessment.findOneAndUpdate({ assessment_id: assessmentId }, { date, description });
      const updatedAssessment = await Assessment.findOne({ assessment_id: assessmentId });

      res.status(200).json({ updatedAssessment, message: 'Assessment updated' });
    } else {
      res.send('Not logged in.');
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Assessment not updated', error: err.message });
  }
};

// @Desc Delete assessment
// @Route /api/assessments/delete
// @Method DELETE

export const deleteAssessmentController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session.user;

  try {
    if (user) {
      const { id } = req.body;

      await Assessment.findOneAndDelete({ id });

      res.status(200).json({ message: 'Assessment deleted' });
    } else {
      res.send('Not logged in.');
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Assessment not deleted', error: err.message });
  }
};