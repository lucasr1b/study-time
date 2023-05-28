import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../../lib/session';
import Cambridge from '../../../../api/models/CambridgeSubject';
import connectToDB from '../../../../api/lib/mongodb';

async function subjectListItemRoute(req: NextApiRequest, res: NextApiResponse) {

  connectToDB();

  const subject = await Cambridge.find({ subject_id: req.query.id });

  res.send(subject);


}

export default withIronSessionApiRoute(subjectListItemRoute, sessionOptions);