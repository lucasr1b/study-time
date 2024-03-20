import LoadingSkeleton from '../../LoadingSkeleton';

const AssessmentOverviewItemSkeleton = () => {
  return (
    <div className='flex flex-col border border-accent rounded-lg px-2 py-2 gap-2'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-1'>
          <LoadingSkeleton width='5' height='5' />
          <LoadingSkeleton width='32' height='5' rounded='sm' />
        </div>
        <LoadingSkeleton width='32' height='5' rounded='sm' />
      </div>
      <LoadingSkeleton width='32' height='5' rounded='sm' />
    </div>
  );
};

export default AssessmentOverviewItemSkeleton;