import { ChangeEvent } from 'react';

type SelectCountryProps = {
  country: string;
  handleCountry: (e: ChangeEvent<HTMLSelectElement>) => void;
  previousStep: () => void;
  nextStep: () => void;
};

const SelectCountry = (props: SelectCountryProps) => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-semibold mb-8'>Select Country</h1>
      </div>
      <select
        className='border border-gray-400 rounded-md py-2 px-4 w-full mb-6'
        value={props.country}
        onChange={props.handleCountry}>
        <option value=''>Select your country</option>
        <option value='USA'>United States</option>
        <option value='UK'>United Kingdom</option>
        <option value='AU'>Australia</option>
        <option value='NZ'>New Zealand</option>
      </select>
    </>
  );
};

export default SelectCountry;