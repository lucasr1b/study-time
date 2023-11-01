import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { addAssessmentController } from '../../../api/controllers/assessmentController';

function addSubjectRoute(req: NextApiRequest, res: NextApiResponse) {
  return addAssessmentController(req, res);
}

export default withIronSessionApiRoute(addSubjectRoute, sessionOptions);