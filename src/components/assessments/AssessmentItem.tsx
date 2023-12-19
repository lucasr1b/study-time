import { formatAssessmentDate } from '../../utils/helpers';

type AssessmentItemProps = {
  subject_icon: string;
  subject_name: string;
  date: Date;
  description: string;
};

const AssessmentItem = (props: AssessmentItemProps) => {
  return (
    <div>
      <div className='flex flex-col border border-zinc-200 rounded-lg p-2 h-full'>
        <div className='flex items-center'>
          <p className='font-medium'>{props.subject_icon} {props.subject_name}</p>
          <div className='text-sm w-fit rounded-md ml-auto text-zinc-500'>{formatAssessmentDate(props.date)}</div>
        </div>
        <p className='font-normal text-sm py-1'>{props.description}</p>
        <div className='flex gap-4 py-1 mt-auto'>
          <button className='bg-white border border-zinc-200 rounded-md h-8 px-3 hover:bg-zinc-200 text-sm'>Edit</button>
          <button className='bg-white border border-zinc-200 rounded-md h-8 px-3 hover:bg-zinc-200 text-sm'>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentItem;