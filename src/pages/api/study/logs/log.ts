import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../../lib/session';
import { logStudyTrackerSessionController } from '../../../../api/controllers/study/logController';

function logStudyTrackerSessionRoute(req: NextApiRequest, res: NextApiResponse) {
  return logStudyTrackerSessionController(req, res);
}

export default withIronSessionApiRoute(logStudyTrackerSessionRoute, sessionOptions);