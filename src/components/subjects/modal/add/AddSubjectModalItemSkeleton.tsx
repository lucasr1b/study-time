import LoadingSkeleton from '../../../LoadingSkeleton';

const AddSubjectModalItemSkeleton = () => {
  return (
    <div className='flex items-center h-12 w-full p-2'>
      <LoadingSkeleton width='32' height='6' rounded='sm' />
    </div>
  );
};

export default AddSubjectModalItemSkeleton;