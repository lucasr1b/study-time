import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../lib/session';
import Cambridge from '../../api/models/Cambridge';
import connectToDB from '../../api/lib/mongodb';

export default withIronSessionApiRoute(subjectsRoute, sessionOptions);

async function subjectsRoute(req: NextApiRequest, res: NextApiResponse) {

  connectToDB();

  // const subject = await Cambridge.create({
  //   subject_id: 486,
  //   subject_name: 'English - Literature',
  //   subject_description: 'Improve communication skills through reading, writing, speaking, and comprehension of the language.',
  //   subject_icon: '📚'
  // });

  const subjects = await Cambridge.find({});

  res.send(subjects);

}