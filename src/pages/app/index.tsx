import type { NextPage } from 'next';
import Sidebar from '../../components/sidebar/Sidebar';
import SubjectOverview from '../../components/subjects/SubjectOverview';
import Exams from '../../components/exams/Exams';
import Events from '../../components/events/Events';
import SubjectOverviewPagination from '../../components/pagination/SubjectOverviewPagination';
import Tests from '../../components/tests/Tests';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard: NextPage = () => {

  const [trackers, setTrackers] = useState<any[]>([]);

  useEffect(() => {
    const fetchTrackers = async () => {
      await axios.get('/api/study/trackers/weekly')
        .then((res) => {
          setTrackers(res.data);
        });
    };
    fetchTrackers();
  }, []);

  return (
    <div className='container h-screen'>
      <Sidebar />
      <div className='ml-72 h-full w-5/6 p-4 mb-2'>
        <p className='text-4xl font-semibold mb-4'>Dashboard</p>
        <div className='flex flex-row gap-12 mt-2 w-full min-h-full pb-10'>
          <div className='flex flex-col gap-8 w-full'>
            <div className='bg-white border border-zinc-200 h-4/5 rounded-lg p-4'>
              <h1 className='font-semibold mb-4'>Study overview</h1>
              <SubjectOverviewPagination />
              <div className='grid grid-cols-2 gap-4'>
                {trackers.map(tracker => (
                  <SubjectOverview tracker={tracker} key={tracker.tracker_id} />
                ))}
              </div>
            </div>
            <Exams />
          </div>
          <div className='flex flex-col w-4/5 h-auto gap-8 flex-grow'>
            <Tests />
            <Events />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
