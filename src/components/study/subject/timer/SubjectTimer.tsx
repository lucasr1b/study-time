const SubjectTimer = (props: { time_allocated: number }) => {
  return (
    <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
      <h1 className='font-semibold mb-4'>Timer</h1>
      <div className='flex flex-col items-center justify-center gap-4 pb-4'>
        <div className='flex flex-col items-center gap-1'>
          <h1 className='text-4xl font-semibold'>1h 34m 25s</h1>
          <p>of <span className='text-blue-500 font-medium mt-0'>{props.time_allocated} hours</span> remaining</p>
        </div>
        <div className='flex gap-4'>
          <button className='bg-white border border-zinc-200 rounded-md h-8 w-fit px-3 hover:bg-zinc-200 text-sm'>Resume</button>
          <button className='bg-white border border-zinc-200 rounded-md h-8 w-fit px-3 hover:bg-zinc-200 text-sm'>Log study</button>
        </div>
      </div>
    </div>
  )
}

export default SubjectTimer;