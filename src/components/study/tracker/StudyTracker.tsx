import { useEffect, useState } from 'react';
import SubjectTracker from './SubjectTracker';
import axios from 'axios';

const StudyTracker = () => {

  const [trackers, setTrackers] = useState<any[]>([]);

  useEffect(() => {
    const fetchTrackers = async () => {
      await axios.get(`/api/study/trackers`)
        .then((res) => {
          setTrackers(res.data);
        })
    };
    fetchTrackers();
  }, []);

  return (
    <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
      <h1 className='font-semibold mb-4'>Study tracker</h1>
      <div className='grid grid-cols-3 grid-flow-row gap-6'>
        {trackers.map(tracker => (
          <SubjectTracker tracker={tracker} key={tracker.tracker_id} />
        ))}
      </div>
    </div>
  )
}

export default StudyTracker;