import { NextApiRequest, NextApiResponse } from 'next';
import connectToDB from '../lib/mongodb';
import { createUserAndSession, validateUserCreationFields, validateUserCrendetialFieldsAndCreateSession } from '../services/authService';
import { getUserFromSession } from '../utils/helpers';

connectToDB();

// @Desc Register user
// @Route /api/auth/register
// @Method POST

export const authRegisterUserController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, password, cpassword } = req.body;

    const userCreationFieldsValidation = await validateUserCreationFields(name, email, password, cpassword);

    if (userCreationFieldsValidation) {
      const user = await createUserAndSession(req, name, email, password);
      res.status(201).json({ message: 'Account created', user });
    } else {
      res.status(400).json({ message: 'Account not created', error: userCreationFieldsValidation });
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Account not created', error: err.message });
  }
};

// @Desc Login user
// @Route /api/auth/login
// @Method POST

export const authLoginUserController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body;

    const userCrendetialFieldsValidation = await validateUserCrendetialFieldsAndCreateSession(req, email, password);

    if (userCrendetialFieldsValidation) {
      res.status(200).json({ message: 'Successfully authenticated', user: getUserFromSession(req) });
    } else {
      res.status(400).json({ message: 'Authentication failed', error: userCrendetialFieldsValidation });
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Authentication failed', error: err.message });
  }
};