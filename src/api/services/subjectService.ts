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
  await createStudyTracker(subjectId, email);
};

export const deleteStudyTrackerAndRemoveFromUser = async (subjectId: string, email: string) => {
  await StudyTracking.findOneAndDelete({ subject_id: subjectId, user: email });
};