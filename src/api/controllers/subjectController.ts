import { NextApiRequest, NextApiResponse } from 'next';
import connectToDB from '../lib/mongodb';
import { addSubjectToUser, removeSubjectFromUser } from '../services/subjectService';

connectToDB();

export const addSubjectController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session.user;

  try {
    if (user) {
      const { id } = req.body;
      const addedSubject = await addSubjectToUser(id, user.email);
      res.status(200).send(addedSubject);
    } else {
      res.send('Not logged in.');
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Subject not added', error: err.message });
  }
}

export const removeSubjectController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session.user;

  try {
    if (user) {
      const { id } = req.body;
      const removedSubject = await removeSubjectFromUser(id, user.email);
      res.status(200).send(removedSubject);
    } else {
      res.send('Not logged in.');
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Subject not removed', error: err.message });
  }
}