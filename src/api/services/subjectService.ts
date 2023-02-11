import User from '../models/User'
import CambridgeSubject from '../models/CambridgeSubject';

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