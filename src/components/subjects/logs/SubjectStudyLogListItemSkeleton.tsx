const SubjectStudyLogListItemSkeleton = () => {
  return (
    <div className='flex flex-col gap-1 w-full p-2 border rounded-lg border-accent bg-primary'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-1'>
          <div className='w-5 h-5 leading-relaxed animate-pulse bg-darker-accent'></div>
          <div className='w-32 h-5 rounded-sm leading-relaxed animate-pulse bg-darker-accent'></div>
        </div>
        <div className='w-24 h-5 rounded-sm leading-relaxed animate-pulse bg-darker-accent'></div>
      </div>
      <div className='w-48 h-5 rounded-sm leading-relaxed animate-pulse bg-darker-accent'></div>
    </div>
  );
};

export default SubjectStudyLogListItemSkeleton;