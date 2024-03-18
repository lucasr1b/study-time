import { ChangeEvent } from 'react';
import countries from '../../../utils/countries';

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
        {countries.map((country) => (
          <option key={country.code} value={country.code}>{country.name}</option>
        ))}
      </select>
    </>
  );
};

export default SelectCountry;