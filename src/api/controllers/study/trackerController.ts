import { NextApiRequest, NextApiResponse } from 'next';
import { editStudyTrackerTimeForSubject, removeStudyTrackerForSubject, setupStudyTrackerForSubject, updateStudyTrackerTimerForSubject } from '../../services/study/trackerService';
import { isUserLoggedIn, sendErrorResponse, sendSuccessCreatedResponse, sendSuccessNoContentResponse, sendSuccessResponse } from '../../utils/helpers';
import connectToDB from '../../lib/mongodb';
import StudyTracking from '../../models/StudyTracking';
import User from '../../models/User';

connectToDB();

// @Desc Get all trackers
// @Route /api/study/trackers
// @Method GET

export const getAllSubjectTrackersController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const user = await User.findOne({ email: req.session.user.email });
      const trackers = await StudyTracking.find({ tracker_id: { $in: user.trackers } });
      sendSuccessResponse(res, 'All subject trackers fetched', { trackers });
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject trackers not fetched', err.message);
  }
};

// @Desc Get tracker for a subject
// @Route /api/study/trackers/:subjectId
// @Method GET

export const getSubjectTrackerItemController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const { subjectId } = req.query;
      const user = req.session.user.email; // Change to id in future
      const [tracker] = await StudyTracking.find({ subject_id: subjectId, tracker_user: user });
      sendSuccessResponse(res, 'Subject tracker fetched', { tracker });
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject tracker not fetched', err.message);
  }
};

// @Desc Get all weekly progress for subject trackers 
// @Route /api/study/trackers/weekly
// @Method GET

export const getAllWeeklyTrackersProgressController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const user = await User.findOne({ email: req.session.user.email });
      const trackers = await StudyTracking.find({ tracker_id: { $in: user.trackers }, is_setup: true });
      sendSuccessResponse(res, 'All weekly progress for trackers fetched', { trackers });
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Weekly progress for trackers not fetched', err.message);
  }
};

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