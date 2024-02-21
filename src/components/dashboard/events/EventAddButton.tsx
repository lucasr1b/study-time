import { PlusIcon } from '@heroicons/react/24/outline';

const EventAddButton = () => {
  return (
    <div className='flex items-center font-medium h-14 w-full p-2 hover:bg-accent hover:cursor-pointer'><PlusIcon className='w-5 h-5 mr-2' /> Add a new event</div>
  );
};

export default EventAddButton;