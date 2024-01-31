import { SetStringState } from '../../../../utils/types';

type AddSubjectModalSelectLevelProps = {
  setExamBoard: SetStringState;
  setSelectedLevel: SetStringState;
};

const AddSubjectModalSelectLevel = (props: AddSubjectModalSelectLevelProps) => {
  return (
    <div className='fixed z-50 flex flex-col w-3/12 h-auto p-4 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary'>
      <h1 className='font-semibold'>Select your exam board and level</h1>
      <form className='flex flex-row items-baseline space-y-4 gap-4 h-full'>
        <div className='w-full'>
          <ul className='bg-primary border border-accent rounded-lg mt-2 overflow-y-scroll h-64'>
            <li className='flex items-center h-12 w-full p-2 hover:bg-accent hover:cursor-pointer' onClick={() => props.setSelectedLevel('IGCSE')}>
              <p className='font-medium'>Cambridge IGCSE</p>
            </li>
            <li className='flex items-center h-12 w-full p-2 hover:bg-accent hover:cursor-pointer' onClick={() => props.setSelectedLevel('AS')}>
              <p className='font-medium'>Cambridge AS</p>
            </li>
            <li className='flex items-center h-12 w-full p-2 hover:bg-accent hover:cursor-pointer' onClick={() => props.setSelectedLevel('A2')}>
              <p className='font-medium'>Cambridge A2</p>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default AddSubjectModalSelectLevel;