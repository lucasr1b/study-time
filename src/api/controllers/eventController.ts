import { NextApiRequest, NextApiResponse } from 'next';
import Event from '../models/Event';
import { getUserFromSession, sendErrorResponse, sendSuccessNoContentResponse, sendSuccessResponse } from '../utils/helpers';
import connectToDB from '../lib/mongodb';
import { createEvent, deleteEvent, updateEvent } from '../services/eventService';

connectToDB();

// @Desc Get all events for user
// @Route /api/events
// @Method GET

export const getEventsController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = getUserFromSession(req);
    const events = await Event.find({ user: user.email }).sort({ date: 'asc' });
    sendSuccessResponse(res, 'All events fetched', { events });
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Events not fetched', err.message);
  }
};

// @Desc Add a new event
// @Route /api/events/add
// @Method POST

export const addEventController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { title, date } = req.body;
    const user = getUserFromSession(req);
    const newEvent = await createEvent(title, date, user.email);
    sendSuccessResponse(res, 'Event added', { newEvent });
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Event not added', err.message);
  }
};

// @Desc Update an event
// @Route /api/events/update
// @Method POST

export const updateEventController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id, title, date } = req.body;
    const updatedEvent = await updateEvent(id, title, date);
    sendSuccessResponse(res, 'Event updated', { updatedEvent });
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Event not updated', err.message);
  }
};

// @Desc Delete an event
// @Route /api/events/delete
// @Method POST

export const deleteEventController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.body;
    await deleteEvent(id);
    sendSuccessNoContentResponse(res);
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Event not deleted', err.message);
  }
};