import { useState } from 'react';
import ManageEventsModal from './ManageEventsModal';

const EventList = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <aside className='w-full h-1/2 p-4 border rounded-lg border-accent bg-primary'>
      <h1 className='font-semibold'>Upcoming events</h1>
      <p className='text-blue-600 cursor-pointer hover:underline' onClick={() => setIsModalOpen(true)}>Manage events</p>
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
      {isModalOpen && <ManageEventsModal closeModal={closeModal} />}
    </aside>
  );
};

export default EventList;