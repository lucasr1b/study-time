import axios from 'axios';
import { formatAssessmentDate } from '../../utils/helpers';
import { axiosConfig } from '../../utils/constants';

type AssessmentItemProps = {
  assessment_id: string;
  assessments: string[];
  setAssessments: any;
  subject_icon: string;
  subject_name: string;
  date: Date;
  description: string;
};

const AssessmentItem = (props: AssessmentItemProps) => {

  const deleteAssessment = async () => {
    await axios.post('/api/assessments/delete', { id: props.assessment_id }, axiosConfig)
      .then(() => {
        props.setAssessments(props.assessments.filter((assessment: any) => assessment.assessment_id !== props.assessment_id));
      });
  };

  return (
    <div>
      <div className='flex flex-col border border-zinc-200 rounded-lg p-2 h-full'>
        <div className='flex items-center'>
          <p className='font-medium'>{props.subject_icon} {props.subject_name}</p>
          <div className='text-sm w-fit rounded-md ml-auto text-zinc-500'>{formatAssessmentDate(props.date)}</div>
        </div>
        <p className='font-normal text-sm py-1'>{props.description}</p>
        <div className='flex gap-4 py-1 mt-auto'>
          <button
            className='bg-white border border-zinc-200 rounded-md h-8 px-3 hover:bg-zinc-200 text-sm'>Edit</button>
          <button
            className='bg-white border border-zinc-200 rounded-md h-8 px-3 hover:bg-zinc-200 text-sm'
            onClick={deleteAssessment}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentItem;