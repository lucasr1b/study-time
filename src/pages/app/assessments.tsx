import type { NextPage } from 'next';
import Sidebar from '../../components/sidebar/Sidebar';
import AssessmentPastPaper from '../../components/assessments/AssessmentPastPaper';
import AssessmentItem from '../../components/assessments/AssessmentItem';
import AddAssessmentButton from '../../components/assessments/AddAssessmentButton';
import { useEffect, useState } from 'react';
import AddAssessmentModal from '../../components/modal/AddAssessmentModal';
import axios from 'axios';
import EditAssessmentModal from '../../components/modal/EditAssessmentModal';

const Assessments: NextPage = () => {

  const [isAddAssessmentModalOpen, setIsAddAssessmentModalOpen] = useState(false);
  const [isEditAssessmentModalOpen, setIsEditAssessmentModalOpen] = useState(false);
  const [selectedEditingAssessment, setSelectedEditingAssessment] = useState({});
  const [assessments, setAssessments] = useState<any>([]);

  useEffect(() => {
    const fetchAssessments = async () => {
      await axios.get('/api/assessments')
        .then((res) => {
          setAssessments(res.data);
        });
    };
    fetchAssessments();
  }, []);

  const openAddAssessmentModal = () => setIsAddAssessmentModalOpen(true);

  const openEditAssessmentModal = (assessment: any) => {
    setSelectedEditingAssessment(assessment);
    setIsEditAssessmentModalOpen(true);
  };

  const closeModal = () => {
    setIsAddAssessmentModalOpen(false);
    setIsEditAssessmentModalOpen(false);
    setSelectedEditingAssessment({});
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
              <AssessmentPastPaper />
              <AssessmentPastPaper />
              <AssessmentPastPaper />
              <AssessmentPastPaper />
            </div>
          </div>
          <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
            <h1 className='font-semibold mb-4'>Upcoming assessments</h1>
            <div className='grid grid-flow-row grid-cols-3 gap-4 auto-cols-min pb-4'>
              {assessments.map((assessment: any) => (
                <AssessmentItem
                  key={assessment.assessment_id}
                  assessment={assessment}
                  assessments={assessments}
                  setAssessments={setAssessments}
                  editAssessment={openEditAssessmentModal}
                />
              ))}
              <AddAssessmentButton openModal={openAddAssessmentModal} />
            </div>
          </div>
        </div>
      </div>
      {isAddAssessmentModalOpen && <AddAssessmentModal closeModal={closeModal} assessments={assessments} setAssessments={setAssessments} />}
      {isEditAssessmentModalOpen && <EditAssessmentModal closeModal={closeModal} assessment={selectedEditingAssessment} assessments={assessments} setAssessments={setAssessments} />}
    </div>
  );
};

export default Assessments;
