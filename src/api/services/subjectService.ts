import User from '../models/User';
import CambridgeSubject from '../models/CambridgeSubject';
import StudyTracking from '../models/StudyTracking';
import { createStudyTracker } from '../utils/helpers';

export const updateSubjectForUser = async (id: string, email: string, operation: 'add' | 'remove') => {
  const updateSubjectData = operation === 'add' ? { $push: { subjects: id } } : { $pull: { subjects: id } };

  await User.findOneAndUpdate({ email }, updateSubjectData);

  return CambridgeSubject.findOne({ subject_id: id });
};

export const createStudyTrackerAndAddToUser = async (subjectId: string, email: string) => {
  const trackerId = await createStudyTracker(subjectId, email);

  await User.findOneAndUpdate({ email }, { $push: { trackers: trackerId } });
};

export const deleteStudyTrackerAndRemoveFromUser = async (subjectId: string, email: string) => {
  const tracker = await StudyTracking.findOneAndDelete({ subject_id: subjectId, user: email });
  await User.findOneAndUpdate({ email }, { $pull: { trackers: tracker.tracker_id } });
};