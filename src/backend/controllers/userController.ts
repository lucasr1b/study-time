import { NextApiRequest, NextApiResponse } from 'next';
import connectToDB from '../lib/mongodb';
import { getUserFromSession, isUserLoggedIn, sendErrorResponse, sendSuccessResponse } from '../utils/helpers';
import User from '../models/User';
import { createOnboardingSubjectStudyTrackerAndAddToUser } from '../services/userService';

connectToDB();

// @Desc Get user profile
// @Route /api/user
// @Method GET

export const getUserProfileController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const user = getUserFromSession(req);
      sendSuccessResponse(res, 'User profile fetched', { user });
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'User profile not fetched', err.message);
  }
};

// @Desc Complete user onboarding
// @Route /api/user/finishOnboarding
// @Method POST

export const finishUserOnboardingController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const { yearLevel, country, subjects } = req.body;
      const user = getUserFromSession(req);
      await User.updateOne({ _id: user._id }, { yearLevel, country, subjects });
      await createOnboardingSubjectStudyTrackerAndAddToUser(subjects, user._id);
      req.session.user.onboarding = false;
      await req.session.save();
      sendSuccessResponse(res, 'User onboarding completed', req.session);
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'User onboarding not completeed', err.message);
  }
};