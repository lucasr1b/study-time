import { useState } from 'react';
import { Event, SetEvent } from '../../../utils/types';
import DateSelector from '../DateSelector';

type ManageEventsModalProps = {
  closeModal: () => void;
  setSelectedEvent: SetEvent;
  selectedEvent: Event;
};

const UpdateEventModal = (props: ManageEventsModalProps) => {

  const [selectedDate, setSelectedDate] = useState<Date>(new Date(props.selectedEvent.date));

  return (
    <>
      <div className='fixed z-40 flex items-center justify-center bg-modal-backdrop w-full h-full top-0 left-0' onClick={props.closeModal}></div>
      <div className='fixed z-50 flex flex-col w-1/5 h-auto p-4 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary'>
        <h1 className='font-semibold'>Editing event</h1>
        <div className='flex flex-col gap-2'>
          <div className='inline-flex border border-accent rounded-md p-2 mt-2'>
            <input defaultValue={props.selectedEvent.title} placeholder='Event title' className='w-full resize-none outline-none bg-primary' />
          </div>
          <DateSelector date={selectedDate} setSelectedDate={setSelectedDate} isStrict={false} />

          <div className='flex gap-2 mt-2'>
            <button type='button' className='bg-primary border border-accent rounded-md h-8 w-fit px-3 hover:bg-accent text-sm' onClick={() => props.setSelectedEvent(undefined)}>←</button>
            <div className='flex gap-2 ml-auto'>
              <button className='bg-primary border border-accent rounded-md h-8 w-fit px-3 hover:bg-accent text-sm text-red-500'>Delete</button>
              <button type='button' className='bg-primary border border-accent rounded-md h-8 w-fit px-3 hover:bg-accent text-sm' onClick={props.closeModal}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateEventModal;