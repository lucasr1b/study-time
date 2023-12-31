import { NextApiRequest, NextApiResponse } from 'next';
import { editStudyTrackerTimeForSubject, removeStudyTrackerForSubject, setupStudyTrackerForSubject, updateStudyTrackerTimerForSubject } from '../../services/study/trackerService';
import { isUserLoggedIn, sendErrorResponse, sendSuccessCreatedResponse, sendSuccessNoContentResponse, sendSuccessResponse } from '../../utils/helpers';
import connectToDB from '../../lib/mongodb';

connectToDB();

// @Desc Setup new tracker for subject
// @Route /api/study/trackers/setup
// @Method POST

export const setupStudyTrackerController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const { id, hours, minutes } = req.body;
      const tracker = await setupStudyTrackerForSubject(id, hours, minutes);
      sendSuccessCreatedResponse(res, 'Subject tracker added', { tracker });
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject tracker not added', err.message);
  }
};

// @Desc Edit tracker time for subject
// @Route /api/study/trackers/edit
// @Method POST

export const editStudyTrackerTimeController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const { id, hours, minutes } = req.body;
      const editedTracker = await editStudyTrackerTimeForSubject(id, hours, minutes);
      sendSuccessResponse(res, 'Subject tracker edited', { editedTracker });
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject tracker not edited', err.message);
  }
};

// @Desc Remove tracker for subject
// @Route /api/study/trackers/remove
// @Method POST

export const removeStudyTrackerController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const { id } = req.body;
      const removedTracker = await removeStudyTrackerForSubject(id);
      sendSuccessResponse(res, 'Subject tracker removed', { removedTracker });
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject tracker not removed', err.message);
  }
};

// @Desc Update time for study tracker
// @Route /api/study/trackers/update
// @Method PUT

export const updateStudyTrackerTimerController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const { id, time } = req.body;
      await updateStudyTrackerTimerForSubject(id, time);
      sendSuccessNoContentResponse(res, 'Subject tracker timer updated');
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject tracker timer not updated', err.message);
  }
};