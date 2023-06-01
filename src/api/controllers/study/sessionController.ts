import { NextApiRequest, NextApiResponse } from 'next';
import { logStudyTrackerSessionForSubject } from '../../services/study/sessionService';
import StudySession from '../../models/StudySessions';

// @Desc Log study session
// @Route /api/study/sessions
// @Method GET

export const getAllUserStudyTrackerSessions = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session.user;
  try {
    if (user) {
      const sessions = await StudySession.find({ log_user: user.email }).sort({ date_logged: -1 });
      res.status(200).send(sessions);
    } else {
      res.send('Not logged in.');
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Study sessions not fetched', error: err.message });
  }
};

// @Desc Log study session
// @Route /api/study/sessions/log
// @Method POST

export const logStudyTrackerSessionController = (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session.user;
  try {
    if (user) {
      const { tracker, time } = req.body;
      const log = logStudyTrackerSessionForSubject(tracker, time, user.email);
      res.status(200).send(log);
    } else {
      res.send('Not logged in.');
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Subject study session not logged', error: err.message });
  }
};
