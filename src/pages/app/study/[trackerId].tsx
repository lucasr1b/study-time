import { useEffect, useState } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import { useRouter } from 'next/router';
import axios from 'axios';
import SubjectTimer from '../../../components/study/subject/timer/SubjectTimer';
import SubjectUnits from '../../../components/study/subject/units/SubjectUnits';

const StudySubject = () => {

  const [tracker, setTracker] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const router = useRouter();
  const { trackerId } = router.query;

  useEffect(() => {
    const fetchTracker = async () => {
      setIsLoading(true);
      try {
        if (trackerId !== undefined) {
          const res = await axios.get(`/api/study/trackers/${trackerId}`);
          setTracker(res.data[0]);
        }
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch tracker information');
        setIsLoading(false);
      }
    };
    fetchTracker();
  }, [trackerId]);

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
              <SubjectTimer tracker={tracker} />
              <SubjectUnits />
            </div>
          </>
        ) : (
          <p>Tracker not found</p>
        )}
      </div>
    </div>
  );
};

export default StudySubject;
