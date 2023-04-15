import { useState, useEffect } from 'react';

type TimerProps = {
  time_allocated: number;
}

const SubjectTimer = (props: TimerProps) => {
  const [time, setTime] = useState(props.time_allocated);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let timerInterval: any;
    if (!isPaused && time > 0) {
      timerInterval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [isPaused, time]);

  const handleStartResume = () => setIsPaused(false);
  const handlePause = () => setIsPaused(true);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const timeRemaining = `${hours.toString().padStart(1, '0')}h ${minutes.toString().padStart(1, '0')}m ${seconds.toString().padStart(1, '0')}s`

  return (

    <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
      <h1 className='font-semibold mb-4'>Timer</h1>
      <div className='flex flex-col items-center justify-center gap-4 pb-4'>
        <div className='flex flex-col items-center gap-1'>
          <h1 className='text-4xl font-semibold'>{timeRemaining}</h1>
          <p>of <span className='text-blue-500 font-medium mt-0'>1 hour</span> remaining</p>
        </div>
        <div className='flex gap-4'>
          {isPaused ?
            <>
              <button className='bg-white border border-zinc-200 rounded-md h-8 w-fit px-3 hover:bg-zinc-200 text-sm' onClick={handleStartResume}>Start</button>
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
