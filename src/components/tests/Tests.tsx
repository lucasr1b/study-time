import SubjectTest from './SubjectTest';

const Tests = () => {
  return (
    <aside className='w-full h-1/2 p-4 border rounded-lg border-zinc-200 bg-white flex flex-col gap-2 overflow-y-auto'>
      <h1 className='font-semibold'>Upcoming tests</h1>
      <SubjectTest />
      <SubjectTest />
      <SubjectTest />
      <SubjectTest />
      <SubjectTest />
      <SubjectTest />
      <SubjectTest />
      <SubjectTest />
    </aside>
  );
};

export default Tests;