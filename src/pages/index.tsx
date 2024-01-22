import axios from 'axios';
import Router from 'next/router';
import { SyntheticEvent } from 'react';

const LoginPage = () => {

  const authenticateUser = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = document.forms[0];

    const data = {
      email: email.value,
      password: password.value,
    };

    try {
      await axios.post('/api/auth/login', data);
      Router.push('/app');
    } catch (err: any) {
      console.error('Error during login:', err.response.data.error);
      password.value = '';
    }
  };

  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className='flex justify-center items bg-white border border-zinc-200 py-8 px-16 rounded-lg w-1/3 h-fit'>
        <div className='w-full space-y-4'>
          <h1 className='text-2xl font-bold leading-tight tracking-tight'>
            Sign in to your account
          </h1>
          <form className='space-y-4' onSubmit={authenticateUser}>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm font-medium'>Email</label>
              <input type='text' name='email' id='email' className='bg-zinc-50 border border-zinc-300 rounded-lg block w-full p-2.5 focus:outline-zinc-300 placeholder:text-zinc-500' placeholder='john.doe@gmail.com' />
            </div>
            <div>
              <label htmlFor='password' className='block mb-2 text-sm font-medium'>Password</label>
              <input type='password' name='password' id='password' placeholder='••••••••' className='bg-zinc-50 border border-zinc-300 rounded-lg block w-full p-2.5 focus:outline-zinc-300 placeholder:text-zinc-500' />
            </div>
            <button type='submit' className='w-full bg-zinc-200 border border-zinc-300 hover:bg-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Sign in</button>
            <p className='text-sm font-light text-zinc-500'>
              Don&apos;t have an account yet? <a href='register' className='font-medium text-black hover:underline'>Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;