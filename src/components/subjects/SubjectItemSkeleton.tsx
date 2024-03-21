const SubjectItemSkeleton = () => {
  return (
    <div className='flex flex-col h-full w-full p-3 gap-1 rounded-lg bg-primary border border-accent'>
      <div className='flex gap-1 mb-1'>
        <div className='w-5 h-5 leading-relaxed animate-pulse bg-darker-accent'></div>
        <div className='w-32 h-5 rounded-sm leading-relaxed animate-pulse bg-darker-accent'></div>
      </div>
      <div className='w-32 h-5 rounded-sm leading-relaxed animate-pulse bg-darker-accent'></div>
      <div className='mt-1'>
        <div className='w-20 h-8 rounded-sm leading-relaxed animate-pulse bg-darker-accent'></div>
      </div>
    </div >
  );
};

export default SubjectItemSkeleton;