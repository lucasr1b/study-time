import type { NextPage } from 'next';
import Sidebar from '../../components/sidebar/Sidebar';
import PastPaper from '../../components/assessments/PastPaper';
import AssessmentItem from '../../components/assessments/AssessmentItem';
import AddAssessment from '../../components/assessments/AddAssessment';
import { useEffect, useState } from 'react';
import AddAssessmentModal from '../../components/modal/AddAssessmentModal';
import { axiosConfig } from '../../utils/constants';
import axios from 'axios';

const Assessments: NextPage = () => {

  const [isAddAssessmentModalOpen, setIsAddAssessmentModalOpen] = useState(false);
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

  const openAddAssessmentModal = () => {
    setIsAddAssessmentModalOpen(true);
  };

  const closeAddAssessmentModal = () => {
    setIsAddAssessmentModalOpen(false);
  };

  return (
    <div className='container h-screen'>
      <Sidebar />
      <div className='ml-72 h-full w-5/6 p-4 mb-2'>
        <p className='text-4xl font-semibold mb-4'>Assessments</p>
        <div className='flex flex-col gap-12 mt-2 w-full pb-10'>
          <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
            <h1 className='font-semibold mb-4'>Past papers</h1>
            <div className='grid grid-flow-row grid-cols-3 gap-4 pb-4'>
              <PastPaper />
              <PastPaper />
              <PastPaper />
              <PastPaper />
            </div>
          </div>
          <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
            <h1 className='font-semibold mb-4'>Upcoming assessments</h1>
            <div className='grid grid-flow-row grid-cols-3 gap-4 auto-cols-min pb-4'>
              {assessments.map((assessment: any) => (
                <AssessmentItem
                  key={assessment.assessment_id}
                  assessment_id={assessment.assessment_id}
                  assessments={assessments}
                  setAssessments={setAssessments}
                  subject_icon={assessment.subject_icon}
                  subject_name={assessment.subject_name}
                  date={assessment.date}
                  description={assessment.description}
                />
              ))}
              <AddAssessment openModal={openAddAssessmentModal} />
            </div>
          </div>
        </div>
      </div>
      {isAddAssessmentModalOpen && <AddAssessmentModal closeModal={closeAddAssessmentModal} assessments={assessments} setAssessments={setAssessments} />}
    </div>
  );
};

export default Assessments;
