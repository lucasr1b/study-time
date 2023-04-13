import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../../lib/session';
import connectToDB from '../../../../api/lib/mongodb';
import StudyTracking from '../../../../api/models/StudyTracking';

export default withIronSessionApiRoute(subjectTrackerItemRoute, sessionOptions);

async function subjectTrackerItemRoute(req: NextApiRequest, res: NextApiResponse) {
  connectToDB();

  const { tracker_id } = req.query

  const tracker = await StudyTracking.find({ tracker_id });

  res.send(tracker)
}