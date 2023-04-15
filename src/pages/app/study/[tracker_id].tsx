import { useEffect, useState } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Subject } from '../../../utils/types';
import SubjectTimer from '../../../components/study/subject/timer/SubjectTimer';
import SubjectUnits from '../../../components/study/subject/units/SubjectUnits';

const StudySubject = () => {

  const [tracker, setTracker] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const router = useRouter();
  const { tracker_id } = router.query

  useEffect(() => {
    const fetchTracker = async () => {
      setIsLoading(true);
      try {
        if (tracker_id !== undefined) {
          const res = await axios.get(`/api/study/trackers/${tracker_id}`);
          setTracker(res.data[0]);
        }
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch tracker information');
        setIsLoading(false);
      }
    };
    fetchTracker();
  }, [tracker_id]);

  return (
    <div className='container h-screen'>
      <Sidebar />
      <div className='ml-72 h-full w-5/6 p-4 mb-2'>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : tracker ? (
          <>
            <p className='text-4xl font-semibold mb-2'><a className='text-blue-500 hover:text-blue-600' href='/app/study'>Study</a> / {tracker.subject_name}</p>
            <div className='flex flex-col gap-12 mt-2 w-full pb-10'>
              <SubjectTimer time_allocated={tracker.hours_allocated * 60 * 60} />
              <SubjectUnits />
            </div>
          </>
        ) : (
          <p>Tracker not found</p>
        )}
      </div>
    </div>
  )
}

export default StudySubject;
