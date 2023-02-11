import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { removeSubjectController } from '../../../api/controllers/subjectController';

export default withIronSessionApiRoute(removesubjectRoute, sessionOptions);

async function removesubjectRoute(req: NextApiRequest, res: NextApiResponse) {
  return await removeSubjectController(req, res);
}