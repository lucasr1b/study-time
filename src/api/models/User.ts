import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends mongoose.Document {
  name: string,
  email: string,
  password: string,
  subjects: string[],
  createdAt: Date,
  updatedAt: Date,
  yearLevel: number,
  country: string,
  comparePassword(password: string): Promise<boolean>,
}

const UserSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  subjects: [{
    type: String,
    default: [],
    required: false,
  }],

  yearLevel: {
    type: Number,
    default: 0,
    required: false,
  },

  country: {
    type: String,
    default: '',
    required: false,
  },

}, {
  timestamps: true,
});

UserSchema.pre('save', async function (next) {
  const user = this as IUser;

  if (!user.isModified('password')) return next();

  const salt = bcrypt.genSaltSync();
  const hashedPassword = bcrypt.hashSync(user.password, salt);

  user.password = hashedPassword;

  next();
});

UserSchema.methods.comparePassword = async function (password: string) {
  const user = this as IUser;
  return bcrypt.compareSync(password, user.password);
};

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;