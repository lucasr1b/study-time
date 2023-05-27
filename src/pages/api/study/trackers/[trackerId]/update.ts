import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../../../lib/session';
import { updateStudyTrackerTimerController } from '../../../../../api/controllers/studyController';

export default withIronSessionApiRoute(subjectTrackerItemRoute, sessionOptions);

async function subjectTrackerItemRoute(req: NextApiRequest, res: NextApiResponse) {
  return updateStudyTrackerTimerController(req, res);
}