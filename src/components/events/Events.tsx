const Events = () => {
  return (
    <aside className='w-4/6 z-40 min-h-full p-4 border-2 rounded-lg border-zinc-200 bg-white'>
      <h1 className='font-semibold'>Upcoming events</h1>
      <ul className='flex flex-col gap-2 mt-4'>
        <li className='flex gap-2'>
          <span className='font-medium'>Wed 25 Jan</span>
          <p>Tutor day</p>
        </li>
        <li className='flex gap-2'>
          <span className='font-medium'>Thu 26 Jan</span>
          <p>Tutor day</p>
        </li>
        <li className='flex gap-2'>
          <span className='font-medium'>Mon 30 Jan</span>
          <p>Auckland anniversary</p>
        </li>
        <li className='flex gap-2'>
          <span className='font-medium'>Thu 2 Feb</span>
          <p>Photolife</p>
        </li>
      </ul>
    </aside>
  )
}

export default Events;