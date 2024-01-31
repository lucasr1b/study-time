import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { SetSubjects, Subject } from '../../../../utils/types';
import axios from 'axios';

type AddSubjectModalSelectSubjectProps = {
  closeModal: () => void;
  subjects: Subject[];
  setSubjects: SetSubjects;
};

const AddSubjectModalSelectSubject = (props: AddSubjectModalSelectSubjectProps) => {
  const [inputValue, setInputValue] = useState('');
  const [subjectList, setSubjectList] = useState<Subject[]>([]);
  const [filteredSubjects, setFilteredSubjects] = useState<Subject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<Subject>();

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await axios.get('/api/subjects/list');
        setSubjectList(res.data.subjects);
        setFilteredSubjects(res.data.subjects);
      } catch (err: any) {
        console.error('Error fetching subjects:', err.response.data.error);
      }
    };

    fetchSubjects();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setInputValue(input);
    setFilteredSubjects(subjectList.filter((subject) => subject.subject_name.toLowerCase().includes(input.toLowerCase())));

    if (input !== '' && selectedSubject) {
      setSelectedSubject(undefined);
    }
  };

  const resetSelectedSubject = () => {
    setSelectedSubject(undefined);
  };

  const selectSubject = (subject: Subject) => {
    setSelectedSubject(subject);
  };

  const addSubject = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/subjects/add', { id: selectedSubject?.subject_id });
      props.setSubjects([...props.subjects, res.data.addedSubject]);
      props.closeModal();
    } catch (err: any) {
      console.error('Error adding subject:', err.response.data.error);
    }
  };

  return (
    <div className='fixed z-50 flex flex-col w-2/5 h-auto p-4 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary'>
      <h1 className='font-semibold'>Add a new subject</h1>
      <form className='flex flex-row items-baseline space-y-4 gap-4 h-full' onSubmit={addSubject}>
        <div className='w-full'>
          <label htmlFor='subject' className='block mb-2 text-sm font-medium'>Subject</label>
          <input type='text' name='subject' id='subject' className='bg-primary border border-darker-accent rounded-lg block w-full p-2.5 focus:outline-darker-accent placeholder:text-text-secondary' placeholder='Search subjects...' autoComplete='off' value={inputValue} onChange={handleInputChange} />
          {!selectedSubject &&
            <ul className='bg-primary border border-accent rounded-lg mt-2 overflow-y-scroll h-64'>
              {filteredSubjects.map((subject, index) => (
                <li key={index} className='h-14 w-full p-2 hover:bg-accent hover:cursor-pointer' onClick={() => selectSubject(subject)}>
                  <p className='font-medium'>{subject.subject_name}</p>
                  <p className='text-xs text-text-secondary'>{subject.subject_level}</p>
                </li>
              ))}
            </ul>}
          {selectedSubject &&
            <div className='flex flex-col gap-2 bg-primary border border-accent h-auto rounded-lg mt-2 p-4'>
              <p className='text-blue-600 hover:cursor-pointer hover:underline w-fit' onClick={resetSelectedSubject}>← Back to list</p>
              <div className='flex flex-row'>
                <p className='text-lg font-medium'>{selectedSubject.subject_icon} {selectedSubject.subject_name}</p>
                <div className='bg-accent rounded-lg py-1 px-2 ml-auto text-text-secondary text-sm'>{selectedSubject.subject_level}</div>
              </div>
              <p className='text-text-secondary'>{selectedSubject.subject_board} {selectedSubject.subject_level}</p>
            </div>
          }
        </div>
        <div className='h-5/6'>
          <label htmlFor='subject' className='block mb-2 text-sm font-medium'>Emoji</label>
          <div className='flex flex-col gap-4 h-full'>
            <div className='flex items-center justify-center bg-primary border border-accent h-40 w-40 rounded-md'>
              <p className='text-6xl hover:cursor-pointer'>🚀</p>
            </div>
            <button className='bg-primary border border-accent rounded-md h-10 px-4 hover:bg-accent text-sm font-medium'>Add subject</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSubjectModalSelectSubject;