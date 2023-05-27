type ExamSubjectProps = {
  icon: string;
  name: string;
  progress: number;
  total: number;
};

const ExamSubject = (props: ExamSubjectProps) => {
  return (
    <li className='py-1 px-2 rounded hover:bg-zinc-200 hover:cursor-pointer'>
      {props.icon} {props.name} ({props.progress}/{props.total})
    </li>
  );
};

export default ExamSubject;