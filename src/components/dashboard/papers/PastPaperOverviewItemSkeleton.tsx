import LoadingSkeleton from '../../LoadingSkeleton';

const PastPaperOverviewItemSkeleton = () => {
  return (
    <div className='flex gap-1 py-1 px-2 rounded'>
      <LoadingSkeleton width='5' height='5' rounded='none' />
      <LoadingSkeleton width='32' height='5' />
    </div>
  );
};

export default PastPaperOverviewItemSkeleton;