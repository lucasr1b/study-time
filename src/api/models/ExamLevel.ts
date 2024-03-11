import mongoose from 'mongoose';

export interface IExamLevel extends mongoose.Document {
  level_id: string;
  level_name: string;
  board_id: string;
}

const ExamLevelSchema = new mongoose.Schema({
  level_id: {
    type: String,
    required: true,
  },

  level_name: {
    type: String,
    required: true,
  },

  board_id: {
    type: String,
    required: true,
  },

});

const ExamLevel = mongoose.models.ExamLevel || mongoose.model<IExamLevel>('ExamLevel', ExamLevelSchema);

export default ExamLevel;
