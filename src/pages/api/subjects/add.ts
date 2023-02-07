import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { addSubjectController } from '../../../api/controllers/subjectController';

export default withIronSessionApiRoute(subjectsRoute, sessionOptions);

async function subjectsRoute(req: NextApiRequest, res: NextApiResponse) {
  return await addSubjectController(req, res);
}