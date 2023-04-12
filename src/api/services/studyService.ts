import StudyTracking from '../models/StudyTracking'

export const setupStudyTrackerForSubject = async (tracker_id: string, time: number) => {
  const tracker = await StudyTracking.findOneAndUpdate({ tracker_id }, { is_setup: true, hours_allocated: time })
  return tracker;
}