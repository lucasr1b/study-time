import { formatWeeklyProgressBar, formatWeeklyProgressTime } from '../../../utils/helpers';

const SubjectStudyProgress = (props: { tracker: any }) => {


  return (
    <div className='flex flex-col items-center justify-center h-32 min-w-max p-8 rounded-lg bg-white border border-zinc-200'>
      <p className='text-2xl'>{props.tracker.subject_icon}</p>
      <p className='text-m text-black font-medium'>{props.tracker.subject_name}</p>
      <div className='mb-1 text-sm text-zinc-500'>{formatWeeklyProgressTime(props.tracker.time_studied, props.tracker.time_allocated)}</div>
      <div className='w-full bg-zinc-300 rounded-full h-1.5 mb-4'>
        <div className='bg-blue-600 h-1.5 rounded-full' style={{ width: `${formatWeeklyProgressBar(props.tracker.time_studied, props.tracker.time_allocated)}%` }}></div>
      </div>
    </div>
  );
};

export default SubjectStudyProgress;