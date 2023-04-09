const SubjectTracker = (props: { tracker: any }) => {
  return (
    <div className='flex flex-col items-center justify-center h-40 min-w-max p-8 rounded-lg bg-white border border-zinc-200'>
      <p className='text-2xl'>{props.tracker.subject_icon}</p>
      <p className='text-m text-black font-medium'>{props.tracker.subject_name}</p>
      <div className='mb-1 text-sm text-zinc-500'>{props.tracker.hours_allocated} hours allocated</div>
      <div className='flex gap-4 mt-1'>
        {props.tracker.is_setup ?
          <>
            <button className='bg-white border border-zinc-200 rounded-md h-8 px-3 hover:bg-zinc-200 text-sm'>Edit</button>
            <button className='bg-white border border-zinc-200 rounded-md h-8 px-3 hover:bg-zinc-200 text-sm'>Study</button>
          </>
          :
          <button className='bg-white border border-zinc-200 rounded-md h-8 px-3 hover:bg-zinc-200 text-sm'>Setup study tracker</button>
        }
      </div>

    </div>
  )
}

export default SubjectTracker;