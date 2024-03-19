import mongoose from 'mongoose';

export interface ISubject extends mongoose.Document {
  subject_id: string;
  subject_name: string;
  subject_board: string;
  subject_level: string;
  subject_icon: string;
  board_id: string;
  level_id: string;
}

const SubjectSchema = new mongoose.Schema({

  subject_id: {
    type: String,
    required: true,
  },

  subject_name: {
    type: String,
    required: true,
  },

  subject_board: {
    type: String,
    required: true,
  },

  subject_level: {
    type: String,
    required: true,
  },

  subject_icon: {
    type: String,
    required: true,
  },

  board_id: {
    type: String,
    required: true,
  },

  level_id: {
    type: String,
    required: true,
  },
});

const Subject = mongoose.models.Subject || mongoose.model<ISubject>('Subject', SubjectSchema);

export default Subject;
