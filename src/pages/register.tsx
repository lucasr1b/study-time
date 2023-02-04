const Register = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className='flex justify-center items bg-white border border-zinc-200 py-8 px-16 rounded-lg w-1/3 h-2/3'>
        <div className='w-full space-y-4'>
          <h1 className='text-2xl font-bold leading-tight tracking-tight text-zinc-900'>
            Create an account
          </h1>
          <form className='space-y-4' action='#'>
            <div>
              <label htmlFor='name' className='block mb-2 text-sm font-medium text-zinc-900'>Name</label>
              <input type='text' name='name' id='name' className='bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-lg block w-full p-2.5' placeholder='John Doe' />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-zinc-900'>Email</label>
              <input type='email' name='email' id='email' className='bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-lg block w-full p-2.5' placeholder='john.doe@gmail.com' />
            </div>
            <div>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-zinc-900'>Password</label>
              <input type='password' name='password' id='password' placeholder='••••••••' className='bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-lg block w-full p-2.5' />
            </div>
            <div>
              <label htmlFor='cpassword' className='block mb-2 text-sm font-medium text-zinc-900'>Confirm password</label>
              <input type='password' name='cpassword' id='cpassword' placeholder='••••••••' className='bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-lg block w-full p-2.5' />
            </div>
            <button type='submit' className='w-full text-black bg-zinc-200 border border-zinc-300 hover:bg-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Sign up</button>
            <p className='text-sm font-light text-zinc-500'>
              Already have an account? <a href='login' className='font-medium text-black hover:underline'>Sign in</a>
            </p>
          </form>
        </div>
      </div >
    </div >
  )
}

export default Register;