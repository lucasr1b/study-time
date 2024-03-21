const StudyTrackerSkeleton = () => {
  return (
    <div className='flex flex-col items-center justify-center h-40 min-w-max p-8 rounded-lg bg-primary border border-accent'>
      <div className='flex flex-col w-full items-center gap-2'>
        <div className='w-8 h-8 leading-relaxed animate-pulse bg-darker-accent'></div>
        <div className='w-32 h-5 rounded-sm leading-relaxed animate-pulse bg-darker-accent'></div>
        <div className='w-48 h-5 rounded-sm leading-relaxed animate-pulse bg-darker-accent'></div>
      </div>
    </div>
  );
};

export default StudyTrackerSkeleton;