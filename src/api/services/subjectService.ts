import User from '../models/User'

export const addSubjectToUser = async (id: string, email: string) => {
  await User.updateOne({ email }, { $push: { subjects: id } });
  return 'Done!';
}