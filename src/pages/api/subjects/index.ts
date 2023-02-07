import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../lib/session';
import Cambridge from '../../api/models/CambridgeSubject';
import connectToDB from '../../api/lib/mongodb';

export default withIronSessionApiRoute(subjectsRoute, sessionOptions);

async function subjectsRoute(req: NextApiRequest, res: NextApiResponse) {

  connectToDB();

  const subjects = await Cambridge.find({});

  res.send(subjects);

}