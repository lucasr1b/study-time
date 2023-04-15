import { formatTime } from '../../../utils/helpers';

const SubjectProgress = (props: { tracker: any }) => {


  return (
    <div className='flex flex-col items-center justify-center h-32 min-w-max p-8 rounded-lg bg-white border border-zinc-200'>
      <p className='text-2xl'>{props.tracker.subject_icon}</p>
      <p className='text-m text-black font-medium'>{props.tracker.subject_name}</p>
      <div className='mb-1 text-sm text-zinc-500'>{formatTime(props.tracker.time_studied)} / {formatTime(props.tracker.time_allocated)} completed</div>
      <div className='w-full bg-zinc-300 rounded-full h-1.5 mb-4'>
        <div className='bg-blue-600 h-1.5 rounded-full' style={{ width: `${(props.tracker.time_studied / props.tracker.time_allocated * 100)}%` }}></div>
      </div>
    </div>
  )
}

export default SubjectProgress;