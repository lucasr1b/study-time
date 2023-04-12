import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../../lib/session';
import { removeStudyTrackerController } from '../../../../api/controllers/studyController';

export default withIronSessionApiRoute(removeStudyTrackerRoute, sessionOptions);

async function removeStudyTrackerRoute(req: NextApiRequest, res: NextApiResponse) {
  return await removeStudyTrackerController(req, res);
}