import { NextApiRequest, NextApiResponse } from 'next';
import { editStudyTrackerTimeForSubject, removeStudyTrackerForSubject, setupStudyTrackerForSubject, updateStudyTrackerTimerForSubject } from '../services/studyService';

// @Desc Setup tracker for subject
// @Route /api/study/trackers/setup
// @Method POST

export const setupStudyTrackerController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session.user;

  try {
    if (user) {
      const { id, hours, minutes } = req.body;
      const tracker = await setupStudyTrackerForSubject(id, hours, minutes);
      res.status(200).send(tracker);
    } else {
      res.send('Not logged in.');
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Subject not removed', error: err.message });
  }
}

// @Desc Edit tracker time for subject
// @Route /api/study/trackers/edit
// @Method POST

export const editStudyTrackerTimeController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session.user;

  try {
    if (user) {
      const { id, hours, minutes } = req.body;
      const tracker = await editStudyTrackerTimeForSubject(id, hours, minutes);
      res.status(200).send(tracker);
    } else {
      res.send('Not logged in.');
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Subject not removed', error: err.message });
  }
}

// @Desc Remove tracker for subject
// @Route /api/study/trackers/remove
// @Method POST

export const removeStudyTrackerController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session.user;

  try {
    if (user) {
      const { id } = req.body;
      const tracker = await removeStudyTrackerForSubject(id);
      res.status(200).send(tracker);
    } else {
      res.send('Not logged in.');
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Subject not removed', error: err.message });
  }
}

// @Desc Update time for study tracker
// @Route /api/study/trackers/{tracker_id}/update
// @Method PUT

export const updateStudyTrackerTimerController = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session.user;
  try {
    if (user) {
      const { tracker_id } = req.query;
      console.log(tracker_id);
      const { time } = req.body;
      const tracker = await updateStudyTrackerTimerForSubject(tracker_id, time);
      res.status(200).send(tracker);
    } else {
      res.send('Not logged in.')
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Subject tracker time not updated', error: err.message })
  }
}