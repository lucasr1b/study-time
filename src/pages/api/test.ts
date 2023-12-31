import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../lib/session';
import { sendSuccessResponse } from '../../api/utils/helpers';

async function devTestRoute(req: NextApiRequest, res: NextApiResponse) {

  sendSuccessResponse(res, 'Hello World');

}

export default withIronSessionApiRoute(devTestRoute, sessionOptions);