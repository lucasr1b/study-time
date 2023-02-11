import { NextApiRequest, NextApiResponse } from 'next';
import connectToDB from '../lib/mongodb';
import { addSubjectToUser } from '../services/subjectService';

connectToDB();

export const addSubjectController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session.user;

  try {
    if (user) {
      const { id } = req.body;
      const userData = await addSubjectToUser(req, id, user.email);
      res.status(200).send(userData);
    } else {
      res.send('Not logged in.');
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Account not created', error: err.message });
  }
}