import mongoose from 'mongoose';

export interface ICambridge extends mongoose.Document {
  subject_id: number;
  subject_name: string;
  subject_description: string;
  subject_level: string;
  subject_icon: string;
}

const CambridgeSchema = new mongoose.Schema({

  subject_id: {
    type: Number,
    required: true,
  },

  subject_name: {
    type: String,
    required: true
  },

  subject_description: {
    type: String,
    required: false
  },

  subject_level: {
    type: String,
    required: true
  },

  subject_icon: {
    type: String,
    required: true
  },
})

const Cambridge = mongoose.models.Cambridge || mongoose.model<ICambridge>('Cambridge', CambridgeSchema);

export default Cambridge;