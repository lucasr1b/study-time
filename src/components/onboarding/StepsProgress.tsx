type StepsProgressProps = {
  progress: string;
};

const StepsProgress = (props: StepsProgressProps) => {
  return (
    <div className='flex flex-col items-center w-full max-w-lg'>
      <div className='w-full h-4 bg-gray-200 rounded-full mb-4'>
        <div className='h-full bg-blue-600 rounded-full transition-all duration-300 ease-in-out' style={{ width: props.progress }}></div>
      </div>
    </div>
  );
};

export default StepsProgress;