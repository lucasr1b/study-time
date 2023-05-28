import User from '../models/User';
import CambridgeSubject from '../models/CambridgeSubject';
import StudyTracking from '../models/StudyTracking';

export const addSubjectToUser = async (id: string, email: string) => {
  await User.findOneAndUpdate({ email }, { $push: { subjects: id } });

  const addedSubject = await CambridgeSubject.findOne({ subject_id: id });
  return addedSubject;
};

export const removeSubjectFromUser = async (id: string, email: string) => {
  await User.findOneAndUpdate({ email }, { $pull: { subjects: id } });

  const removedSubject = await CambridgeSubject.findOne({ subject_id: id });
  return removedSubject;
};

export const createStudyTrackerAndAddToUser = async (subjectId: string, email: string) => {
  let trackerId = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

  const subjectDetails = await CambridgeSubject.findOne({ subject_id: subjectId });

  await StudyTracking.create({
    tracker_id: trackerId,
    tracker_user: email,
    subject_id: subjectId,
    subject_name: subjectDetails.subject_name,
    subject_icon: subjectDetails.subject_icon,
  });

  await User.findOneAndUpdate({ email }, { $push: { trackers: trackerId } });
};

export const deleteStudyTrackerAndRemoveFromUser = async (subjectId: string, email: string) => {
  const tracker = await StudyTracking.findOneAndDelete({ subject_id: subjectId, tracker_user: email });
  await User.findOneAndUpdate({ email }, { $pull: { trackers: tracker.tracker_id } });
};