import React, { useState } from 'react';
import { padDate } from '../../utils/helpers';

const DateSelector = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const lastYear = currentYear - 1;

  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth() + 1); // month starts from 0
  const [year, setYear] = useState(date.getFullYear());

  const daysInMonth = (selectedYear: number, selectedMonth: number) => new Date(selectedYear, selectedMonth, 0).getDate();

  const handleMonthChange = (e: any) => {
    const selectedMonth = parseInt(e.target.value);
    setMonth(selectedMonth);

    if (day > daysInMonth(year, selectedMonth)) {
      setDay(1);
    }
  };

  const handleYearChange = (e: any) => {
    const selectedYear = parseInt(e.target.value);
    setYear(selectedYear);

    if (day > daysInMonth(selectedYear, month)) {
      setDay(1);
    }
  };

  const dayOptions = Array.from({ length: daysInMonth(year, month) }, (_, i) => (
    <option key={i + 1} value={i + 1}>{padDate(i + 1)}</option>
  ));

  const monthOptions = Array.from({ length: 12 }, (_, i) => (
    <option key={i + 1} value={i + 1}>{padDate(i + 1)}</option>
  ));

  const yearOptions = Array.from({ length: 5 }, (_, i) => (
    <option key={lastYear + i + 1} value={lastYear + i + 1}>{lastYear + i + 1}</option>
  ));


  return (
    <div className='flex items-center gap-1'>
      <div className='inline-flex border rounded-md p-2 w-full'>
        <select value={day} onChange={(e) => setDay(parseInt(e.target.value))} className='w-full outline-none'>
          {dayOptions}
        </select>
      </div>
      /
      <div className='inline-flex border rounded-md p-2 w-full'>
        <select value={month} onChange={handleMonthChange} className='w-full outline-none'>
          {monthOptions}
        </select>
      </div>
      /
      <div className='inline-flex border rounded-md p-2 w-full'>
        <select defaultValue={currentYear} onChange={handleYearChange} className='w-full outline-none'>
          {yearOptions}
        </select>
      </div>
    </div>
  );
};

export default DateSelector;