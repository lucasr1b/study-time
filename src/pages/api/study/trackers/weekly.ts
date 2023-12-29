import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../../lib/session';
import connectToDB from '../../../../api/lib/mongodb';
import StudyTracking from '../../../../api/models/StudyTracking';
import User from '../../../../api/models/User';

async function weeklyTrackersProgressRoute(req: NextApiRequest, res: NextApiResponse) {
  connectToDB();

  const user = await User.findOne({ email: req.session.user.email });

  const trackers = await StudyTracking.find({ tracker_id: { $in: user.trackers }, is_setup: true });

  res.send(trackers);
}

export default withIronSessionApiRoute(weeklyTrackersProgressRoute, sessionOptions);