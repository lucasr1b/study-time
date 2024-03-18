import User from '../models/User';
import CambridgeSubject from '../models/CambridgeSubject';
import StudyTracking from '../models/StudyTracking';
import { createStudyTracker } from '../utils/helpers';

export const updateSubjectForUser = async (subjectId: string, _id: string, operation: 'add' | 'remove') => {
  const updateSubjectData = operation === 'add' ? { $push: { subjects: subjectId } } : { $pull: { subjects: subjectId } };

  await User.findOneAndUpdate({ _id }, updateSubjectData);

  return CambridgeSubject.findOne({ subject_id: subjectId });
};

export const createStudyTrackerAndAddToUser = async (subjectId: string, _id: string) => {
  await createStudyTracker(subjectId, _id);
};

export const deleteStudyTrackerAndRemoveFromUser = async (subjectId: string, _id: string) => {
  await StudyTracking.findOneAndDelete({ subject_id: subjectId, user: _id });
};