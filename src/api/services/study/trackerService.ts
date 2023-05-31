import StudyTracking from '../../models/StudyTracking';
import { convertTimeToSeconds } from '../../utils/helpers';

export const setupStudyTrackerForSubject = async (trackerId: string, hours: number, minutes: number) => {
  await StudyTracking.findOneAndUpdate({ tracker_id: trackerId }, { is_setup: true, time_allocated: convertTimeToSeconds(hours, minutes) });
  const tracker = await StudyTracking.findOne({ tracker_id: trackerId });
  return tracker;
};

export const editStudyTrackerTimeForSubject = async (trackerId: string, hours: number, minutes: number) => {
  await StudyTracking.findOneAndUpdate({ tracker_id: trackerId }, { time_allocated: convertTimeToSeconds(hours, minutes) });
  const tracker = await StudyTracking.findOne({ tracker_id: trackerId });
  return tracker;
};

export const removeStudyTrackerForSubject = async (trackerId: string) => {
  await StudyTracking.findOneAndUpdate({ tracker_id: trackerId }, { is_setup: false, time_allocated: 0, time_studied: 0, completed: false });
  const tracker = await StudyTracking.findOne({ tracker_id: trackerId });
  return tracker;
};

export const updateStudyTrackerTimerForSubject = async (trackerId: any, timeStudied: number) => {
  await StudyTracking.findOneAndUpdate({ tracker_id: trackerId }, { time_studied: timeStudied });
  const tracker = await StudyTracking.findOne({ tracker_id: trackerId });
  return tracker;
};