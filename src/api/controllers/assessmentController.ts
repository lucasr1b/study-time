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

      const assessment = await Assessment.create({
        assessment_id: assessmentId,
        user: user.email,
        subject_id: subject.subject_id,
        subject_name: subject.subject_name,
        subject_icon: subject.subject_icon,
        description,
        date,
      });

      res.status(200).json({ assessment, message: 'Assessment added' });
    } else {
      res.send('Not logged in.');
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Assessment not added', error: err.message });
  }
};