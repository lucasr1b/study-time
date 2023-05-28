import SubjectProgress from './SubjectProgress';

type WeeklyProgressProps = {
  trackers: any;
};

const WeeklyProgress = (props: WeeklyProgressProps) => {

  return (
    <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
      <h1 className='font-semibold mb-4'>Weekly progress</h1>
      <div className='flex gap-4 pb-4 overflow-y-auto'>
        {(props.trackers.filter((tracker: any) => tracker.is_setup !== false)).map((tracker: any) => (
          <SubjectProgress tracker={tracker} key={tracker.tracker_id} />
        ))}
      </div>
    </div>
  );
};

export default WeeklyProgress;