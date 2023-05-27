import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import Cambridge from '../../../api/models/CambridgeSubject';
import User from '../../../api/models/User';

async function subjectsRoute(req: NextApiRequest, res: NextApiResponse) {

  const user = await User.findOne({ email: req.session.user.email });

  const subjects = await Cambridge.find({ subject_id: { $in: user.subjects } });

  res.send(subjects);

}

export default withIronSessionApiRoute(subjectsRoute, sessionOptions);