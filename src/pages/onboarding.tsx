import React, { ChangeEvent, useEffect, useState } from 'react';
import Navbar from '../components/navigation/Navbar';
import { ExamBoardDetails, Subject } from '../utils/types';
import { fetchExamBoardDetails } from '../utils/helpers';
import axios from 'axios';

const OnboardingPage = () => {
  const [examBoardsDetails, setExamBoardsDetails] = useState<ExamBoardDetails[]>([]);
  const [subjectsList, setSubjectsList] = useState<Subject[]>([]);

  const [step, setStep] = useState(1);
  const [yearLevel, setYearLevel] = useState(0);
  const [country, setCountry] = useState('');
  const [examBoard, setExamBoard] = useState('');
  const [examLevel, setExamLevel] = useState('');
  const [examBoardId, setExamBoardId] = useState('');
  const [examLevelId, setExamLevelId] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([] as string[]);

  const totalSteps = 4;
  const progressWidth = `${(100 / totalSteps) * step}%`;

  const handleYearLevel = (e: ChangeEvent<HTMLSelectElement>) => setYearLevel(parseInt(e.target.value));
  const handleCountry = (e: ChangeEvent<HTMLSelectElement>) => setCountry(e.target.value);
  const handleExamBoard = (board: ExamBoardDetails) => {
    setExamLevel(''); // reset exam level if exam board changes
    setExamLevelId('');
    setExamBoard(board.board_name);
    setExamBoardId(board.board_id);
    if (board.level_name != '') {
      setExamLevel(board.level_name);
      setExamLevelId(board.level_id);
    }
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
    const setExamBoardsAndLevels = async () => {
      const examBoardsData = await fetchExamBoardDetails();
      setExamBoardsDetails(examBoardsData);
    };

    setExamBoardsAndLevels();
  }, []);

  const fetchSubjects = async (boardId: string, levelId: string) => {
    if (levelId === '') {
      const res = await axios.get(`/api/subjects/list/boards/${boardId}`);
      setSubjectsList(res.data.subjects);
    } else {
      const res = await axios.get(`/api/subjects/list/boards/${boardId}/${levelId}`);
      setSubjectsList(res.data.subjects);
    }
  };

  const handleNextStep = () => {
    setStep(step + 1);

    if (step === 3) fetchSubjects(examBoardId, examLevelId);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <div className='px-8 py-4 h-screen flex flex-col justify-center items-center'>
      <Navbar hideAuth={true} />
      <div className='flex flex-col items-center justify-center h-full w-full'>
        <div className='flex justify-center w-full max-w-6xl'>
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
                {examBoardsDetails.map((board: ExamBoardDetails, i) => (
                  <div key={i}>
                    <button
                      className={`border border-gray-400 rounded-md py-2 px-4 mr-2 ${examBoard === board.board_name && examLevel === board.level_name ? 'bg-accent' : 'bg-white'}`}
                      onClick={() => handleExamBoard(board)}>
                      {board.board_name} {board.level_name}
                    </button>
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
                <div className='flex justify-center mb-6 gap-2 flex-wrap'>
                  {subjectsList.map((subject: Subject, i) => (
                    <button
                      key={i}
                      className={`border border-gray-400 rounded-md py-2 px-4 mr-2 ${selectedSubjects.includes(subject.subject_id) ? 'bg-accent' : 'bg-white'}`}
                      onClick={() => handleSubjects(subject.subject_id)}>
                      {subject.subject_name}
                    </button>
                  ))}
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
    </div >
  );
};

export default OnboardingPage;