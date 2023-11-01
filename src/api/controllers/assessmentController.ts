import { NextApiRequest, NextApiResponse } from 'next';
import connectToDB from '../lib/mongodb';

connectToDB();

// @Desc Add new assessment
// @Route /api/asessments/add
// @Method POST

export const addAssessmentController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { subject, date, description } = req.body;

    console.log(subject, date, description);
    res.status(200).json({ message: 'Assessment added' });
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Assessment not added', error: err.message });
  }
};