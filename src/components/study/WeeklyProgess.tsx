const WeeklyProgress = () => {
  return (
    <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
      <h1 className='font-semibold mb-4'>Weekly progress</h1>
      <div className='flex gap-4 pb-4 overflow-y-auto'>
        <div className='flex flex-col items-center justify-center h-32 min-w-max p-8 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-200 hover:cursor-pointer'>
          <p className='text-2xl'>👾</p>
          <p className='text-m text-zinc-500'>Test Subject</p>
          <div className='mb-1 font-medium'>1 of 2 hours completed</div>
          <div className='w-full bg-zinc-300 rounded-full h-1.5 mb-4'>
            <div className='bg-blue-600 h-1.5 rounded-full' style={{ width: `${(1 / 2 * 100)}%` }}></div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center h-32 min-w-max p-8 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-200 hover:cursor-pointer'>
          <p className='text-2xl'>👾</p>
          <p className='text-m text-zinc-500'>Test Subject</p>
          <div className='mb-1 font-medium'>1 of 2 hours completed</div>
          <div className='w-full bg-zinc-300 rounded-full h-1.5 mb-4'>
            <div className='bg-blue-600 h-1.5 rounded-full' style={{ width: `${(1 / 2 * 100)}%` }}></div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center h-32 min-w-max p-8 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-200 hover:cursor-pointer'>
          <p className='text-2xl'>👾</p>
          <p className='text-m text-zinc-500'>Test Subject</p>
          <div className='mb-1 font-medium'>1 of 2 hours completed</div>
          <div className='w-full bg-zinc-300 rounded-full h-1.5 mb-4'>
            <div className='bg-blue-600 h-1.5 rounded-full' style={{ width: `${(1 / 2 * 100)}%` }}></div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center h-32 min-w-max p-8 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-200 hover:cursor-pointer'>
          <p className='text-2xl'>👾</p>
          <p className='text-m text-zinc-500'>Test Subject</p>
          <div className='mb-1 font-medium'>1 of 2 hours completed</div>
          <div className='w-full bg-zinc-300 rounded-full h-1.5 mb-4'>
            <div className='bg-blue-600 h-1.5 rounded-full' style={{ width: `${(1 / 2 * 100)}%` }}></div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center h-32 min-w-max p-8 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-200 hover:cursor-pointer'>
          <p className='text-2xl'>👾</p>
          <p className='text-m text-zinc-500'>Test Subject</p>
          <div className='mb-1 font-medium'>1 of 2 hours completed</div>
          <div className='w-full bg-zinc-300 rounded-full h-1.5 mb-4'>
            <div className='bg-blue-600 h-1.5 rounded-full' style={{ width: `${(1 / 2 * 100)}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeeklyProgress;