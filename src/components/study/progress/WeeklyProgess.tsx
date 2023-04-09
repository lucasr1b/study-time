import { useEffect, useState } from 'react';
import SubjectProgress from './SubjectProgress';
import axios from 'axios';

const WeeklyProgress = () => {

  const [trackers, setTrackers] = useState<any[]>([]);

  useEffect(() => {
    const fetchTrackers = async () => {
      await axios.get(`/api/study/trackers/weekly`)
        .then((res) => {
          setTrackers(res.data);
        })
    };
    fetchTrackers();
  }, []);

  return (
    <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
      <h1 className='font-semibold mb-4'>Weekly progress</h1>
      <div className='flex gap-4 pb-4 overflow-y-auto'>
        {trackers.map(tracker => (
          <SubjectProgress tracker={tracker} key={tracker.tracker_id} />
        ))}
      </div>
    </div>
  )
}

export default WeeklyProgress;