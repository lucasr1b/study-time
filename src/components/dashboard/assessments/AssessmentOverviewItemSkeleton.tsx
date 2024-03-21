const AssessmentOverviewItemSkeleton = () => {
  return (
    <div className='flex flex-col border border-accent rounded-lg px-2 py-2 gap-2'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-1'>
          <div className='w-5 h-5 leading-relaxed animate-pulse bg-darker-accent'></div>
          <div className='w-32 h-5 rounded-sm leading-relaxed animate-pulse bg-darker-accent'></div>
        </div>
        <div className='w-32 h-5 rounded-sm leading-relaxed animate-pulse bg-darker-accent'></div>
      </div>
      <div className='w-32 h-5 rounded-sm leading-relaxed animate-pulse bg-darker-accent'></div>
    </div>
  );
};

export default AssessmentOverviewItemSkeleton;