import { useEffect, useState } from 'react';
import { Assessment } from '../../utils/types';
import AddAssessmentButton from './AddAssessmentButton';
import AssessmentItem from './AssessmentItem';
import AssessmentItemSkeleton from './AssessmentItemSkeleton';
import AddAssessmentModal from './modal/AddAssessmentModal';
import DeleteAssessmentModal from './modal/DeleteAssessmentModal';
import EditAssessmentModal from './modal/EditAssessmentModal';
import axios from 'axios';

const AssessmentsList = () => {
  const [isAddAssessmentModalOpen, setIsAddAssessmentModalOpen] = useState(false);
  const [isEditAssessmentModalOpen, setIsEditAssessmentModalOpen] = useState(false);
  const [isDeleteAssessmentModalOpen, setIsDeleteAssessmentModalOpen] = useState(false);
  const [selectedEditingAssessment, setSelectedEditingAssessment] = useState<Assessment>({} as Assessment);
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [pastDueAssessments, setPastDueAssessments] = useState<Assessment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const res = await axios.get('/api/assessments');

        setAssessments([]); // remove possible duplicate assessments
        setPastDueAssessments([]); // reset past duplicate assessments

        res.data.assessments.forEach((assessment: Assessment) => {
          if (new Date(assessment.date) < new Date()) {
            setPastDueAssessments(prevPastDueAssessments => [...prevPastDueAssessments, assessment]);
          } else {
            setAssessments(prevAssessments => [...prevAssessments, assessment]);
          }
        });

      } catch (err: any) {
        console.error('Error fetching assessments:', err.response.data.error);
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    };
    fetchAssessments();
  }, []);

  const openAddAssessmentModal = () => setIsAddAssessmentModalOpen(true);

  const openEditAssessmentModal = (assessment: Assessment) => {
    setSelectedEditingAssessment(assessment);
    setIsEditAssessmentModalOpen(true);
  };

  const openDeleteAssessmentModal = (assessment: Assessment) => {
    setIsDeleteAssessmentModalOpen(true);
    setSelectedEditingAssessment(assessment);
  };

  const closeModal = () => {
    setIsAddAssessmentModalOpen(false);
    setIsEditAssessmentModalOpen(false);
    setIsDeleteAssessmentModalOpen(false);
    setSelectedEditingAssessment({} as Assessment);
  };

  const deleteAssessment = async (assessmentId: string) => {
    try {
      await axios.post('/api/assessments/delete', { assessmentId });
      const updatedAssessments = assessments.filter((assessment: Assessment) => assessment._id !== assessmentId);
      setAssessments(updatedAssessments);
      setPastDueAssessments(pastDueAssessments.filter((assessment: Assessment) => assessment._id !== assessmentId));
      closeModal();
    } catch (err: any) {
      console.error('Error deleting assessment:', err.response.data.error);
    }
  };

  return (
    <>
      <div className='bg-primary border border-accent rounded-lg p-4 w-full'>
        <h1 className='font-semibold mb-4'>Upcoming assessments</h1>
        <div className='grid grid-flow-row grid-cols-3 gap-4 auto-cols-min pb-4'>
          {isLoading ? (
            [...Array(4)].map((x, i) => (
              <AssessmentItemSkeleton key={i} />
            ))
          ) : (
            <>
              {assessments.map((assessment: Assessment) => (
                <AssessmentItem
                  key={assessment._id}
                  assessment={assessment}
                  openDeleteAssessmentModal={openDeleteAssessmentModal}
                  deleteAssessment={deleteAssessment}
                  openEditAssessmentModal={openEditAssessmentModal}
                />
              ))}
              {pastDueAssessments.map((assessment: Assessment) => (
                <AssessmentItem
                  key={assessment._id}
                  assessment={assessment}
                  deleteAssessment={deleteAssessment}
                  openEditAssessmentModal={openEditAssessmentModal}
                  pastDue={true}
                />
              ))}
              <AddAssessmentButton openModal={openAddAssessmentModal} />
            </>
          )}
        </div>
      </div>
      {isAddAssessmentModalOpen && <AddAssessmentModal closeModal={closeModal} assessments={assessments} setAssessments={setAssessments} />}
      {isEditAssessmentModalOpen && <EditAssessmentModal closeModal={closeModal} assessment={selectedEditingAssessment} assessments={assessments} setAssessments={setAssessments} />}
      {isDeleteAssessmentModalOpen && <DeleteAssessmentModal closeModal={closeModal} confirm={deleteAssessment} assessment={selectedEditingAssessment} />}
    </>
  );
};

export default AssessmentsList;