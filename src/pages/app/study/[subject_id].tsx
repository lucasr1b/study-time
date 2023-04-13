import { useEffect, useState } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Subject } from '../../../utils/types';
import SubjectStopwatch from '../../../components/study/subject/stopwatch/SubjectStopwatch';
import SubjectUnits from '../../../components/study/subject/units/SubjectUnits';

const StudySubject = () => {

  const [subject, setSubject] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const router = useRouter();
  const { subject_id } = router.query

  useEffect(() => {
    const fetchSubject = async () => {
      setIsLoading(true);
      try {
        if (subject_id !== undefined) {
          const res = await axios.get(`/api/subjects/list/${subject_id}`);
          setSubject(res.data[0]);
        }
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch subject information');
        setIsLoading(false);
      }
    };
    fetchSubject();
  }, [subject_id]);

  return (
    <div className='container h-screen'>
      <Sidebar />
      <div className='ml-72 h-full w-5/6 p-4 mb-2'>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : subject ? (
          <>
            <p className='text-4xl font-semibold mb-2'><a className='text-blue-500 hover:text-blue-600' href='/app/study'>Study</a> / {subject.subject_name}</p>
            <div className='flex flex-col gap-12 mt-2 w-full pb-10'>
              <SubjectStopwatch />
              <SubjectUnits />
            </div>
          </>
        ) : (
          <p>Subject not found</p>
        )}
      </div>
    </div>
  )
}

export default StudySubject;
