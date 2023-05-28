import axios from 'axios';
import { useEffect, useState } from 'react';
import { axiosConfig } from '../../utils/constants';
import { Subject } from '../../utils/types';

type AddSubjectModalProps = {
  close: () => void;
  subjects: any;
  setSubjects: any;
};

const AddSubjectModal = (props: AddSubjectModalProps) => {

  const [inputValue, setInputValue] = useState('');
  const [subjectList, setSubjectList] = useState<Subject[]>([]);
  const [filteredSubjects, setFilteredSubjects] = useState<Subject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<Subject>();

  useEffect(() => {
    const fetchSubjects = async () => {
      await axios.get('/api/subjects/list', axiosConfig)
        .then((res) => {
          setSubjectList(res.data);
          setFilteredSubjects(res.data);
        })
        .catch((res) => {
          console.log(res.response.data.error);
        });
    };
    fetchSubjects();
  }, []);

  const handleInputChange = (e: any) => {
    const input = e.target.value;
    setInputValue(input);
    setFilteredSubjects(subjectList.filter((subject) => subject.subject_name.toLowerCase().includes(input.toLowerCase())));

    if (e.target.value != '' && selectedSubject) {
      setSelectedSubject(undefined);
    }
  };

  const selectSubject = (subject: Subject) => {
    setSelectedSubject(subject);
  };

  const addSubject = async (e: any) => {
    e.preventDefault();
    await axios.post('/api/subjects/add', { id: selectedSubject?.subject_id })
      .then((res) => {
        props.setSubjects([...props.subjects, res.data]);
        props.close();
      });
  };

  return (
    <>
      <div className='fixed z-40 flex items-center justify-center bg-black opacity-20 w-full h-full top-0 left-0' onClick={props.close}></div>
      <div className='fixed z-50 flex flex-col w-2/5 h-auto p-4 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white'>
        <h1 className='font-semibold'>Add a new subject</h1>
        <form className='flex flex-row items-baseline space-y-4 gap-4 h-full' onSubmit={addSubject}>
          <div className='w-full'>
            <label htmlFor='subject' className='block mb-2 text-sm font-medium'>Subject</label>
            <input type='text' name='subject' id='subject' className='bg-white border border-zinc-300 rounded-lg block w-full p-2.5 focus:outline-zinc-300 placeholder:text-zinc-500' placeholder='Search subjects...' value={inputValue} onChange={handleInputChange} />
            {!selectedSubject &&
              <ul className='bg-white border border-zinc-200 rounded-lg mt-2 overflow-y-scroll h-64'>
                {filteredSubjects.map((subject, index) => (
                  <li key={index} className='h-14 w-full p-2 hover:bg-zinc-200 hover:cursor-pointer' onClick={() => selectSubject(subject)}>
                    <p className='font-medium'>{subject.subject_name}</p>
                    <p className='text-xs text-zinc-500'>{subject.subject_level}</p>
                  </li>
                ))}
              </ul>}
            {selectedSubject &&
              <div className='flex flex-col gap-2 bg-white border border-zinc-200 h-auto rounded-lg mt-2 p-4'>
                <div className='flex flex-row'>
                  <p className='text-lg font-medium'>{selectedSubject.subject_icon} {selectedSubject.subject_name}</p>
                  <div className='bg-zinc-200 rounded-lg py-1 px-2 ml-auto text-zinc-500 text-sm'>{selectedSubject.subject_level}</div>
                </div>
                <p className='text-zinc-500'>{selectedSubject.subject_description}</p>
                <a className='text-blue-600 mt-2 hover:underline w-fit' href='#'>View course syllabus</a>
              </div>
            }
          </div>
          <div className='h-5/6'>
            <label htmlFor='subject' className='block mb-2 text-sm font-medium'>Emoji</label>
            <div className='flex flex-col gap-4 h-full'>
              <div className='flex items-center justify-center bg-white border border-zinc-200 h-48 w-48 rounded-md'>
                <p className='text-6xl hover:cursor-pointer'>🚀</p>
              </div>
              <button className='bg-white border border-zinc-200 rounded-md h-10 px-4 hover:bg-zinc-200 text-sm font-medium' type='submit'>Add subject</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddSubjectModal;

