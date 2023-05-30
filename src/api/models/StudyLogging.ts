import mongoose from 'mongoose';

export interface IStudyLogging extends mongoose.Document {
  log_id: string;
  log_user: string;
  subject_name: string;
  subject_icon: string;
  time_studied: number;
  date_logged: Date;
}

const StudyLoggingSchema = new mongoose.Schema({

  log_id: {
    type: String,
    required: true,
  },

  log_user: {
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

  time_studied: {
    type: Number,
    required: true,
  },

  date_logged: {
    type: Date,
    required: true,
  },
});

const StudyLogging = mongoose.models.StudyLogging || mongoose.model<IStudyLogging>('StudyLogging', StudyLoggingSchema);

export default StudyLogging;