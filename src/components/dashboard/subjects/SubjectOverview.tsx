import Link from 'next/link';
import { formatWeeklyProgressTime } from '../../../utils/helpers';
import { Tracker } from '../../../utils/types';

const SubjectOverview = (props: { tracker: Tracker }) => {
  return (
    <Link href={`app/study/${props.tracker.subject_id}`} className='flex flex-col items-center justify-center h-32 w-full p-8 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-200 hover:cursor-pointer'>
      <p className='text-2xl'>{props.tracker.subject_icon}</p>
      <p className='text-m font-medium text-black'>{props.tracker.subject_name}</p>
      <div className='mb-1 text-zinc-500 text-sm'>{formatWeeklyProgressTime(props.tracker.time_studied, props.tracker.time_allocated)}</div>
      <div className='w-full bg-zinc-300 rounded-full h-1.5 mb-4'>
        <div className='bg-blue-600 h-1.5 rounded-full' style={{ width: `${(props.tracker.time_studied / props.tracker.time_allocated * 100)}%` }}></div>
      </div>
    </Link>
  );
};

export default SubjectOverview;