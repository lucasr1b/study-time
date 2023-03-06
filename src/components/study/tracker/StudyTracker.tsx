import SubjectTracker from './SubjectTracker';

const StudyTracker = () => {
  return (
    <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
      <h1 className='font-semibold mb-4'>Study tracker</h1>
      <div className='grid grid-cols-3 grid-flow-row gap-6'>
        <SubjectTracker />
        <SubjectTracker />
        <SubjectTracker />
        <SubjectTracker />
        <SubjectTracker />
        <SubjectTracker />
      </div>
    </div>
  )
}

export default StudyTracker;