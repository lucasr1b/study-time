const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className='flex justify-center items bg-white border border-zinc-200 py-12 px-16 rounded-lg w-1/3 h-3/5'>
        <div className='w-full space-y-4'>
          <h1 className='text-2xl font-bold leading-tight tracking-tight text-zinc-900'>
            Sign in to your account
          </h1>
          <form className='space-y-4' action='#'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-zinc-900'>Your email</label>
              <input type='email' name='email' id='email' className='bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-lg block w-full p-2.5' placeholder='john.doe@gmail.com' />
            </div>
            <div>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-zinc-900'>Password</label>
              <input type='password' name='password' id='password' placeholder='••••••••' className='bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-lg block w-full p-2.5' />
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input id='remember' aria-describedby='remember' type='checkbox' className='w-4 h-4 border border-zinc-300 rounded bg-zinc-50 hover:cursor-pointer' />
                </div>
                <div className='ml-3 text-sm'>
                  <label htmlFor='remember' className='text-zinc-500'>Remember me</label>
                </div>
              </div>
              <a href='#' className='text-sm font-medium text-black hover:underline'>Forgot password?</a>
            </div>
            <button type='submit' className='w-full text-black bg-zinc-200 border border-zinc-300 hover:bg-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Sign in</button>
            <p className='text-sm font-light text-zinc-500'>
              Don't have an account yet? <a href='#' className='font-medium text-black hover:underline'>Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;