import LoadingSkeleton from '../LoadingSkeleton';

const SubjectItemSkeleton = () => {
  return (
    <div className='flex flex-col h-full w-full p-3 gap-1 rounded-lg bg-primary border border-accent'>
      <div className='flex gap-1 mb-1'>
        <LoadingSkeleton width='5' height='5' />
        <LoadingSkeleton width='32' height='5' rounded='sm' />
      </div>
      <div className='flex flex-col gap-1.5'>
        <LoadingSkeleton width='24' height='5' rounded='sm' />
      </div>
      <div className='flex gap-4 mt-1'>
        <LoadingSkeleton width='20' height='8' rounded='md' />
      </div>
    </div >
  );
};

export default SubjectItemSkeleton;