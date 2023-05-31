import StudyLogging from '../../models/StudyLogging';

export const logStudyTrackerSessionForSubject = async (tracker: any, time: number, email: string) => {
  const logId = 1;
  const log = await StudyLogging.insertMany({ log_id: logId, log_user: email, subject_name: tracker.subject_name, subject_icon: tracker.subject_icon, time_studied: time, date_logged: new Date() });
  return log;
};