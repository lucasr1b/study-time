import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { removeSubjectController } from '../../../api/controllers/subjectController';

function removesubjectRoute(req: NextApiRequest, res: NextApiResponse) {
  return removeSubjectController(req, res);
}

export default withIronSessionApiRoute(removesubjectRoute, sessionOptions);