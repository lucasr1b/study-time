import { useEffect, useState } from 'react';
import { Subject } from '../../../utils/types';
import AssessmentPastPaperItem from './AssessmentPastPaperItem';
import axios from 'axios';
import AssessmentPastPaperItemSkeleton from './AssessmentPastPaperItemSkeleton';

const AssessmentPastPapers = () => {
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
        setTimeout(() => setIsLoading(false), 1000);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <div className='bg-primary border border-accent rounded-lg p-4 w-full min-h-60'>
      <h1 className='font-semibold'>Past papers</h1>
      <p className='font-medium italic my-4'>✨ COMING SOON ✨</p>
      <div className='grid grid-flow-row grid-cols-3 gap-4 pb-4'>
        {isLoading ? (
          [...Array(4)].map((x, i) => (
            <AssessmentPastPaperItemSkeleton key={i} />
          ))
        ) : (
          subjects.map((subject: Subject, index) => (
            <AssessmentPastPaperItem key={index} icon={subject.subject_icon} name={subject.subject_name} progress={0} />
          ))
        )}
      </div>
    </div>
  );
};

export default AssessmentPastPapers;