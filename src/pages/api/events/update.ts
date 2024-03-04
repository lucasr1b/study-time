import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { updateEventController } from '../../../api/controllers/eventController';

function updateEventRoute(req: NextApiRequest, res: NextApiResponse) {
  return updateEventController(req, res);
}

export default withIronSessionApiRoute(updateEventRoute, sessionOptions);