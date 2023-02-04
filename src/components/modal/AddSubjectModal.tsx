import axios from 'axios';
import { useEffect, useState } from 'react';
import { axiosConfig } from '../../utils/constants';
import { Subject } from '../../utils/types';

const AddSubjectModal = (props: { close: () => void }) => {

  useEffect(() => {
    const fetchPasswords = async () => {
      await axios.get(`http://localhost:3000/api/subjects`, axiosConfig)
        .then((res) => {
          setSubjectList(res.data);
          setFilteredSubjects(res.data);
          console.log(res.data);
        })
        .catch((res) => {
          console.log(res.response.data.error);
        })
    }
    fetchPasswords();
  }, [])

  const [inputValue, setInputValue] = useState('');
  const [subjectList, setSubjectList] = useState<Subject[]>([]);
  const [filteredSubjects, setFilteredSubjects] = useState<Subject[]>([]);

  const handleInputChange = (e: any) => {
    const input = e.target.value;
    setInputValue(input);
    setFilteredSubjects(subjectList.filter((subject) => subject.subject_name.toLowerCase().includes(input.toLowerCase())))
  };

  return (
    <>
      <div className='fixed z-40 flex items-center justify-center bg-black opacity-20 w-full h-full top-0 left-0' onClick={props.close}></div>
      <div className='fixed z-50 flex flex-col w-2/5 h-2/4 p-4 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white'>
        <h1 className='font-semibold'>Add a new subject</h1>
        <form className='flex flex-row items-baseline space-y-4 gap-4 h-full'>
          <div className='w-full'>
            <label htmlFor='subject' className='block mb-2 text-sm font-medium'>Subject</label>
            <input type='text' name='subject' id='subject' className='bg-white border border-zinc-300 rounded-lg block w-full p-2.5 focus:outline-zinc-300 placeholder:text-zinc-500' placeholder='Search subjects...' value={inputValue} onChange={handleInputChange} />
            <ul className='bg-white border border-zinc-200 rounded-lg mt-2 overflow-y-scroll h-64'>
              {filteredSubjects.map((subject, index) => (
                <li key={index} className='h-14 w-full p-2 hover:bg-zinc-200 hover:cursor-pointer'>
                  <p className='font-medium'>{subject.subject_name}</p>
                  <p className='text-xs text-zinc-500'>{subject.subject_level}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className='h-5/6'>
            <label htmlFor='subject' className='block mb-2 text-sm font-medium'>Emoji</label>
            <div className='flex flex-col justify-between h-full'>
              <div className='flex items-center justify-center bg-white border border-zinc-200 h-48 w-48 rounded-md'>
                <p className='text-6xl hover:cursor-pointer'>🚀</p>
              </div>
              <button className='bg-white border border-zinc-200 rounded-md h-10 px-4 hover:bg-zinc-200 text-sm font-medium'>Add subject</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddSubjectModal;

