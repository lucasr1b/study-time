import mongoose from 'mongoose';

export interface IExamBoard extends mongoose.Document {
  board_name: string;
  board_levels: string[];
}

const ExamBoardSchema = new mongoose.Schema({
  board_name: {
    type: String,
    required: true,
  },

  board_levels: [{
    type: String,
    required: true,
  }],
});

const ExamBoard = mongoose.models.ExamBoard || mongoose.model<IExamBoard>('ExamBoard', ExamBoardSchema);

export default ExamBoard;
