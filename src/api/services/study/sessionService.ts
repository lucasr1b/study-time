import StudySession from '../../models/StudySessions';

export const logStudyTrackerSessionForSubject = async (tracker: any, time: number, email: string) => {
  await StudySession.insertMany({ log_user: email, subject_name: tracker.subject_name, subject_icon: tracker.subject_icon, time_studied: time, date_logged: new Date() });
};