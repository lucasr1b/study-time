import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../lib/session';
import { getUserFromSession } from '../../api/utils/helpers';

async function userProfileRoute(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromSession(req);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(401).json({ message: 'Failed to fetch user profile', error: 'User not logged in.' });
  }

}

export default withIronSessionApiRoute(userProfileRoute, sessionOptions);