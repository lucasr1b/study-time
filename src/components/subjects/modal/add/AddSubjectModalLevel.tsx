import { ExamBoardDetails, SetStringState } from '../../../../utils/types';
import { useEffect, useState } from 'react';
import React from 'react';
import { fetchExamBoardDetails } from '../../../../utils/helpers';
import AddSubjectModalItemSkeleton from './AddSubjectModalItemSkeleton';

type AddSubjectModalLevelProps = {
  setExamBoard: SetStringState;
  setExamBoardLevel: SetStringState;
};

const AddSubjectModalLevel = (props: AddSubjectModalLevelProps) => {
  const [examBoardsDetails, setExamBoardsDetails] = useState<ExamBoardDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const setExamBoardsAndLevels = async () => {
      try {
        const examBoards = await fetchExamBoardDetails();
        setExamBoardsDetails(examBoards);
        setExamBoardsAndLevels();
      } catch (err: any) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    setExamBoardsAndLevels();
  }, []);

  const selectBoardAndLevel = (boardName: string, levelName: string) => {
    props.setExamBoard(boardName);
    props.setExamBoardLevel(levelName);
  };

  return (
    <div className='fixed z-50 flex flex-col w-3/12 h-auto p-4 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary'>
      <h1 className='font-semibold'>Select your exam board and level</h1>
      <form className='flex flex-row items-baseline space-y-4 gap-4 h-full'>
        <div className='w-full'>
          <ul className='bg-primary border border-accent rounded-lg mt-2 overflow-y-scroll h-64'>
            {isLoading ? (
              [...Array(3)].map((x, i) => (
                <AddSubjectModalItemSkeleton key={i} />
              ))
            ) : (
              examBoardsDetails.map((board: ExamBoardDetails) => (
                <li
                  key={`${board.board_name} ${board.level_name}`}
                  className='flex items-center h-12 w-full p-2 hover:bg-accent hover:cursor-pointer'
                  onClick={() => selectBoardAndLevel(board.board_name, board.level_name)}>
                  <p className='font-medium'>{`${board.board_name} ${board.level_name}`}</p>
                </li>
              ))
            )}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default AddSubjectModalLevel;