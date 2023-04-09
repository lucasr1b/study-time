import { NextApiRequest } from 'next';
import User from '../models/User';
import { createSession, validateEmail } from '../utils/helpers';

export const validateUserCreationFields = async (name: string, email: string, password: string, cpassword: string) => {
  if (name && email && password && cpassword) {
    const doesAccountExist = await User.findOne({ email });
    if (validateEmail(email)) {
      if (!doesAccountExist) {
        if (password.length >= 8) {
          if (password === cpassword) {
            return true;
          } else {
            return 'Passwords do not match.';
          }
        } else {
          return 'Passwords must be at least 8 characters long.';
        }
      } else {
        return 'An account with that email already exists.';
      }
    } else {
      return 'That email address is not valid.';
    }
  } else {
    return 'All fields are required.';
  }
}

export const createUserAndSession = async (req: NextApiRequest, name: string, email: string, password: string) => {
  const user = await User.create({
    name,
    email,
    password,
    subjects: ['English', 'Maths'] // Remove in future
  });
  await createSession(req, user.name, user.email);
  return user;
}

export const validateUserCrendetialFieldsAndCreateSession = async (req: NextApiRequest, email: string, password: string) => {
  if (email && password) {
    const user = await User.findOne({ email });

    if (user) {
      if (await user.comparePassword(password)) {
        await createSession(req, user.name, user.email);
        return true;
      } else {
        return 'Email or password is incorrect.';
      }
    } else {
      return 'Email or password is incorrect.';
    }
  } else {
    return 'All fields are required.';
  }
}
