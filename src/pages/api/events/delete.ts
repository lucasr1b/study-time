import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { deleteEventController } from '../../../api/controllers/eventController';

function deleteEventRoute(req: NextApiRequest, res: NextApiResponse) {
  return deleteEventController(req, res);
}

export default withIronSessionApiRoute(deleteEventRoute, sessionOptions);