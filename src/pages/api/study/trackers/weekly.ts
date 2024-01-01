import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../../lib/session';
import { getAllWeeklyTrackersProgressController } from '../../../../api/controllers/study/trackerController';

async function weeklyTrackersProgressRoute(req: NextApiRequest, res: NextApiResponse) {
  return getAllWeeklyTrackersProgressController(req, res);
}

export default withIronSessionApiRoute(weeklyTrackersProgressRoute, sessionOptions);