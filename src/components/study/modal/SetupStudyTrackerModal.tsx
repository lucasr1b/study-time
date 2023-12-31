import axios from 'axios';
import { useState } from 'react';

type SetupStudyTrackerModalProps = {
  tracker: any;
  closeModal: () => void;
  updateTrackers: (tracker: any) => void;
};

const SetupStudyTrackerModal = (props: SetupStudyTrackerModalProps) => {
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(0);

  const handleHoursChange = (e: any) => {
    const value = e.target.value;
    setHours(value === '' ? 0 : parseInt(value));
  };

  const handleMinutesChange = (e: any) => {
    const value = e.target.value;
    setMinutes(value === '' ? 0 : parseInt(value));
  };

  const setupTracker = async (e: any) => {
    e.preventDefault();
    await axios.post('/api/study/trackers/setup', { id: props.tracker.tracker_id, hours, minutes })
      .then((res) => {
        props.updateTrackers(res.data.tracker);
        props.closeModal();
      });
  };

  return (
    <>
      <div className='fixed z-40 flex items-center justify-center bg-black opacity-20 w-full h-full top-0 left-0' onClick={props.closeModal}></div>
      <div className='fixed z-50 flex flex-col w-fit h-auto p-4 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white'>
        <h1 className='font-semibold'>Setup study tracker</h1>
        <form className='flex flex-row items-baseline space-y-4 gap-4 h-full' onSubmit={setupTracker}>
          <div className='mt-2 flex flex-col'>
            <div className="inline-flex border rounded-md p-2">
              <div className='flex gap-2 items-center'>
                <h3>{props.tracker.subject_icon} {props.tracker.subject_name}:</h3>
                <div className='flex'>
                  <div className='flex items-center relative w-fit'>
                    <input type='text' className='block px-2 outline-none appearance-none bg-transparent border rounded w-20' onChange={handleHoursChange} value={hours} />
                    <span className='flex items-center justify-center absolute right-0 bg-zinc-100 border border-zinc-200 rounded p-2 h-full z-10'>hrs</span>
                  </div>
                  <span className="px-1">:</span>
                  <div className='flex items-center relative w-fit'>
                    <input type='text' className='block px-2 outline-none appearance-none bg-transparent border rounded w-24' onChange={handleMinutesChange} value={minutes} />
                    <span className='flex items-center justify-center absolute right-0 bg-zinc-100 border border-zinc-200 rounded p-2 h-full z-10'>mins</span>
                  </div>
                  <span className="px-1 ml-1">per week</span>
                </div>
              </div>
            </div>
            <div className='flex gap-2 mt-2'>
              <button className='bg-white border border-zinc-200 rounded-md h-8 w-fit px-3 hover:bg-zinc-200 text-sm' onClick={props.closeModal}>Cancel</button>
              <button className='bg-white border border-zinc-200 rounded-md h-8 w-fit px-3 hover:bg-zinc-200 text-sm'>Save</button>
            </div>
          </div>
        </form>
      </div >
    </>
  );
};

export default SetupStudyTrackerModal;