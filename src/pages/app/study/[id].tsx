import { useEffect, useState } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Subject } from '../../../utils/types';

const StudySubject = () => {

  const [subject, setSubject] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const router = useRouter();
  const { id } = router.query

  useEffect(() => {
    const fetchSubject = async () => {
      setIsLoading(true);
      try {
        if (id !== undefined) {
          const res = await axios.get(`/api/subjects/list/${id}`);
          setSubject(res.data[0]);
        }
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch subject information');
        setIsLoading(false);
      }
    };
    fetchSubject();
  }, [id]);

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
            <p className='text-4xl font-semibold mb-4'>{subject.subject_name}</p>
            <div className='flex flex-col gap-12 mt-2 w-full pb-10'>
              <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
                <h1 className='font-semibold mb-4'>Stopwatch</h1>
                <div className='flex gap-4 pb-4'>
                </div>
              </div>
              <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
                <h1 className='font-semibold mb-4'>Units</h1>
                <div className='grid grid-cols-3 grid-flow-row gap-6'>
                </div>
              </div>
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
