import LoadingSkeleton from '../../LoadingSkeleton';

const EventListItemSkeleton = () => {
  return (
    <div className='flex gap-2'>
      <LoadingSkeleton width='24' height='5' />
      <LoadingSkeleton width='40' height='5' />
    </div>
  );
};

export default EventListItemSkeleton;