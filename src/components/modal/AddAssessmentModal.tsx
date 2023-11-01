import { useEffect, useState } from 'react';
import DateSelector from '../date/DateSelector';
import axios from 'axios';
import { axiosConfig } from '../../utils/constants';

type AddAssessmentModalProps = {
  closeModal: () => void;
};

const AddAssessmentModal = (props: AddAssessmentModalProps) => {

  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState([]);
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchSubjects = async () => {
      await axios.get('/api/study/trackers', axiosConfig)
        .then((res) => {

          const subjectsData = res.data.map(({ subject_id, subject_icon, subject_name }: any) => ({
            subject_id,
            subject_icon,
            subject_name,
          }));

          setSubjects(subjectsData);
          setSelectedSubject(subjectsData[0]);
        });
    };
    fetchSubjects();
  }, []);

  const handleSubjectChange = (e: any) => {
    const subject = e.target.value;
    setSelectedSubject(subject);
  };

  const handleDescriptionChange = (e: any) => {
    const descriptionData = e.target.value;
    setDescription(descriptionData);
  };

  const addAssessment = async (e: any) => {
    e.preventDefault();
    const assessmentData = {
      subject: selectedSubject,
      date,
      description,
    };

    await axios.post('/api/assessments/add', assessmentData, axiosConfig);
    props.closeModal();
  };

  return (
    <>
      <div className='fixed z-40 flex items-center justify-center bg-black opacity-20 w-full h-full top-0 left-0' onClick={props.closeModal}></div>
      <div className='fixed z-50 flex flex-col w-1/5 h-auto p-4 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white'>
        <h1 className='font-semibold'>Add new assessment</h1>
        <form className='flex flex-row items-baseline space-y-4 gap-4 h-full' onSubmit={addAssessment}>
          <div className='mt-2 flex flex-col gap-4 w-full'>
            <div className='inline-flex border rounded-md p-2'>
              <select className='outline-none w-full' onChange={handleSubjectChange}>
                {subjects.map((subject: any) => (
                  <option key={subject.subject_id}>{subject.subject_icon} {subject.subject_name}</option>
                ))}
              </select>
            </div>
            <DateSelector setSelectedDate={setDate} />
            <div className='inline-flex border rounded-md p-2' onChange={handleDescriptionChange}>
              <textarea placeholder='Description (optional)' className='w-full resize-none outline-none' />
            </div>
            <div className='flex gap-2 mt-2'>
              <button className='bg-white border border-zinc-200 rounded-md h-8 w-fit px-3 hover:bg-zinc-200 text-sm' onClick={props.closeModal}>Cancel</button>
              <button className='bg-white border border-zinc-200 rounded-md h-8 w-fit px-3 hover:bg-zinc-200 text-sm'>Add</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddAssessmentModal;