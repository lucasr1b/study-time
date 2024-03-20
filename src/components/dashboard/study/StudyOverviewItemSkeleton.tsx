import LoadingSkeleton from '../../LoadingSkeleton';

const StudyOverviewItemSkeleton = () => {
  return (
    <div className='flex items-center h-32 w-full p-8 rounded-lg bg-primary border border-accent'>
      <div className='flex flex-col w-full items-center gap-2'>
        <LoadingSkeleton width='5' height='5' />
        <LoadingSkeleton width='32' height='5' rounded='sm' />
        <LoadingSkeleton width='full' height='5' rounded='sm' />
      </div>
    </div >
  );
};

export default StudyOverviewItemSkeleton;