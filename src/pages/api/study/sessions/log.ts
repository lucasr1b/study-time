import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../../lib/session';
import { logStudyTrackerSessionController } from '../../../../backend/controllers/study/sessionController';

function logStudyTrackerSessionRoute(req: NextApiRequest, res: NextApiResponse) {
  return logStudyTrackerSessionController(req, res);
}

export default withIronSessionApiRoute(logStudyTrackerSessionRoute, sessionOptions);