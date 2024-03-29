import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { getAllExamBoardsController } from '../../../backend/controllers/board/boardController';

function examBoardsRoute(req: NextApiRequest, res: NextApiResponse) {
  return getAllExamBoardsController(req, res);
}

export default withIronSessionApiRoute(examBoardsRoute, sessionOptions);