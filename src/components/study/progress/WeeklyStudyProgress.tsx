import { Tracker } from '../../../utils/types';
import WeeklyStudyProgressItemSkeleton from './WeeklyProgressItemSkeleton';
import WeeklyStudyProgressItem from './WeeklyStudyProgressItem';

type WeeklyStudyProgressProps = {
  trackers: Tracker[];
  isLoading: boolean;
};

const WeeklyStudyProgress = (props: WeeklyStudyProgressProps) => {
  return (
    <div className='bg-primary border border-accent rounded-lg p-4 w-full'>
      <h1 className='font-semibold'>Weekly progress</h1>
      <div className='flex gap-4 pb-4 overflow-y-auto min-h-16'>
        {props.isLoading ? (
          [...Array(4)].map((x, i) => (
            <WeeklyStudyProgressItemSkeleton key={i} />
          ))
        ) : (
          <>
            {props.trackers.filter((tracker: Tracker) => tracker.is_setup !== false).length === 0 && (
              <p className='italic mt-2'>Setup study trackers to display your weekly progress here.</p>
            )}
            {props.trackers.filter((tracker: Tracker) => tracker.is_setup !== false).map((tracker: Tracker) => (
              <WeeklyStudyProgressItem tracker={tracker} key={tracker._id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default WeeklyStudyProgress;