import { useState } from 'react';
import DateSelector from '../dashboard/DateSelector';
import axios from 'axios';
import { axiosConfig } from '../../utils/constants';

type AddAssessmentModalProps = {
  closeModal: () => void;
  assessment: any;
  assessments: string[];
  setAssessments: any;
};

const EditAssessmentModal = (props: AddAssessmentModalProps) => {

  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (e: any) => {
    const descriptionData = e.target.value;
    setDescription(descriptionData);
  };

  const editAssessment = async (e: any) => {
    e.preventDefault();
    const assessmentData = {
      assessmentId: props.assessment.assessment_id,
      date,
      description,
    };

    await axios.post('/api/assessments/edit', assessmentData, axiosConfig)
      .then((response) =>
        props.setAssessments(props.assessments.map((assessment: any) =>
          assessment.assessment_id === response.data.updatedAssessment.assessment_id
            ? { ...assessment, date: response.data.updatedAssessment.date, description: response.data.updatedAssessment.description }
            : assessment,
        )));

    props.closeModal();
  };

  return (
    <>
      <div className='fixed z-40 flex items-center justify-center bg-black opacity-20 w-full h-full top-0 left-0' onClick={props.closeModal}></div>
      <div className='fixed z-50 flex flex-col w-1/5 h-auto p-4 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white'>
        <h1 className='font-semibold'>Editing assessment</h1>
        <form className='flex flex-row items-baseline space-y-4 gap-4 h-full' onSubmit={editAssessment}>
          <div className='mt-2 flex flex-col gap-4 w-full'>
            <div className='inline-flex border bg-zinc-100 rounded-md p-2 cursor-default'>
              <div className='outline-none w-full'>
                {props.assessment.subject_icon} {props.assessment.subject_name}
              </div>
            </div>
            <DateSelector setSelectedDate={setDate} />
            <div className='inline-flex border rounded-md p-2' onChange={handleDescriptionChange}>
              <textarea placeholder='Description (optional)' className='w-full resize-none outline-none' defaultValue={props.assessment.description} />
            </div>
            <div className='flex gap-2 mt-2'>
              <button className='bg-white border border-zinc-200 rounded-md h-8 w-fit px-3 hover:bg-zinc-200 text-sm' onClick={props.closeModal}>Cancel</button>
              <button className='bg-white border border-zinc-200 rounded-md h-8 w-fit px-3 hover:bg-zinc-200 text-sm'>Save</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditAssessmentModal;