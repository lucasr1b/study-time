import { useEffect, useState } from 'react';
import { Tracker } from '../../../utils/types';
import axios from 'axios';
import StudyOverviewPagination from './StudyOverviewPagination';
import StudySubjectItem from './StudyOverviewItem';
import StudySubjectSetup from './StudyOverviewItemSetup';
import StudyOverviewItemSkeleton from './StudyOverviewItemSkeleton';

const StudyOverview = () => {
  const [trackers, setTrackers] = useState<Tracker[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTrackers = async () => {
      try {
        const res = await axios.get('/api/study/trackers');
        setTrackers(res.data.trackers);
      } catch (err: any) {
        console.error('Error fetching weekly study trackers:', err.response.data.error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrackers();
  }, []);


  return (
    <div className='bg-primary border border-accent h-4/5 rounded-lg p-4'>
      <h1 className='font-semibold mb-4'>Study overview</h1>
      <StudyOverviewPagination />
      <div className='grid grid-cols-2 gap-4'>
        {isLoading ? (
          [...Array(4)].map((x, i) => (
            <StudyOverviewItemSkeleton key={i} />
          ))
        ) : (
          <>
            {trackers.map(tracker => (
              tracker.is_setup ? (
                <StudySubjectItem key={tracker._id} tracker={tracker} />
              ) : (
                <StudySubjectSetup key={tracker._id} tracker={tracker} setTrackers={setTrackers} />
              )
            ))}
          </>
        )}

      </div>
    </div>
  );
};

export default StudyOverview;