import SubjectProgress from './SubjectProgress';

const WeeklyProgress = () => {
  return (
    <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
      <h1 className='font-semibold mb-4'>Weekly progress</h1>
      <div className='flex gap-4 pb-4 overflow-y-auto'>
        <SubjectProgress />
        <SubjectProgress />
        <SubjectProgress />
        <SubjectProgress />
        <SubjectProgress />
        <SubjectProgress />
      </div>
    </div>
  )
}

export default WeeklyProgress;