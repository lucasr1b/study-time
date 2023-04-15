import { formatTime } from '../../../utils/helpers';

type SubjectTrackerProps = {
  tracker: any;
  openSetupModal: (tracker: any) => void;
  openEditModal: (tracker: any) => void;
}

const SubjectTracker = (props: SubjectTrackerProps) => {
  return (
    <div className='flex flex-col items-center justify-center h-40 min-w-max p-8 rounded-lg bg-white border border-zinc-200'>
      <p className='text-2xl'>{props.tracker.subject_icon}</p>
      <p className='text-m text-black font-medium'>{props.tracker.subject_name}</p>
      {props.tracker.is_setup ?
        <>
          <div className='mb-1 text-sm text-zinc-500'>{formatTime(props.tracker.time_allocated)} allocated</div>
          <div className='flex gap-4 mt-1'>
            <button className='bg-white border border-zinc-200 rounded-md h-8 px-3 hover:bg-zinc-200 text-sm' onClick={() => props.openEditModal(props.tracker)}>Edit</button>
            <a className='flex items-center bg-white border border-zinc-200 rounded-md h-8 px-3 hover:bg-zinc-200 hover:cursor-pointer text-sm' href={`study/${props.tracker.tracker_id}`}>Study</a>
          </div>
        </>
        :
        <>
          <div className='mb-1 text-sm text-zinc-500'>No study time allocated</div>
          <div className='flex gap-4 mt-1'>
            <button className='bg-white border border-zinc-200 rounded-md h-8 px-3 hover:bg-zinc-200 text-sm' onClick={() => props.openSetupModal(props.tracker)}>Setup study tracker</button>
          </div>
        </>
      }

    </div>
  )
}

export default SubjectTracker;