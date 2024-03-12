import User from '../models/User';
import { createStudyTracker } from '../utils/helpers';

export const createOnboardingSubjectStudyTrackerAndAddToUser = async (subjectIdList: string[], email: string) => {
  const trackerIds = await Promise.all(subjectIdList.map((subjectId) => createStudyTracker(subjectId, email)));

  await User.findOneAndUpdate({ email }, { $push: { trackers: { $each: trackerIds } } });
};
