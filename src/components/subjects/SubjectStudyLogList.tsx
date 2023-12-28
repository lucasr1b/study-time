import { useEffect, useState } from 'react';
import SubjectStudyLogListItem from './SubjectStudyLogListItem';
import axios from 'axios';

const SubjectStudyLogList = () => {

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchSessionsLogged = async () => {
      const fetchedLogs = await axios.get('/api/study/sessions');
      setLogs(fetchedLogs.data);
    };
    fetchSessionsLogged();
  }, []);

  return (
    <aside className='w-2/5 z-40 min-h-full p-4 border rounded-lg border-zinc-200 bg-white'>
      <h1 className='font-semibold'>Study log</h1>
      <div className='flex flex-col gap-4 mt-4'>
        {logs.slice(0, 9).map((log: any, index: number) => (
          <SubjectStudyLogListItem log={log} key={index} />
        ))}
        <span className='text-blue-600 hover:underline hover:cursor-pointer'>View all logs</span>
      </div>
    </aside>
  );
};

export default SubjectStudyLogList;