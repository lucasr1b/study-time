import LoadingSkeleton from '../LoadingSkeleton';

const AssessmentItemSkeleton = () => {
  return (
    <div className='flex flex-col border border-accent rounded-lg p-2 h-28'>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between'>
          <div className='flex gap-1'>
            <LoadingSkeleton width='5' height='5' />
            <LoadingSkeleton width='32' height='5' rounded='sm' />
          </div>
          <div className='ml-auto'>
            <LoadingSkeleton width='20' height='5' rounded='sm' />
          </div>
        </div>
        <LoadingSkeleton width='20' height='5' rounded='sm' />
        <div className='flex gap-2'>
          <LoadingSkeleton width='12' height='8' rounded='md' />
          <LoadingSkeleton width='16' height='8' rounded='md' />
        </div>
      </div>
    </div>
  );
};

export default AssessmentItemSkeleton;