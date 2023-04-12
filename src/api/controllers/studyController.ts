import { NextApiRequest, NextApiResponse } from 'next';
import { setupStudyTrackerForSubject } from '../services/studyService';

// @Desc Setup tracker for subject
// @Route /api/study/trackers/setup
// @Method POST

export const setupStudyTrackerController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session.user;

  try {
    if (user) {
      const { id, time } = req.body;
      const tracker = await setupStudyTrackerForSubject(id, time);
      res.status(200).send(tracker);
    } else {
      res.send('Not logged in.');
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Subject not removed', error: err.message });
  }
}