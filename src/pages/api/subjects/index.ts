import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import Cambridge from '../../../api/models/CambridgeSubject';
import connectToDB from '../../../api/lib/mongodb';

export default withIronSessionApiRoute(addSubjectRoute, sessionOptions);

async function addSubjectRoute(req: NextApiRequest, res: NextApiResponse) {

  res.send('Added!');

}