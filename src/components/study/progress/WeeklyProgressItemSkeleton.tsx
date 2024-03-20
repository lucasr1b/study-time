import LoadingSkeleton from '../../LoadingSkeleton';

const WeeklyStudyProgressItemSkeleton = () => {
  return (
    <div className='flex flex-col items-center justify-center h-32 min-w-max p-8 mt-4 rounded-lg bg-primary border border-accent'>
      <div className='flex flex-col w-full items-center gap-2'>
        <LoadingSkeleton width='8' height='8' rounded='none' />
        <LoadingSkeleton width='24' height='5' />
        <LoadingSkeleton width='32' height='5' />
      </div>
    </div>
  );
};
export default WeeklyStudyProgressItemSkeleton;