import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../../../lib/session';
import connectToDB from '../../../../../api/lib/mongodb';
import StudyTracking from '../../../../../api/models/StudyTracking';

async function subjectTrackerItemRoute(req: NextApiRequest, res: NextApiResponse) {
  connectToDB();

  const { subjectId } = req.query;
  const user = req.session.user.email; // Change to id in future

  const tracker = await StudyTracking.find({ subject_id: subjectId, tracker_user: user });

  res.send(tracker);
}

export default withIronSessionApiRoute(subjectTrackerItemRoute, sessionOptions);