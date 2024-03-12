import { ExamBoardDetails, SetStringState } from '../../../../utils/types';
import { useEffect, useState } from 'react';
import React from 'react';
import { fetchExamBoardDetails } from '../../../../utils/helpers';

type AddSubjectModalLevelProps = {
  setExamBoard: SetStringState;
  setExamBoardLevel: SetStringState;
};

const AddSubjectModalLevel = (props: AddSubjectModalLevelProps) => {
  const [examBoardsDetails, setExamBoardsDetails] = useState<ExamBoardDetails[]>([]);

  useEffect(() => {
    const setExamBoardsAndLevels = async () => {
      const examBoards = await fetchExamBoardDetails();
      setExamBoardsDetails(examBoards);
    };

    setExamBoardsAndLevels();
  }, []);

  const selectBoardAndLevel = (board_name: string, level: string) => {
    props.setExamBoard(board_name);
    props.setExamBoardLevel(level);
  };

  return (
    <div className='fixed z-50 flex flex-col w-3/12 h-auto p-4 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary'>
      <h1 className='font-semibold'>Select your exam board and level</h1>
      <form className='flex flex-row items-baseline space-y-4 gap-4 h-full'>
        <div className='w-full'>
          <ul className='bg-primary border border-accent rounded-lg mt-2 overflow-y-scroll h-64'>
            {examBoardsDetails.map((board: ExamBoardDetails) => (
              <li
                key={`${board.board_name} ${board.level_name}`}
                className='flex items-center h-12 w-full p-2 hover:bg-accent hover:cursor-pointer'
                onClick={() => selectBoardAndLevel(board.board_name, board.level_name)}>
                <p className='font-medium'>{`${board.board_name} ${board.level_name}`}</p>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default AddSubjectModalLevel;