import { ChangeEvent } from 'react';

type SelectYearLevelProps = {
  yearLevel: number;
  handleYearLevel: (e: ChangeEvent<HTMLSelectElement>) => void;
  nextStep: () => void;
};

const SelectYearLevel = (props: SelectYearLevelProps) => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-semibold mb-8'>Select Year Level</h1>
      </div>
      <select
        className='border border-gray-400 rounded-md py-2 px-4 w-full mb-6'
        value={props.yearLevel}
        onChange={props.handleYearLevel}>
        <option value='0'>Select your year level</option>
        <option value='9'>Year 9</option>
        <option value='10'>Year 10</option>
        <option value='11'>Year 11</option>
        <option value='12'>Year 12</option>
        <option value='13'>Year 13</option>
      </select>
    </>
  );
};

export default SelectYearLevel;