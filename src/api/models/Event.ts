import mongoose from 'mongoose';

export interface IEvent extends mongoose.Document {
  user: string;
  title: string;
  date: Date;
}

const EventSchema = new mongoose.Schema({

  user: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },
});

const Event = mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);

export default Event;
