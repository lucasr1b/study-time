import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../../lib/session';
import { editStudyTrackerTimeController } from '../../../../api/controllers/studyController';

export default withIronSessionApiRoute(editStudyTrackerTimeRoute, sessionOptions);

function editStudyTrackerTimeRoute(req: NextApiRequest, res: NextApiResponse) {
  return editStudyTrackerTimeController(req, res);
}