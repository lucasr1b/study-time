import { Subject } from '../../utils/types';

type SubjectItemProps = {
  removeSubject: (id: string) => void;
  subject: Subject;
};

const SubjectItem = (props: SubjectItemProps) => {
  return (
    <div className='flex flex-col h-full w-full p-3 rounded-lg bg-white border border-zinc-200'>
      <p className='text-m font-medium text-black'>{props.subject.subject_icon} {props.subject.subject_name}</p>
      <p className='text-zinc-500 mb-2'>{props.subject.subject_curriculum} {props.subject.subject_level}</p>
      <div className='flex gap-4 mt-auto'>
        <button className='bg-white border border-zinc-200 rounded-md h-8 px-3 hover:bg-zinc-200 text-sm'>Edit</button>
        <button className='bg-white border border-zinc-200 rounded-md h-8 px-3 hover:bg-zinc-200 text-sm' onClick={() => props.removeSubject(props.subject.subject_id)}>Remove</button>
      </div>
    </div>
  );
};

export default SubjectItem;
