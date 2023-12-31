import { NextApiRequest, NextApiResponse } from 'next';
import connectToDB from '../lib/mongodb';
import { updateSubjectForUser, createStudyTrackerAndAddToUser, deleteStudyTrackerAndRemoveFromUser } from '../services/subjectService';
import { getUserFromSession, isUserLoggedIn, sendErrorResponse, sendSuccessCreatedResponse, sendSuccessNoContentResponse } from '../utils/helpers';

connectToDB();

// @Desc Add new subject to user
// @Route /api/subjects/add
// @Method POST

export const addSubjectController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const { id } = req.body;
      const user = getUserFromSession(req);
      const addedSubject = await updateSubjectForUser(id, user.email, 'add');
      await createStudyTrackerAndAddToUser(id, user.email);
      sendSuccessCreatedResponse(res, 'Subject added', { addedSubject });
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject not added', err.message);
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
      await updateSubjectForUser(id, user.email, 'remove');
      await deleteStudyTrackerAndRemoveFromUser(id, user.email);
      sendSuccessNoContentResponse(res, 'Subject removed');
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject not removed', err.message);
  }
};