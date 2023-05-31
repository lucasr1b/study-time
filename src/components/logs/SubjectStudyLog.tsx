import { formatSubjectSessionLoggedTime } from '../../utils/helpers';

type SubjectStudyLogProps = {
  log: any;
};

const SubjectStudyLog = (props: SubjectStudyLogProps) => {
  return (
    <div className='flex flex-col gap-1 w-full p-2 border rounded-lg border-zinc-200 bg-white'>
      <div className='flex'>
        <p className='font-medium'>{props.log.subject_icon} {props.log.subject_name}</p>
        <p className='text-zinc-500 text-xs ml-auto'>Logged at 30/05/23 at 6:09</p>
      </div>
      <p className='text-sm'>Studied for <span className='text-blue-600'>{formatSubjectSessionLoggedTime(props.log.time_studied)}</span></p>
    </div>
  );
};

export default SubjectStudyLog;