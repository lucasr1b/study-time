import { NextPage } from 'next';
import Sidebar from '../../components/sidebar/Sidebar';
import SubjectInfo from '../../components/subjects/SubjectInfo';
import SubjectAdd from '../../components/subjects/SubjectAdd';;
import StudyLog from '../../components/log/StudyLog';
import AddSubjectModal from '../../components/modal/AddSubjectModal';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Subject } from '../../utils/types';

const Subjects: NextPage = () => {

  const [modalToggled, setModalToggled] = useState(false);
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      await axios.get(`/api/subjects`)
        .then((res) => {
          setSubjects(res.data);
        })
    }
    fetchSubjects()
  }, [])

  const removeSubject = async (id: string) => {
    await axios.post(`/api/subjects/remove`, { id })
      .then(() => {
        setSubjects(subjects.filter((subject: Subject) => subject.subject_id !== id))
      })
  }

  return (
    <div className='container h-screen'>
      <Sidebar />
      <div className='ml-72 h-full w-5/6 p-4 mb-2'>
        <p className='text-4xl font-semibold mb-4'>Subjects</p>
        <div className='flex flex-row gap-12 mt-2 w-full min-h-full pb-10'>
          <div className='bg-white border border-zinc-200 rounded-lg p-4 w-3/5'>
            <h1 className='font-semibold mb-4'>Subjects</h1>
            <div className='grid grid-cols-2 grid-flow-row gap-4'>
              {subjects.map((subject, index) => (
                <SubjectInfo key={index} subject={subject} removeSubject={removeSubject} />
              ))}
              <SubjectAdd openModal={() => setModalToggled(true)} />
            </div>
          </div>
          <StudyLog />
        </div>
        {modalToggled && <AddSubjectModal close={() => setModalToggled(false)} subjects={subjects} setSubjects={setSubjects} />}
      </div>
    </div>
  )
}

export default Subjects;