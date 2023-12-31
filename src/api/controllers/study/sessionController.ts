import { NextApiRequest, NextApiResponse } from 'next';
import { logStudyTrackerSessionForSubject } from '../../services/study/sessionService';
import StudySession from '../../models/StudySessions';
import { getUserFromSession, isUserLoggedIn, sendErrorResponse, sendSuccessCreatedResponse, sendSuccessResponse } from '../../utils/helpers';
import connectToDB from '../../lib/mongodb';

connectToDB();

// @Desc Get all user study tracker sessions
// @Route /api/study/sessions
// @Method GET

export const getAllUserStudyTrackerSessions = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const user = getUserFromSession(req);
      const sessions = await StudySession.find({ log_user: user.email }).sort({ date_logged: -1 });
      sendSuccessResponse(res, 'Study sessions fetched', { sessions });
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Study sessions not fetched', err.message);
  }
};

// @Desc Log new study session
// @Route /api/study/sessions/log
// @Method POST

export const logStudyTrackerSessionController = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const { tracker, time } = req.body;
      const user = getUserFromSession(req);
      logStudyTrackerSessionForSubject(tracker, time, user.email);
      sendSuccessCreatedResponse(res, 'Subject study session logged');
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject study session not logged', err.message);
  }
};
