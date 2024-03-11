import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../../../lib/session';
import { getSubjectListItemFromExamBoardController } from '../../../../../api/controllers/subjectController';

function subjectListItemFromExamBoardRoute(req: NextApiRequest, res: NextApiResponse) {
  return getSubjectListItemFromExamBoardController(req, res);
}

export default withIronSessionApiRoute(subjectListItemFromExamBoardRoute, sessionOptions);