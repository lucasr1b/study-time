import { useEffect, useState } from 'react';
import PastPaperOverviewItem from './PastPaperOverviewItem';
import axios from 'axios';
import { Subject } from '../../../utils/types';
import PastPaperOverviewItemSkeleton from './PastPaperOverviewItemSkeleton';

const PastPaperOverview = () => {

  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await axios.get('/api/subjects');
        setSubjects(res.data.subjects);
      } catch (err: any) {
        console.error('Error fetching subjects:', err.response.data.error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <div className='container flex flex-col h-2/5 w-full p-4 rounded-lg bg-primary border border-accent'>
      <h1 className='font-semibold mb-4'>Past papers</h1>
      <ul className='grid'>
        <span className='font-medium italic mb-2'>✨ COMING SOON ✨</span>
        {isLoading ? (
          [...Array(4)].map((x, i) => (
            <PastPaperOverviewItemSkeleton key={i} />
          ))
        ) : (
          subjects.map((subject: Subject, index) => (
            <PastPaperOverviewItem key={index} icon={subject.subject_icon} name={subject.subject_name} progress={0} total={0} />
          ))
        )}
      </ul>
    </div>
  );
};

export default PastPaperOverview;