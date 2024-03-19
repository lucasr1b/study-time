import axios from 'axios';
import { withIronSessionSsr } from 'iron-session/next';
import Link from 'next/link';
import Router from 'next/router';
import { SyntheticEvent } from 'react';
import { sessionOptions } from '../lib/session';
import Navbar from '../components/navigation/Navbar';
import { ToastContainer, toast } from 'react-toastify';

const LoginPage = () => {

  const authenticateUser = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = document.forms[0];

    const data = {
      email: email.value,
      password: password.value,
    };

    try {
      await axios.post('/api/auth/login', data).then(async () => {
        await Router.push('/app');
      });
    } catch (err: any) {
      console.error('Error during login:', err.response.data.error);
      password.value = '';
      toast.error(err.response.data.error);
    }
  };

  return (
    <div className='flex flex-col px-8 py-4 h-screen'>
      <Navbar />
      <ToastContainer
        position='bottom-right'
        autoClose={2500}
      />
      <div className='flex justify-center items-center h-screen w-full'>
        <div className='flex justify-center items bg-primary border border-accent py-8 px-16 rounded-lg w-1/3 h-fit'>
          <div className='w-full space-y-4'>
            <h1 className='text-2xl font-bold leading-tight tracking-tight'>
              Sign in to your account
            </h1>
            <form className='space-y-4' onSubmit={authenticateUser}>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm font-medium'>Email</label>
                <input type='text' name='email' id='email' className='border border-accent rounded-lg block w-full p-2.5 focus:outline-accent placeholder:text-text-secondary bg-primary' placeholder='john.doe@gmail.com' />
              </div>
              <div>
                <label htmlFor='password' className='block mb-2 text-sm font-medium'>Password</label>
                <input type='password' name='password' id='password' placeholder='••••••••' className='border border-accent rounded-lg block w-full p-2.5 focus:outline-accent placeholder:text-text-secondary bg-primary' />
              </div>
              <button className='w-full border border-accent hover:bg-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Sign in</button>
              <p className='text-sm font-light text-text-secondary'>
                Don&apos;t have an account yet? <Link href='/register' className='font-medium text-text hover:underline'>Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

export const getServerSideProps = withIronSessionSsr(
  async ({ req, res }) => {
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
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