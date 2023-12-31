import { NextApiRequest, NextApiResponse } from 'next';
import { logStudyTrackerSessionForSubject } from '../../services/study/sessionService';
import StudySession from '../../models/StudySessions';
import { getUserFromSession, isUserLoggedIn } from '../../utils/helpers';
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
      res.status(200).send(sessions);
    }
  } catch (err: any) {
    console.error(err);
    res.status(400).json({ message: 'Study sessions not fetched', error: err.message });
  }
};

// @Desc Log study session
// @Route /api/study/sessions/log
// @Method POST

export const logStudyTrackerSessionController = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const { tracker, time } = req.body;
      const user = getUserFromSession(req);
      const log = logStudyTrackerSessionForSubject(tracker, time, user.email);
      res.status(200).send(log);
    }
  } catch (err: any) {
    console.error(err);
    res.status(400).json({ message: 'Subject study session not logged', error: err.message });
  }
};
