import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { getUserProfileController } from '../../../backend/controllers/userController';

function userProfileRoute(req: NextApiRequest, res: NextApiResponse) {
  return getUserProfileController(req, res);
}

export default withIronSessionApiRoute(userProfileRoute, sessionOptions);