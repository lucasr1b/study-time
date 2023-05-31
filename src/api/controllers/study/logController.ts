import { NextApiRequest, NextApiResponse } from 'next';

// @Desc Log study session
// @Route /api/study/logs/{trackerId}/log
// @Method PUT

export const logTrackerStudySessionController = (req: NextApiRequest, res: NextApiResponse) => {
  res.send('Hello World');
};

