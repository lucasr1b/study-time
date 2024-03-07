import React, { useEffect, useState } from 'react';
import Navbar from '../components/navigation/Navbar';
import axios from 'axios';
import { ExamBoard } from '../utils/types';

const OnboardingPage = () => {
  const [examBoardsList, setExamBoardsList] = useState<ExamBoard[]>([]);

  const [step, setStep] = useState(1);
  const [yearLevel, setYearLevel] = useState(0);
  const [country, setCountry] = useState('');
  const [examBoard, setExamBoard] = useState('');
  const [examLevel, setExamLevel] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([] as string[]);

  const totalSteps = 4;
  const progressWidth = `${(100 / totalSteps) * step}%`;

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleYearLevel = (e: any) => setYearLevel(parseInt(e.target.value));
  const handleCountry = (e: any) => setCountry(e.target.value);
  const handleExamBoard = (board: string, level?: string) => {
    setExamLevel(''); // reset exam level if exam board changes
    setExamBoard(board);
    if (level) setExamLevel(level);
    setSelectedSubjects([]);
  };
  const handleSubjects = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(prev => prev.filter(s => s !== subject));
    } else {
      setSelectedSubjects(prev => [...prev, subject]);
    }
  };

  const handleFinish = () => {
    // Handle finishing onboarding process
    console.log('Onboarding finished with year level:', yearLevel, 'country:', country, 'exam board:', examBoard, 'exam level:', examLevel, 'subjects:', selectedSubjects);
  };

  useEffect(() => {
    const fetchExamBoardsAndLevels = async () => {
      try {
        const res = await axios.get('/api/boards');
        setExamBoardsList(res.data.examBoards);
        console.log(res.data.examBoards);
      } catch (err: any) {
        console.error('Error fetching exam boards:', err.response.data.error);
      }
    };
    fetchExamBoardsAndLevels();
  }, []);

  return (
    <div className='px-8 py-4 h-screen flex flex-col justify-center items-center'>
      <Navbar hideAuth={true} />
      <div className='flex flex-col items-center justify-center h-full w-full'>
        <div className='flex justify-center w-full max-w-lg'>
          {step === 1 && (
            <div>
              <div className='flex flex-col items-center'>
                <h1 className='text-4xl font-semibold mb-8'>Select Year Level</h1>
              </div>
              <select
                className='border border-gray-400 rounded-md py-2 px-4 w-full mb-6'
                value={yearLevel}
                onChange={handleYearLevel}>
                <option value='0'>Select your year level</option>
                <option value='9'>Year 9</option>
                <option value='10'>Year 10</option>
                <option value='11'>Year 11</option>
                <option value='12'>Year 12</option>
                <option value='13'>Year 13</option>
              </select>
              <div className='flex justify-center gap-2'>
                {yearLevel === 0 ? (
                  <button className='bg-accent border border-accent rounded-lg py-2 px-6 text-text-secondary font-medium hover:cursor-default text-lg'>Next</button>
                ) : (
                  <button className='bg-primary border border-accent rounded-lg py-2 px-6 font-medium hover:bg-accent text-lg transition ease-in' onClick={handleNextStep}>Next</button>
                )}
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <div className='flex flex-col items-center'>
                <h1 className='text-4xl font-semibold mb-8'>Select Country</h1>
              </div>
              <select
                className='border border-gray-400 rounded-md py-2 px-4 w-full mb-6'
                value={country}
                onChange={handleCountry}>
                <option value=''>Select your country</option>
                <option value='USA'>United States</option>
                <option value='UK'>United Kingdom</option>
                <option value='AU'>Australia</option>
                <option value='NZ'>New Zealand</option>
                {/* Add more countries as needed */}
              </select>
              <div className='flex justify-center gap-2'>
                <button className='bg-primary border border-accent rounded-lg py-2 px-6 font-medium hover:bg-accent text-lg' onClick={handlePreviousStep}>Previous</button>
                {country === '' ? (
                  <button className='bg-accent border border-accent rounded-lg py-2 px-6 text-text-secondary font-medium hover:cursor-default text-lg'>Next</button>
                ) : (
                  <button className='bg-primary border border-accent rounded-lg py-2 px-6 font-medium hover:bg-accent text-lg transition ease-in' onClick={handleNextStep}>Next</button>
                )}
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <div className='flex flex-col items-center'>
                <h1 className='text-4xl font-semibold mb-2'>Select Exam Board</h1>
                <span className='block mb-4'>You can change this at anytime</span>
              </div>
              <div className='flex justify-center mb-6'>
                {examBoardsList.map((board: ExamBoard, i) => (
                  <div key={i}>
                    {(!board.levels || board.levels.length === 0) && (
                      <button
                        className={`border border-gray-400 rounded-md py-2 px-4 mr-4 ${examBoard === board.exam_board ? 'bg-accent' : 'bg-white'}`}
                        onClick={() => handleExamBoard(board.exam_board)}>
                        {board.exam_board}
                      </button>
                    )}
                    {board.levels && board.levels.length > 0 && (
                      <div className="ml-2">
                        {board.levels.map((level: string, j) => (
                          <button
                            key={j}
                            className={`border border-gray-400 rounded-md py-2 px-4 mr-2 ${examBoard === board.exam_board && examLevel === level ? 'bg-accent' : 'bg-white'}`}
                            onClick={() => handleExamBoard(board.exam_board, level)}>
                            {board.exam_board} {level}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className='flex justify-center gap-2'>
                <button className='bg-primary border border-accent rounded-lg py-2 px-6 font-medium hover:bg-accent text-lg' onClick={handlePreviousStep}>Previous</button>
                {examBoard === '' && examLevel === '' ? (
                  <button className='bg-accent border border-accent rounded-lg py-2 px-6 text-text-secondary font-medium hover:cursor-default text-lg'>Next</button>
                ) : (
                  <button className='bg-primary border border-accent rounded-lg py-2 px-6 font-medium hover:bg-accent text-lg transition ease-in' onClick={handleNextStep}>Next</button>
                )}
              </div>
            </div>
          )}
          {step === 4 && (
            <div>
              <div className='flex flex-col items-center'>
                <h1 className='text-4xl font-semibold mb-2'>Select Subjects</h1>
                <span className='block mb-4'>Select <span className='font-medium'>{examBoard} {examLevel}</span> Subjects:</span>
              </div>
              <div>
                <div className='flex justify-center mb-6'>
                  <button className={`border border-gray-400 rounded-md py-2 px-4 mr-4 ${selectedSubjects.includes('Maths') ? 'bg-accent' : 'bg-white'}`} onClick={() => handleSubjects('Maths')}>Maths</button>
                  <button className={`border border-gray-400 rounded-md py-2 px-4 mr-4 ${selectedSubjects.includes('Science') ? 'bg-accent' : 'bg-white'}`} onClick={() => handleSubjects('Science')}>Science</button>
                  <button className={`border border-gray-400 rounded-md py-2 px-4 mr-4 ${selectedSubjects.includes('English') ? 'bg-accent' : 'bg-white'}`} onClick={() => handleSubjects('English')}>English</button>
                </div>
              </div>
              <div className='flex justify-center gap-2'>
                <button className='bg-primary border border-accent rounded-lg py-2 px-6 font-medium hover:bg-accent text-lg' onClick={handlePreviousStep}>Previous</button>
                {selectedSubjects.length === 0 ? (
                  <button className='bg-accent border border-accent rounded-lg py-2 px-6 text-text-secondary font-medium hover:cursor-default text-lg'>Finish</button>
                ) : (
                  <button className='bg-primary border border-accent rounded-lg py-2 px-6 font-medium hover:bg-accent text-lg transition ease-in' onClick={handleFinish}>Finish</button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='flex flex-col items-center w-full max-w-lg'>
        <div className='w-full h-4 bg-gray-200 rounded-full mb-4'>
          <div className='h-full bg-blue-600 rounded-full transition-all duration-300 ease-in-out' style={{ width: progressWidth }}></div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;