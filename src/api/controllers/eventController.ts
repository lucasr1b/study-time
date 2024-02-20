import { NextApiRequest, NextApiResponse } from 'next';
import Event from '../models/Event';
import { getUserFromSession, sendErrorResponse, sendSuccessResponse } from '../utils/helpers';

export const getEventsController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = getUserFromSession(req).email;
    const events = await Event.find({ user });
    sendSuccessResponse(res, 'All events fetched', events);
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Events not fetched', err.message);
  }
};