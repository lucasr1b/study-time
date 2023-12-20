import { formatFancyAssessmentOverviewDate } from '../../utils/helpers';

type AssessmentOverviewProps = {
  subject_icon: string;
  subject_name: string;
  date: Date;
  description: string;
};

const AssessmentOverview = (props: AssessmentOverviewProps) => {
  return (
    <div className='border border-zinc-200 rounded-lg px-2 py-2'>
      <div className='flex items-center'>
        <p className='font-medium'>{props.subject_icon} {props.subject_name}</p>
        <div className='text-sm w-fit rounded-md ml-auto text-zinc-500'>{formatFancyAssessmentOverviewDate(props.date)}</div>
      </div>
      <p className='font-normal text-sm'>{props.description}</p>
    </div>
  );
};

export default AssessmentOverview;