import { NextApiRequest, NextApiResponse } from 'next';
import connectToDB from '../lib/mongodb';
import ExamBoard from '../models/ExamBoard';
import { sendErrorResponse, sendSuccessResponse } from '../utils/helpers';

connectToDB();

// @Desc Get all exam boards
// @Route /api/boards
// @Method GET

export const getAllExamBoardsController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const examBoards = await ExamBoard.find();
    sendSuccessResponse(res, 'All exam boards fetched', { examBoards });
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Exam boards not fetched', err.message);
  }
};