import mongoose from 'mongoose';

export interface IStudySession extends mongoose.Document {
  log_user: string;
  subject_name: string;
  subject_icon: string;
  time_studied: number;
  date_logged: Date;
}

const StudySessionSchema = new mongoose.Schema({

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

const StudySession = mongoose.models.StudyLogging || mongoose.model<IStudySession>('StudyLogging', StudySessionSchema);

export default StudySession;