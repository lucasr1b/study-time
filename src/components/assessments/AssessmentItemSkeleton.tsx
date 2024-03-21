const AssessmentItemSkeleton = () => {
  return (
    <div className='flex flex-col border border-accent rounded-lg p-2 h-28'>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between'>
          <div className='flex gap-1'>
            <div className='w-5 h-5 leading-relaxed animate-pulse bg-darker-accent'></div>
            <div className='w-32 h-5 rounded-sm leading-relaxed animate-pulse bg-darker-accent'></div>
          </div>
          <div className='ml-auto'>
            <div className='w-20 h-5 rounded-sm leading-relaxed animate-pulse bg-darker-accent'></div>
          </div>
        </div>
        <div className='w-20 h-5 rounded-sm leading-relaxed animate-pulse bg-darker-accent'></div>
        <div className='flex gap-2'>
          <div className='w-12 h-8 rounded-md leading-relaxed animate-pulse bg-darker-accent'></div>
          <div className='w-16 h-8 rounded-md leading-relaxed animate-pulse bg-darker-accent'></div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentItemSkeleton;