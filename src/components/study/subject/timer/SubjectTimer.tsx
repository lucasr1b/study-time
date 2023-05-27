import { useState, useEffect } from 'react';
import { formatFancyTime } from '../../../../utils/helpers';
import axios from 'axios';
import { axiosConfig } from '../../../../utils/constants';

type TimerProps = {
  tracker: any;
};

const SubjectTimer = (props: TimerProps) => {
  const [time, setTime] = useState(props.tracker.time_allocated - props.tracker.time_studied);
  const [isPaused, setIsPaused] = useState(true);
  const [sessionStarted, setSessionStarted] = useState(false);

  useEffect(() => {
    let timerInterval: any;
    if (!isPaused && time > 0) {
      timerInterval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        if (time % 60 == 0) updateTimer();
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [isPaused, time]);


  const updateTimer = async () => await axios.put(`/api/study/trackers/${props.tracker.tracker_id}/update`, { id: props.tracker.tracker_id, time: props.tracker.time_allocated - time }, axiosConfig);

  const handleStart = () => {
    setIsPaused(false);
    setSessionStarted(true);
  };

  const handleResume = () => setIsPaused(false);

  const handlePause = () => {
    setIsPaused(true);
    updateTimer();
  };

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const timeRemaining = `${hours.toString().padStart(1, '0')}h ${minutes.toString().padStart(1, '0')}m ${seconds.toString().padStart(1, '0')}s`;

  return (

    <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
      <h1 className='font-semibold mb-4'>Timer</h1>
      <div className='flex flex-col items-center justify-center gap-4 pb-4'>
        <div className='flex flex-col items-center gap-1'>
          <h1 className='text-4xl font-semibold'>{timeRemaining}</h1>
          <p>of <span className='text-blue-500 font-medium mt-0'>{formatFancyTime(props.tracker.time_allocated)}</span> remaining</p>
        </div>
        <div className='flex gap-4'>
          {isPaused ?
            <>
              {!sessionStarted
                ? <button className='bg-white border border-zinc-200 rounded-md h-8 w-fit px-3 hover:bg-zinc-200 text-sm' onClick={handleStart}>Start</button>
                : <button className='bg-white border border-zinc-200 rounded-md h-8 w-fit px-3 hover:bg-zinc-200 text-sm' onClick={handleResume}>Resume</button>
              }
              <button className='bg-white border border-zinc-200 rounded-md h-8 w-fit px-3 hover:bg-zinc-200 text-sm'>Log study</button>
            </>
            :
            <button className='bg-white border border-zinc-200 rounded-md h-8 w-fit px-3 hover:bg-zinc-200 text-sm' onClick={handlePause}>Pause</button>
          }
        </div>
      </div>
    </div>
  );
};

export default SubjectTimer;
