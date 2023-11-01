import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import Assessment from '../../../api/models/Assessment';

async function assessmentsRoute(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.user;

  const assessments = await Assessment.find({ user: user.email });

  res.send(assessments);
}

export default withIronSessionApiRoute(assessmentsRoute, sessionOptions);