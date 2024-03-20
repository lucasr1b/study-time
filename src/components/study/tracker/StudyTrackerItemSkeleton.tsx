import LoadingSkeleton from '../../LoadingSkeleton';

const StudyTrackerSkeleton = () => {
  return (
    <div className='flex flex-col items-center justify-center h-40 min-w-max p-8 rounded-lg bg-primary border border-accent'>
      <div className='flex flex-col w-full items-center gap-2'>
        <LoadingSkeleton width='8' height='8' />
        <LoadingSkeleton width='32' height='5' rounded='sm' />
        <LoadingSkeleton width='48' height='5' rounded='sm' />
      </div>
    </div>
  );
};

export default StudyTrackerSkeleton;