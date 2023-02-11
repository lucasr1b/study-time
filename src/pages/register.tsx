import axios from 'axios';
import { axiosConfig } from '../utils/constants';
import Router from 'next/router';

const Register = () => {

  const registerUser = async (e: any) => {
    e.preventDefault();

    const { uname, email, password, cpassword } = document.forms[0];

    const data = {
      name: uname.value,
      email: email.value,
      password: password.value,
      cpassword: cpassword.value,
    };

    await axios.post(`api/auth/register`, data, axiosConfig)
      .then((res) => {
        console.log(res);
        Router.push('/app');
      })
      .catch((res) => {
        password.value = '';
        cpassword.value = '';
      });
  }


  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className='flex justify-center items bg-white border border-zinc-200 py-8 px-16 rounded-lg w-1/3 h-2/3'>
        <div className='w-full space-y-4'>
          <h1 className='text-2xl font-bold leading-tight tracking-tight'>
            Create an account
          </h1>
          <form className='space-y-4' onSubmit={registerUser}>
            <div>
              <label htmlFor='uname' className='block mb-2 text-sm font-medium'>Name</label>
              <input type='text' name='uname' id='uname' className='bg-zinc-50 border border-zinc-300 rounded-lg block w-full p-2.5 focus:outline-zinc-300 placeholder:text-zinc-500' placeholder='John Doe' />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm font-medium'>Email</label>
              <input type='text' name='email' id='email' className='bg-zinc-50 border border-zinc-300 rounded-lg block w-full p-2.5 focus:outline-zinc-300 placeholder:text-zinc-500' placeholder='john.doe@gmail.com' />
            </div>
            <div>
              <label htmlFor='password' className='block mb-2 text-sm font-medium'>Password</label>
              <input type='password' name='password' id='password' placeholder='••••••••' className='bg-zinc-50 border border-zinc-300 rounded-lg block w-full p-2.5 focus:outline-zinc-300 placeholder:text-zinc-500' />
            </div>
            <div>
              <label htmlFor='cpassword' className='block mb-2 text-sm font-medium'>Confirm password</label>
              <input type='password' name='cpassword' id='cpassword' placeholder='••••••••' className='bg-zinc-50 border border-zinc-300 rounded-lg block w-full p-2.5 focus:outline-zinc-300 placeholder:text-zinc-500' />
            </div>
            <button type='submit' className='w-full bg-zinc-200 border border-zinc-300 hover:bg-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Sign up</button>
            <p className='text-sm font-light text-zinc-500'>
              Already have an account? <a href='/' className='font-medium text-black hover:underline'>Sign in</a>
            </p>
          </form>
        </div>
      </div >
    </div >
  )
}

export default Register;