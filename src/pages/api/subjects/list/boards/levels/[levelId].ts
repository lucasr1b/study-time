import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../../../../lib/session';
import { getSubjectListItemFromExamBoardLevelController } from '../../../../../../backend/controllers/subjectController';

function subjectListItemFromExamBoardLevelRoute(req: NextApiRequest, res: NextApiResponse) {
  return getSubjectListItemFromExamBoardLevelController(req, res);
}

export default withIronSessionApiRoute(subjectListItemFromExamBoardLevelRoute, sessionOptions);