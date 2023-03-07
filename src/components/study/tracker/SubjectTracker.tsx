const SubjectTracker = () => {
  return (
    <div className='flex flex-col items-center justify-center h-40 min-w-max p-8 rounded-lg bg-white border border-zinc-200'>
      <p className='text-2xl'>👾</p>
      <p className='text-m text-black font-medium'>Test Subject</p>
      <div className='mb-1 text-sm text-zinc-500'>2 hours allocated</div>
      <div className='flex gap-4 mt-1'>
        <button className='bg-white border border-zinc-200 rounded-md h-8 px-3 hover:bg-zinc-200 text-sm font-medium'>Edit</button>
        <button className='bg-white border border-zinc-200 rounded-md h-8 px-3 hover:bg-zinc-200 text-sm font-medium'>Study</button>
      </div>
    </div>
  )
}

export default SubjectTracker;