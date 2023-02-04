import { NextApiRequest, NextApiResponse } from 'next';
import connectToDB from '../lib/mongodb';
import { createUserAndSession, validateUserCreationFields } from '../services/authService';

connectToDB();

// @Desc Register user
// @Route /api/auth/register
// @Method POST

export const authRegisterUserController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, password, cpassword } = req.body;

    const userCreationFieldsValidation = await validateUserCreationFields(name, email, password, cpassword);

    if (userCreationFieldsValidation === true) {
      const user = await createUserAndSession(req, name, email, password);
      res.status(201).json({ message: 'Account created', user });
    } else {
      res.status(400).json({ message: 'Account not created', error: userCreationFieldsValidation });
    }
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: 'Account not created', error: err.message });
  }
}