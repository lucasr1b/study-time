import { NextApiRequest } from 'next';
import User from '../models/User'

export const addSubjectToUser = async (req: NextApiRequest, id: string, email: string) => {
  const user = await User.findOneAndUpdate({ email }, { $push: { subjects: id } });
  req.session.user.subjects = user.subjects;
  return 'Done!';
}