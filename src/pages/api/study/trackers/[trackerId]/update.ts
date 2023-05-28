import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../../../lib/session';
import { updateStudyTrackerTimerController } from '../../../../../api/controllers/studyController';

async function subjectTrackerItemRoute(req: NextApiRequest, res: NextApiResponse) {
  return updateStudyTrackerTimerController(req, res);
}

export default withIronSessionApiRoute(subjectTrackerItemRoute, sessionOptions);