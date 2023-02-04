import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { NextApiRequest, NextApiResponse } from 'next';
import { authRegisterUserController } from '../../../api/controllers/authController';

export default withIronSessionApiRoute(registerRoute, sessionOptions);

async function registerRoute(req: NextApiRequest, res: NextApiResponse) {
  return await authRegisterUserController(req, res);
}