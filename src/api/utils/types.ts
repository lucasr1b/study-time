import { Mongoose } from 'mongoose';

declare global {
  var mongoose: {
    promise: Promise<Mongoose> | null;
    conn: Mongoose | null;
  };
}

export type Tracker = {
  tracker_id: string;
  user: string;
  subject_id: string;
  subject_name: string;
  subject_icon: string
  is_setup: boolean;
  time_allocated: number;
  time_studied: number;
  completed: boolean;
};