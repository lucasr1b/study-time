import { NextPage } from 'next';
import Sidebar from '../../components/sidebar/Sidebar';
import SubjectItem from '../../components/subjects/SubjectItem';
import SubjectAddButton from '../../components/subjects/SubjectAddButton';
import SubjectStudyLogList from '../../components/subjects/logs/SubjectStudyLogList';
import AddSubjectModal from '../../components/subjects/AddSubjectModal';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Subject } from '../../utils/types';
import SubjectItemSkeleton from '../../components/subjects/SubjectItemSkeleton';

const Subjects: NextPage = () => {

  const [modalToggled, setModalToggled] = useState(false);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await axios.get('/api/subjects');
        setSubjects(res.data.subjects);
      } catch (err: any) {
        console.error('Error fetching subjects:', err.response.data.error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  const removeSubject = async (id: string) => {
    try {
      await axios.post('/api/subjects/remove', { id });
      setSubjects(subjects.filter((subject: Subject) => subject.subject_id !== id));
    } catch (err: any) {
      console.error('Error removing subjects:', err.response.data.error);
    }
  };

  return (
    <div className='container h-screen'>
      <Sidebar />
      <div className='ml-72 h-full w-5/6 p-4 mb-2'>
        <p className='text-4xl font-semibold mb-4'>Subjects</p>
        <div className='flex flex-row gap-12 mt-2 w-full min-h-full pb-10'>
          <div className='bg-white border border-zinc-200 rounded-lg p-4 w-3/5'>
            <h1 className='font-semibold mb-4'>Subjects</h1>
            <div className='grid grid-cols-2 grid-flow-row gap-4'>
              {isLoading ? (
                [...Array(6)].map((x, i) => (
                  <SubjectItemSkeleton key={i} />
                ))
              ) : (
                <>
                  {subjects.map((subject, index) => (
                    <SubjectItem key={index} subject={subject} removeSubject={removeSubject} />
                  ))}
                  <SubjectAddButton openModal={() => setModalToggled(true)} />
                </>
              )}
            </div>
          </div>
          <SubjectStudyLogList />
        </div>
        {modalToggled && <AddSubjectModal close={() => setModalToggled(false)} subjects={subjects} setSubjects={setSubjects} />}
      </div>
    </div >
  );
};

export default Subjects;