import { NextApiRequest, NextApiResponse } from 'next';
import connectToDB from '../lib/mongodb';
import { updateSubjectForUser, createStudyTrackerAndAddToUser, deleteStudyTrackerAndRemoveFromUser } from '../services/subjectService';
import { getUserFromSession, isUserLoggedIn } from '../utils/helpers';

connectToDB();

// @Desc Add subject to user
// @Route /api/subjects/add
// @Method POST

export const addSubjectController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const { id } = req.body;
      const user = getUserFromSession(req);
      const addedSubject = await updateSubjectForUser(id, user.email, 'add');
      await createStudyTrackerAndAddToUser(id, user.email);
      res.status(200).send(addedSubject);
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Subject not added', error: err.message });
  }
};

// @Desc Remove subject from user
// @Route /api/subjects/remove
// @Method POST

export const removeSubjectController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const { id } = req.body;
      const user = getUserFromSession(req);
      const removedSubject = await updateSubjectForUser(id, user.email, 'remove');
      await deleteStudyTrackerAndRemoveFromUser(id, user.email);
      res.status(200).send(removedSubject);
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Subject not removed', error: err.message });
  }
};