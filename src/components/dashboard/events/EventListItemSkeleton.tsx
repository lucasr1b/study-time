const EventListItemSkeleton = () => {
  return (
    <div className='flex gap-2'>
      <div className='w-24 h-5 rounded-sm leading-relaxed animate-pulse bg-darker-accent'></div>
      <div className='w-40 h-5 rounded-sm leading-relaxed animate-pulse bg-darker-accent'></div>
    </div>
  );
};

export default EventListItemSkeleton;