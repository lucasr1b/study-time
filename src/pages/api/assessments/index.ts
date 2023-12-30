import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import Assessment from '../../../api/models/Assessment';
import { getUserFromSession } from '../../../api/utils/helpers';

async function assessmentsRoute(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromSession(req);

  const assessments = await Assessment.find({ user: user.email });

  res.send(assessments);
}

export default withIronSessionApiRoute(assessmentsRoute, sessionOptions);