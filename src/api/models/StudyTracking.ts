import mongoose from 'mongoose';

export interface IStudyTracking extends mongoose.Document {
  tracker_id: string;
  subject_id: string;
  hours_allocated: number;
  hours_studied: number;
  completed: boolean;
}

const StudyTrackingSchema = new mongoose.Schema({

  tracker_id: {
    type: String,
    required: true,
  },

  subject_id: {
    type: String,
    required: true
  },

  hours_allocated: {
    type: Number,
    required: false
  },

  hours_studied: {
    type: Number,
    required: true
  },

  completed: {
    type: Boolean,
    required: false
  },
})

const StudyTracking = mongoose.models.StudyTracking || mongoose.model<IStudyTracking>('StudyTracking', StudyTrackingSchema);

export default StudyTracking;