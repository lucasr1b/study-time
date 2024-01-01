import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../../lib/session';
import { getAllAssessmentsController } from '../../../api/controllers/assessmentController';

async function assessmentsRoute(req: NextApiRequest, res: NextApiResponse) {
  return getAllAssessmentsController(req, res);
}

export default withIronSessionApiRoute(assessmentsRoute, sessionOptions);