import { useEffect, useState } from 'react';
import SubjectStudyLogListItem from './SubjectStudyLogListItem';
import axios from 'axios';
import { StudyLog } from '../../../utils/types';

const SubjectStudyLogList = () => {
  const [logs, setLogs] = useState<StudyLog[]>([]);

  useEffect(() => {
    const fetchSessionsLogged = async () => {
      try {
        const fetchedLogs = await axios.get('/api/study/sessions');
        setLogs(fetchedLogs.data.sessions);
      } catch (err: any) {
        console.error('Error fetching sessions:', err.response.data.error);
      }
    };
    fetchSessionsLogged();
  }, []);

  return (
    <aside className='w-2/5 z-40 min-h-full p-4 border rounded-lg border-accent bg-primary'>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold'>Study log</h1>
        {/* <button className='bg-primary border border-accent rounded-md h-8 px-3 hover:bg-accent text-sm'>
          View all logs
        </button> */}
      </div>
      {logs.length === 0 && <p className='italic mt-2'>Log study sessions in the study page.</p>}
      <div className='flex flex-col gap-4 mt-4'>
        {logs.slice(0, 9).map((log: StudyLog, index: number) => (
          <SubjectStudyLogListItem log={log} key={index} />
        ))}
      </div>
    </aside>
  );
};

export default SubjectStudyLogList;