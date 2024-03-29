import { NextApiRequest, NextApiResponse } from 'next';
import { editStudyTrackerTimeForSubject, removeStudyTrackerForSubject, setupStudyTrackerForSubject, updateStudyTrackerTimerForSubject } from '../../services/study/trackerService';
import { getUserFromSession, isUserLoggedIn, sendErrorResponse, sendSuccessCreatedResponse, sendSuccessNoContentResponse, sendSuccessResponse } from '../../utils/helpers';
import connectToDB from '../../lib/mongodb';
import StudyTracking from '../../models/StudyTracking';

connectToDB();

// @Desc Get all trackers for user
// @Route /api/study/trackers
// @Method GET

export const getAllSubjectTrackersController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const user = getUserFromSession(req);
      const trackers = await StudyTracking.find({ user: user._id });
      trackers.sort((trackerA, trackerB) => (trackerA.is_setup === trackerB.is_setup) ? 0 : trackerA.is_setup ? -1 : 1);
      sendSuccessResponse(res, 'All subject trackers fetched', { trackers });
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject trackers not fetched', err.message);
  }
};

// @Desc Get tracker for user for a subject
// @Route /api/study/trackers/:subjectId
// @Method GET

export const getSubjectTrackerItemController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const { subjectId } = req.query;
      const user = getUserFromSession(req);
      const [tracker] = await StudyTracking.find({ subject_id: subjectId, user: user._id });
      sendSuccessResponse(res, 'Subject tracker fetched', { tracker });
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject tracker not fetched', err.message);
  }
};

// @UNUSED ROUTE
// @Desc Get all trackers that are setup to track weekly progress for user
// @Route /api/study/trackers/weekly
// @Method GET

// export const getAllSetupWeeklyTrackersController = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     if (isUserLoggedIn(req, res)) {
//       const user = await User.findOne({ email: req.session.user.email });
//       if (!user.trackers || user.trackers.length === 0) {
//         sendSuccessResponse(res, 'User has no subject trackers', { isAllTrackersSetup: false, weeklyTrackers: [] });
//       } else {
//         const trackers = await StudyTracking.find({ tracker_id: { $in: user.trackers } });
//         const isAllTrackersSetup = trackers.every((tracker) => tracker.is_setup);
//         const weeklyTrackers = trackers.filter((tracker) => tracker.is_setup);
//         sendSuccessResponse(res, 'All weekly progress for trackers fetched', { isAllTrackersSetup, weeklyTrackers });
//       }
//     }
//   } catch (err: any) {
//     console.error(err);
//     sendErrorResponse(res, 'Weekly progress for trackers not fetched', err.message);
//   }
// };

// @Desc Setup new tracker for user for a subject
// @Route /api/study/trackers/setup
// @Method POST

export const setupStudyTrackerController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const { id, hours, minutes } = req.body;
      const newTracker = await setupStudyTrackerForSubject(id, hours, minutes);
      sendSuccessCreatedResponse(res, 'Subject tracker added', { newTracker });
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject tracker not added', err.message);
  }
};

// @Desc Edit tracker time for user for a subject
// @Route /api/study/trackers/edit
// @Method POST

export const editStudyTrackerTimeController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const { id, hours, minutes } = req.body;
      const updatedTracker = await editStudyTrackerTimeForSubject(id, hours, minutes);
      sendSuccessResponse(res, 'Subject tracker edited', { updatedTracker });
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject tracker not edited', err.message);
  }
};

// @Desc Remove tracker for user for a subject
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

// @Desc Update time for user study tracker
// @Route /api/study/trackers/update
// @Method PUT

export const updateStudyTrackerTimerController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const { id, time } = req.body;
      await updateStudyTrackerTimerForSubject(id, time);
      sendSuccessNoContentResponse(res);
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject tracker timer not updated', err.message);
  }
};