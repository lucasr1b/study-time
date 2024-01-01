import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../../lib/session';
import { getAllSubjectTrackersController } from '../../../../api/controllers/study/trackerController';

async function subjectTrackersRoute(req: NextApiRequest, res: NextApiResponse) {
  return getAllSubjectTrackersController(req, res);
}

export default withIronSessionApiRoute(subjectTrackersRoute, sessionOptions);