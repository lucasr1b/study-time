import LoadingSkeleton from '../../LoadingSkeleton';

const SubjectStudyLogListItemSkeleton = () => {
  return (
    <div className='flex flex-col gap-1 w-full p-2 border rounded-lg border-accent bg-primary'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-1'>
          <LoadingSkeleton width='5' height='5' rounded='none' />
          <LoadingSkeleton width='32' height='5' />
        </div>
        <LoadingSkeleton width='24' height='5' />
      </div>
      <LoadingSkeleton width='48' height='5' />
    </div>
  );
};

export default SubjectStudyLogListItemSkeleton;