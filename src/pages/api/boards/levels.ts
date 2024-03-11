import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { getAllExamBoardLevelsController } from '../../../api/controllers/board/levelController';

function examBoardLevelsRoute(req: NextApiRequest, res: NextApiResponse) {
  return getAllExamBoardLevelsController(req, res);
}

export default withIronSessionApiRoute(examBoardLevelsRoute, sessionOptions);