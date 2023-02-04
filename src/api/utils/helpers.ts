import { NextApiRequest } from 'next';

export const createSession = async (req: NextApiRequest, name: string, email: string, subjects: string[]) => {
  req.session.user = {
    name,
    email,
    subjects
  }
  await req.session.save();
}

export const validateEmail = (email: string) => {
  const regexPattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return regexPattern.test(email);
}