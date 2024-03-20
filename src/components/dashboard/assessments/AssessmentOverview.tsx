import { useEffect, useState } from 'react';
import AssessmentOverviewItem from './AssessmentOverviewItem';
import axios from 'axios';
import { Assessment } from '../../../utils/types';
import AssessmentOverviewItemSkeleton from './AssessmentOverviewItemSkeleton';

const AssessmentOverview = () => {
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const res = await axios.get('/api/assessments');
        setAssessments(res.data.assessments);
      } catch (err: any) {
        console.error('Error fetching assessments:', err.response.data.error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAssessments();
  }, []);

  return (
    <aside className='flex flex-col w-full h-1/2 p-4 border rounded-lg border-accent bg-primary'>
      <h1 className='font-semibold'>Upcoming assessments</h1>
      <div className='overflow-y-scroll flex flex-col gap-2 mt-4 w-full rounded pr-4'>
        {isLoading ? (
          [...Array(3)].map((x, i) => (
            <AssessmentOverviewItemSkeleton key={i} />
          ))
        ) : (
          <>
            {assessments.length === 0 && <p className='italic'>No upcoming assessments.</p>}
            {assessments.map((assessment: Assessment) => (
              new Date(assessment.date) > new Date() && (
                <AssessmentOverviewItem key={assessment._id} subject_icon={assessment.subject_icon} subject_name={assessment.subject_name} date={assessment.date} description={assessment.description} />
              )
            ))}
          </>
        )}
      </div>
    </aside>
  );
};

export default AssessmentOverview;