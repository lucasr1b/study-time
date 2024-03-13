import { Tracker } from '../../../utils/types';
import SubjectStudyProgress from './SubjectStudyProgress';

type WeeklyStudyProgressProps = {
  trackers: Tracker[];
};

const WeeklyStudyProgress = (props: WeeklyStudyProgressProps) => {
  return (
    <div className='bg-primary border border-accent rounded-lg p-4 w-full'>
      <h1 className='font-semibold'>Weekly progress</h1>
      {props.trackers.filter((tracker: Tracker) => tracker.is_setup !== false).length == 0 && <p className='italic mt-2'>Setup study trackers to display your weekly progress here.</p>}
      <div className='flex gap-4 pb-4 mt-4 overflow-y-auto min-h-16'>
        {(props.trackers.filter((tracker: Tracker) => tracker.is_setup !== false)).map((tracker: Tracker) => (
          <SubjectStudyProgress tracker={tracker} key={tracker.tracker_id} />
        ))}
      </div>
    </div>
  );
};

export default WeeklyStudyProgress;