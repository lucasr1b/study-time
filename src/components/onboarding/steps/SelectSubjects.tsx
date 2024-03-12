import { Subject } from '../../../utils/types';

type SelectSubjectsProps = {
  examBoard: string;
  examLevel: string;
  subjectsList: Subject[];
  selectedSubjects: string[];
  handleSubjects: (subject: string) => void;
  previousStep: () => void;
};

const SelectSubjects = (props: SelectSubjectsProps) => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-semibold mb-2'>Select Subjects</h1>
        <span className='block mb-4'>Select <span className='font-medium'>{props.examBoard} {props.examLevel}</span> Subjects:</span>
      </div>
      <div>
        <div className='flex justify-center mb-6 gap-2 flex-wrap'>
          {props.subjectsList.map((subject: Subject, i) => (
            <button
              key={i}
              className={`border border-gray-400 rounded-md py-2 px-4 mr-2 ${props.selectedSubjects.includes(subject.subject_id) ? 'bg-accent' : 'bg-white'}`}
              onClick={() => props.handleSubjects(subject.subject_id)}>
              {subject.subject_name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default SelectSubjects;