import mongoose from 'mongoose';

export interface IStudyTracking extends mongoose.Document {
  user: string;
  subject_id: string;
  subject_name: string;
  subject_icon: string
  is_setup: boolean;
  time_allocated: number;
  time_studied: number;
  completed: boolean;
}

const StudyTrackingSchema = new mongoose.Schema({

  user: {
    type: String,
    required: true,
  },

  subject_id: {
    type: String,
    required: true,
  },

  subject_name: {
    type: String,
    required: true,
  },

  subject_icon: {
    type: String,
    required: true,
  },

  is_setup: {
    type: Boolean,
    required: false,
    default: false,
  },

  time_allocated: {
    type: Number,
    required: false,
    default: 0,
  },

  time_studied: {
    type: Number,
    required: false,
    default: 0,
  },

  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const StudyTracking = mongoose.models.StudyTracking || mongoose.model<IStudyTracking>('StudyTracking', StudyTrackingSchema);

export default StudyTracking;