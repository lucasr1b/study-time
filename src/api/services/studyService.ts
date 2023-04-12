import StudyTracking from '../models/StudyTracking'

export const setupStudyTrackerForSubject = async (tracker_id: string, time: number) => {
  await StudyTracking.findOneAndUpdate({ tracker_id }, { is_setup: true, hours_allocated: time })
  const tracker = await StudyTracking.findOne({ tracker_id })
  return tracker;
}