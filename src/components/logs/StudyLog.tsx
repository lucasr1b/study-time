import { useEffect, useState } from 'react';
import SubjectStudyLog from './SubjectStudyLog';
import axios from 'axios';

const StudyLog = () => {

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchSessionsLogged = async () => {
      const fetchedLogs = await axios.get('/api/study/sessions');
      setLogs(fetchedLogs.data);
    };
    fetchSessionsLogged();
  }, []);

  return (
    <aside className='w-2/5 z-40 min-h-full max-h-screen overflow-y-auto p-4 border rounded-lg border-zinc-200 bg-white'>
      <h1 className='font-semibold'>Study log</h1>
      <div className='flex flex-col gap-4 mt-4'>
        {logs.slice(0, 10).map((log: any, index: number) => (
          <SubjectStudyLog log={log} key={index} />
        ))}
        {logs.length > 9 && (
          <span className='text-blue-600 hover:underline hover:cursor-pointer'>Load more</span>
        )}
      </div>
    </aside>
  );
};

export default StudyLog;