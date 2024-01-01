import Sidebar from '../../../components/sidebar/Sidebar';
import StudyTracker from '../../../components/study/tracker/StudyTracker';
import WeeklyStudyProgress from '../../../components/study/progress/WeeklyStudyProgress';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Study = () => {

  const [trackers, setTrackers] = useState([]);

  useEffect(() => {
    const fetchTrackers = async () => {
      try {
        const res = await axios.get('/api/study/trackers');
        setTrackers(res.data);
      } catch (err: any) {
        console.error('Error fetching trackers:', err.response.data.error);
      }
    };

    fetchTrackers();
  }, []);


  return (
    <div className='container h-screen'>
      <Sidebar />
      <div className='ml-72 h-full w-5/6 p-4 mb-2'>
        <p className='text-4xl font-semibold mb-4'>Study</p>
        <div className='flex flex-col gap-12 mt-2 w-full pb-10'>
          <WeeklyStudyProgress trackers={trackers} />
          <StudyTracker trackers={trackers} setTrackers={setTrackers} />
        </div>
      </div>
    </div>
  );
};

export default Study;