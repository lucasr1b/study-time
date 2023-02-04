import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { NextApiRequest, NextApiResponse } from 'next';

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  req.session.user = {
    name: 'John Doe',
    email: 'jogn.doe@gmail.com',
    subjects: ['English', 'Maths', 'History']
  };

  await req.session.save();
  res.send(req.session.user);
}