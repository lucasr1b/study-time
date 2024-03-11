import { ExamBoardDetails } from '../../../utils/types';

type SelectExamBoardProps = {
  examBoard: string;
  examLevel: string;
  handleExamBoard: (board: ExamBoardDetails) => void;
  examBoardsDetails: ExamBoardDetails[];
  previousStep: () => void;
  nextStep: () => void;
};

const SelectExamBoard = (props: SelectExamBoardProps) => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-semibold mb-2'>Select Exam Board</h1>
        <span className='block mb-4'>You can change this at anytime</span>
      </div>
      <div className='flex justify-center mb-6'>
        {props.examBoardsDetails.map((board: ExamBoardDetails, i) => (
          <div key={i}>
            <button
              className={`border border-gray-400 rounded-md py-2 px-4 mr-2 ${props.examBoard === board.board_name && props.examLevel === board.level_name ? 'bg-accent' : 'bg-white'}`}
              onClick={() => props.handleExamBoard(board)}>
              {board.board_name} {board.level_name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectExamBoard;