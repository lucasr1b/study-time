import { NextApiRequest, NextApiResponse } from 'next';
import connectToDB from '../../lib/mongodb';
import { sendErrorResponse, sendSuccessResponse } from '../../utils/helpers';
import ExamLevel from '../../models/ExamLevel';

connectToDB();

// @Desc Get all exam board levels
// @Route /api/boards/levels
// @Method GET

export const getAllExamBoardLevelsController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const examLevels = await ExamLevel.find();
    sendSuccessResponse(res, 'All exam board levels fetched', { examLevels });
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Exam board levels not fetched', err.message);
  }
};