import { NextApiRequest } from 'next';
import User from '../models/User'
import CambridgeSubject from '../models/CambridgeSubject';

export const addSubjectToUser = async (req: NextApiRequest, id: string, email: string) => {
  const user = await User.findOneAndUpdate({ email }, { $push: { subjects: id } });

  const addedSubject = await CambridgeSubject.find({ subject_id: id });
  return addedSubject[0];
}