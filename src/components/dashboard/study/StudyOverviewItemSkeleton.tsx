import LoadingSkeleton from '../../LoadingSkeleton';

const StudyOverviewItemSkeleton = () => {
  return (
    <div className='flex items-center h-32 w-full p-8 rounded-lg bg-primary border border-accent'>
      <div className='flex flex-col w-full items-center gap-2'>
        <LoadingSkeleton width='8' height='8' rounded='none' />
        <LoadingSkeleton width='32' height='5' />
        <LoadingSkeleton width='full' height='5' />
      </div>
    </div >
  );
};

export default StudyOverviewItemSkeleton;