import { Tracker } from '../../../utils/types';

const SubjectOverviewSetup = (props: { tracker: Tracker }) => {
  return (
    <div className='flex flex-col items-center justify-center h-32 w-full p-8 rounded-lg bg-primary border border-accent'>
      <p className='text-2xl'>{props.tracker.subject_icon}</p>
      <p className='text-m text-text font-medium'>{props.tracker.subject_name}</p>
      <div className='flex gap-4 mt-1'>
        <button className='bg-primary border border-accent rounded-md h-8 px-3 hover:bg-accent text-sm'>Setup study tracker</button>
      </div>
    </div>
  );
};

export default SubjectOverviewSetup;