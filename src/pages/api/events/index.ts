import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { getEventsController } from '../../../backend/controllers/eventController';

function eventsRoute(req: NextApiRequest, res: NextApiResponse) {
  return getEventsController(req, res);
}

export default withIronSessionApiRoute(eventsRoute, sessionOptions);