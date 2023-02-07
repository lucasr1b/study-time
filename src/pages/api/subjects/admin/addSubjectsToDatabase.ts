import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../lib/session';
import CambridgeSubject from '../../api/models/CambridgeSubject';
import connectToDB from '../../api/lib/mongodb';
import { subjects } from '../../utils/subjects';

export default withIronSessionApiRoute(addSubjectsRoute, sessionOptions);

async function addSubjectsRoute(req: NextApiRequest, res: NextApiResponse) {

  connectToDB();

  try {
    subjects.forEach(async (subject) => await CambridgeSubject.create(subject))
  } catch (err) {
    console.log(err);
  }

  res.send('Created!')
}