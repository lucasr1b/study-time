const PastPaperOverviewItemSkeleton = () => {
  return (
    <div className='flex gap-1 py-1 px-2 rounded'>
      <div className='w-5 h-5 leading-relaxed animate-pulse bg-darker-accent'></div>
      <div className='w-32 h-5 rounded-sm leading-relaxed animate-pulse bg-darker-accent'></div>
    </div>
  );
};

export default PastPaperOverviewItemSkeleton;