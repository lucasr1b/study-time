import SubjectTest from './SubjectTest';

const Tests = () => {
  return (
    <aside className='w-full h-1/2 p-4 border rounded-lg border-zinc-200 bg-white'>
      <h1 className='font-semibold'>Upcoming tests</h1>
      <div className='flex flex-col gap-3 mt-4 overflow-y-auto'>
        <SubjectTest />
        <SubjectTest />
      </div>
    </aside>
  );
};

export default Tests;