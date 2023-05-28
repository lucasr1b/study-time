import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../lib/session';

async function userProfileRoute(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.user;

  if (user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(401).json({ message: 'Failed to fetch user profile', error: 'User not logged in.' });
  }

}

export default withIronSessionApiRoute(userProfileRoute, sessionOptions);