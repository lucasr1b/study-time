import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { finishUserOnboardingController } from '../../../backend/controllers/userController';

function finishUserOnboardingRoute(req: NextApiRequest, res: NextApiResponse) {
  return finishUserOnboardingController(req, res);
}

export default withIronSessionApiRoute(finishUserOnboardingRoute, sessionOptions);