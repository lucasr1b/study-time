import { NextApiRequest } from 'next';
import StudyTracking from '../models/StudyTracking';

export const createSession = async (req: NextApiRequest, name: string, email: string) => {
  req.session.user = {
    name,
    email,
  };
  await req.session.save();
};

export const validateEmail = (email: string) => {
  const regexPattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return regexPattern.test(email);
};

export const convertTimeToSeconds = (hours: number, minutes: number) => {
  const time = ((hours * 60) + minutes) * 60;
  return time;
};

export const updateAndFetchTracker = async (trackerId: string, updateData: object) => {
  await StudyTracking.findOneAndUpdate({ tracker_id: trackerId }, updateData);
  return StudyTracking.findOne({ tracker_id: trackerId });
}; 