import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { addEventController } from '../../../backend/controllers/eventController';

function addEventRoute(req: NextApiRequest, res: NextApiResponse) {
  return addEventController(req, res);
}

export default withIronSessionApiRoute(addEventRoute, sessionOptions);