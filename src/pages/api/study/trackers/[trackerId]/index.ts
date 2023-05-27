import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../../../lib/session';
import connectToDB from '../../../../../api/lib/mongodb';
import StudyTracking from '../../../../../api/models/StudyTracking';

async function subjectTrackerItemRoute(req: NextApiRequest, res: NextApiResponse) {
  connectToDB();

  const { trackerId } = req.query;

  const tracker = await StudyTracking.find({ tracker_id: trackerId });

  res.send(tracker);
}

export default withIronSessionApiRoute(subjectTrackerItemRoute, sessionOptions);