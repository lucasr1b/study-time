import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../../lib/session';
import connectToDB from '../../../../api/lib/mongodb';
import StudyTracking from '../../../../api/models/StudyTracking';

export default withIronSessionApiRoute(weeklyTrackesrProgressRoute, sessionOptions);

async function weeklyTrackesrProgressRoute(req: NextApiRequest, res: NextApiResponse) {
  connectToDB()

  const trackerIDs = [ // Sample data, replace with user tracker array from DB
    '5318',
    '8593',
    '9649',
    '0455'
  ]

  const trackers = await StudyTracking.find({ tracker_id: trackerIDs, is_setup: true })

  res.send(trackers)
}