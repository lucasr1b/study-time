import { createStudyTracker } from '../utils/helpers';

export const createOnboardingSubjectStudyTrackerAndAddToUser = async (subjectIdList: string[], _id: string) => {
  await Promise.all(subjectIdList.map((subjectId) => createStudyTracker(subjectId, _id)));
};
