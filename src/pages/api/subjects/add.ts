import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { addSubjectController } from '../../../api/controllers/subjectController';

export default withIronSessionApiRoute(addSubjectRoute, sessionOptions);

function addSubjectRoute(req: NextApiRequest, res: NextApiResponse) {
  return addSubjectController(req, res);
}