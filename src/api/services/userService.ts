import { createStudyTracker } from '../utils/helpers';

export const createOnboardingSubjectStudyTrackerAndAddToUser = async (subjectIdList: string[], email: string) => {
  await Promise.all(subjectIdList.map((subjectId) => createStudyTracker(subjectId, email)));
};
