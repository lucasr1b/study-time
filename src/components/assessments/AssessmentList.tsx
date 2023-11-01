import AssessmentOverview from './AssessmentOverview';

const Assessments = () => {
  return (
    <aside className='w-full h-1/2 p-4 border rounded-lg border-zinc-200 bg-white'>
      <h1 className='font-semibold pb-2'>Upcoming assessments</h1>
      <div className='overflow-y-auto flex flex-col gap-2 h-80 w-full rounded pr-4'>
        <AssessmentOverview />
        <AssessmentOverview />
        <AssessmentOverview />
        <AssessmentOverview />
        <AssessmentOverview />
        <AssessmentOverview />
        <AssessmentOverview />
        <AssessmentOverview />
      </div>
    </aside>
  );
};

export default Assessments;