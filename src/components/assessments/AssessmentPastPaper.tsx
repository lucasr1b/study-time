type AssessmentPastPaperProps = {
  name: string;
  icon: string;
  progress: number;
};

const AssessmentPastPaper = (props: AssessmentPastPaperProps) => {
  return (
    <div className='flex flex-col items-center justify-center h-32 min-w-max p-8 rounded-lg bg-primary border border-accent hover:cursor-default'>
      <p className='text-2xl'>{props.icon}</p>
      <p className='text-m text-text font-medium'>{props.name}</p>
      <div className='mb-1 text-sm text-text-secondary'>?? past papers completed</div>
    </div>
  );
};

export default AssessmentPastPaper;