import { ChangeEvent, useState } from 'react';
import DateSelector from '../../DateSelector';

type AddEventModalProps = {
  closeModal: () => void;
  back: () => void;
  addEvent: (title: string, data: Date) => void;
};

const AddEventModal = (props: AddEventModalProps) => {

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [title, setTitle] = useState('');

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className='fixed z-50 flex flex-col w-1/5 h-auto p-4 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary'>
      <h1 className='font-semibold'>Add a new event</h1>
      <div className='flex flex-col gap-2'>
        <div className='inline-flex border border-accent rounded-md p-2 mt-2'>
          <input placeholder='Event title' className='w-full resize-none outline-none bg-primary' onChange={handleTitleChange} />
        </div>
        <DateSelector date={selectedDate} setSelectedDate={setSelectedDate} isStrict={false} />
        <div className='flex gap-2 mt-2'>
          <button type='button' className='bg-primary border border-accent rounded-md h-8 w-fit px-3 hover:bg-accent text-sm' onClick={props.back}>←</button>
          <div className='flex gap-2 ml-auto'>
            <button className='bg-primary border border-accent rounded-md h-8 w-fit px-3 hover:bg-accent text-sm' onClick={props.closeModal}>Cancel</button>
            <button type='button' className='bg-primary border border-accent rounded-md h-8 w-fit px-3 hover:bg-accent text-sm' onClick={() => props.addEvent(title, selectedDate)}>Add</button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default AddEventModal;