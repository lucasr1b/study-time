import Event from '../models/Event';

export const createEvent = async (title: string, date: Date, _id: string) => {
  const newEvent = await Event.create({
    user: _id,
    title: title,
    date,
  });

  return newEvent;
};

export const updateEvent = async (id: string, title: string, date: Date) => {
  const updatedEvent = await Event.findOneAndUpdate({ _id: id }, { title, date }, { new: true });

  return updatedEvent;
};

export const deleteEvent = async (id: string) => {
  await Event.findOneAndDelete({ _id: id });
};