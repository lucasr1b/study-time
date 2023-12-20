import { useEffect, useState } from 'react';
import AssessmentOverview from './AssessmentOverview';
import { axiosConfig } from '../../utils/constants';
import axios from 'axios';

const Assessments = () => {

  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    const fetchAssessments = async () => {
      await axios.get('/api/assessments', axiosConfig)
        .then((res) => {
          setAssessments(res.data);
        });
    };
    fetchAssessments();
  }, []);

  return (
    <aside className='w-full h-1/2 p-4 border rounded-lg border-zinc-200 bg-white'>
      <h1 className='font-semibold pb-2'>Upcoming assessments</h1>
      <div className='overflow-y-auto flex flex-col gap-2 h-80 w-full rounded pr-4'>
        {assessments.map((assessment: any) => (
          <AssessmentOverview key={assessment.assessment_id} subject_icon={assessment.subject_icon} subject_name={assessment.subject_name} date={assessment.date} description={assessment.description} />
        ))}
      </div>
    </aside>
  );
};

export default Assessments;