import User from '../models/User'
import CambridgeSubject from '../models/CambridgeSubject';
import StudyTracking from '../models/StudyTracking';

export const addSubjectToUser = async (id: string, email: string) => {
  await User.findOneAndUpdate({ email }, { $push: { subjects: id } });

  const addedSubject = await CambridgeSubject.findOne({ subject_id: id });
  return addedSubject;
}

export const removeSubjectFromUser = async (id: string, email: string) => {
  await User.findOneAndUpdate({ email }, { $pull: { subjects: id } });

  const removedSubject = await CambridgeSubject.findOne({ subject_id: id });
  return removedSubject;
}

export const createStudyTrackerAndAddToUser = async (subject_id: string, email: string) => {
  let tracker_id = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)

  await StudyTracking.create({
    tracker_id,
    subject_id,
  })

  await User.findOneAndUpdate({ email }, { $push: { trackers: tracker_id } });
}