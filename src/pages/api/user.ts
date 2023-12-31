import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../lib/session';
import { getUserFromSession, sendErrorUnauthorizedResponse, sendSuccessResponse } from '../../api/utils/helpers';

async function userProfileRoute(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromSession(req);

  if (user) {
    sendSuccessResponse(res, 'User profile fetched', user);
  } else {
    sendErrorUnauthorizedResponse(res);
  }

}

export default withIronSessionApiRoute(userProfileRoute, sessionOptions);