import { NextApiRequest, NextApiResponse } from 'next';
import { logStudyTrackerSessionForSubject } from '../../services/study/logService';

// @Desc Log study session
// @Route /api/study/logs/{trackerId}/log
// @Method PUT

export const logStudyTrackerSessionController = (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session.user;
  try {
    if (user) {
      const { trackerId } = req.query;
      const log = logStudyTrackerSessionForSubject(trackerId);
      res.status(200).send(log);
    } else {
      res.send('Not logged in.');
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Subject study session not logged', error: err.message });
  }
};

