import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../../lib/session';
import { editStudyTrackerTimeController } from '../../../../api/controllers/studyController';

export default withIronSessionApiRoute(editStudyTrackerTimeRoute, sessionOptions);

async function editStudyTrackerTimeRoute(req: NextApiRequest, res: NextApiResponse) {
  return await editStudyTrackerTimeController(req, res);
}