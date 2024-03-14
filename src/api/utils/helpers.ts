import { NextApiRequest, NextApiResponse } from 'next';
import StudyTracking from '../models/StudyTracking';
import CambridgeSubject from '../models/CambridgeSubject';

export const sendSuccessResponse = (res: NextApiResponse, message: string, data: any) => {
  res.status(200).json({ message, ...data });
};

export const sendSuccessCreatedResponse = (res: NextApiResponse, message: string, data?: any) => {
  res.status(201).json({ message, ...data });
};

export const sendSuccessNoContentResponse = (res: NextApiResponse) => {
  res.status(204).end();
};

export const sendErrorResponse = (res: NextApiResponse, message: string, error: string) => {
  res.status(400).json({ message, error });
};

export const sendErrorUnauthorizedResponse = (res: NextApiResponse, error?: string) => {
  res.status(401).json({ error: error || 'Not logged in' });
};

export const getUserFromSession = (req: NextApiRequest) => {
  return req.session.user;
};

export const isUserLoggedIn = (req: NextApiRequest, res: NextApiResponse) => {
  const user = getUserFromSession(req);

  if (!user) {
    sendErrorUnauthorizedResponse(res);
    return false;
  }
  return true;
};

export const createSession = async (req: NextApiRequest, name: string, email: string, onboarding: boolean) => {
  req.session.user = {
    name,
    email,
    onboarding,
  };
  await req.session.save();
};

export const validateEmail = (email: string) => {
  const regexPattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/);
  return regexPattern.test(email);
};

export const convertTimeToSeconds = (hours: number, minutes: number) => {
  const time = ((hours * 60) + minutes) * 60;
  return time;
};

export const createStudyTracker = async (subjectId: string, email: string) => {
  const subjectDetails = await CambridgeSubject.findOne({ subject_id: subjectId });

  await StudyTracking.create({
    user: email,
    subject_id: subjectId,
    subject_name: subjectDetails.subject_name,
    subject_icon: subjectDetails.subject_icon,
  });
};

export const updateAndFetchTracker = async (trackerId: string, updateData: object) => {
  await StudyTracking.findOneAndUpdate({ _id: trackerId }, { $set: updateData });
  return StudyTracking.findOne({ _id: trackerId });
}; 