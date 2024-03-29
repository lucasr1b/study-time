import axios from 'axios';
import Router from 'next/router';
import Link from 'next/link';
import { SyntheticEvent } from 'react';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from '../lib/session';
import Navbar from '../components/navigation/Navbar';
import { toast } from 'react-toastify';
import Head from 'next/head';

const RegisterPage = () => {

  const registerUser = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { fname, email, password, cpassword } = document.forms[0];

    const data = {
      name: fname.value,
      email: email.value,
      password: password.value,
      cpassword: cpassword.value,
    };

    try {
      await axios.post('/api/auth/register', data);
      Router.push('/app');
    } catch (err: any) {
      console.error('Error during register:', err.response.data.error);
      password.value = '';
      cpassword.value = '';
      toast.error(err.response.data.error);
    }
  };

  return (
    <div className='flex flex-col px-8 py-4 h-screen'>
      <Head>
        <title>Sign up</title>
      </Head>
      <Navbar />
      <div className='flex justify-center items-center h-screen w-full'>
        <div className='flex justify-center items bg-primary border border-accent py-8 px-16 rounded-lg w-1/3 h-fit'>
          <div className='w-full space-y-4'>
            <h1 className='text-2xl font-bold leading-tight tracking-tight'>
              Create an account
            </h1>
            <form className='space-y-4' onSubmit={registerUser}>
              <div>
                <label htmlFor='fname' className='block mb-2 text-sm font-medium'>Name</label>
                <input type='text' name='fname' className='border border-accent rounded-lg block w-full p-2.5 focus:outline-accent placeholder:text-text-secondary bg-primary' placeholder='John Doe' />
              </div>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm font-medium'>Email</label>
                <input type='email' name='email' className='border border-accent rounded-lg block w-full p-2.5 focus:outline-accent placeholder:text-text-secondary bg-primary' placeholder='john.doe@gmail.com' />
              </div>
              <div>
                <label htmlFor='password' className='block mb-2 text-sm font-medium'>Password</label>
                <input type='password' name='password' placeholder='••••••••' className='border border-accent rounded-lg block w-full p-2.5 focus:outline-accent placeholder:text-text-secondary bg-primary' />
              </div>
              <div>
                <label htmlFor='cpassword' className='block mb-2 text-sm font-medium'>Confirm password</label>
                <input type='password' name='cpassword' placeholder='••••••••' className='border border-accent rounded-lg block w-full p-2.5 focus:outline-accent placeholder:text-text-secondary bg-primary' />
              </div>
              <button type='submit' className='w-full border border-accent hover:bg-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Sign up</button>
              <p className='text-sm font-light text-text-secondary'>
                Already have an account? <Link href='/login' className='font-medium text-text hover:underline'>Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

export const getServerSideProps = withIronSessionSsr(
  async ({ req }) => {
    const user = req.session.user;

    if (user) {
      return {
        redirect: {
          destination: '/app',
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  }, sessionOptions,
);