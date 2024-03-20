import React, { ChangeEvent, useEffect, useState } from 'react';
import Navbar from '../components/navigation/Navbar';
import { ExamBoardDetails, Subject } from '../utils/types';
import { fetchExamBoardDetails } from '../utils/helpers';
import axios from 'axios';
import SelectYearLevel from '../components/onboarding/steps/SelectYearLevel';
import SelectCountry from '../components/onboarding/steps/SelectCountry';
import SelectExamBoard from '../components/onboarding/steps/SelectExamBoard';
import SelectSubjects from '../components/onboarding/steps/SelectSubjects';
import StepsNavigation from '../components/onboarding/StepsNavigation';
import StepsProgress from '../components/onboarding/StepsProgress';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from '../lib/session';
import Router from 'next/router';

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

  const [canProceed, setCanProceed] = useState(false);

  const handleYearLevel = (e: ChangeEvent<HTMLSelectElement>) => {
    setYearLevel(parseInt(e.target.value));
  };

  const handleCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  const handleExamBoard = (board: ExamBoardDetails) => {
    setExamLevel(''); // reset exam level if exam board changes
    setExamLevelId('');
    setSelectedSubjects([]);
    setExamBoard(board.board_name);
    setExamBoardId(board.board_id);
    if (board.level_name != '') {
      setExamLevel(board.level_name);
      setExamLevelId(board.level_id);
    }
  };

  const handleSubjects = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(prev => prev.filter(s => s !== subject));
    } else {
      setSelectedSubjects(prev => [...prev, subject]);
    }
  };

  useEffect(() => {
    const checkCanProceed = () => {
      switch (step) {
        case 1:
          setCanProceed(yearLevel !== 0);
          break;
        case 2:
          setCanProceed(country !== '');
          break;
        case 3:
          setCanProceed(examBoard !== '');
          break;
        case 4:
          setCanProceed(selectedSubjects.length > 0);
          break;
      }
    };

    checkCanProceed();
  }, [yearLevel, country, examBoard, selectedSubjects, step]);


  const finishOnboarding = async () => {
    try {
      await axios.post('/api/user/finishOnboarding', {
        yearLevel: yearLevel,
        country: country,
        subjects: selectedSubjects,
      });
      Router.reload();
    } catch (err: any) {
      console.error('Error during onboarding:', err.response.data.error);
    }

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

  const nextStep = () => {
    setStep(step + 1);
    if (step === 3) fetchSubjects(examBoardId, examLevelId);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  return (
    <div className='px-8 py-4 h-screen flex flex-col justify-center items-center'>
      <Navbar hideAuth={true} showLogout={true} />
      <div className='flex flex-col items-center justify-center h-full w-full'>
        <div className='flex justify-center w-full max-w-6xl'>
          <div>
            {step === 1 &&
              <SelectYearLevel
                yearLevel={yearLevel}
                handleYearLevel={handleYearLevel}
                nextStep={nextStep}
              />}
            {step === 2 &&
              <SelectCountry
                country={country}
                handleCountry={handleCountry}
                previousStep={previousStep}
                nextStep={nextStep}
              />}
            {step === 3 &&
              <SelectExamBoard
                examBoard={examBoard}
                examLevel={examLevel}
                handleExamBoard={handleExamBoard}
                examBoardsDetails={examBoardsDetails}
                previousStep={previousStep}
                nextStep={nextStep}
              />}
            {step === 4 &&
              <SelectSubjects
                examBoard={examBoard}
                examLevel={examLevel}
                subjectsList={subjectsList}
                selectedSubjects={selectedSubjects}
                handleSubjects={handleSubjects}
                previousStep={previousStep}
              />}
            <StepsNavigation step={step} canProceed={canProceed} previousStep={previousStep} nextStep={nextStep} finishOnboarding={finishOnboarding} />
          </div>
        </div>
      </div>
      <StepsProgress progress={progressWidth} />
    </div >
  );
};

export default OnboardingPage;

export const getServerSideProps = withIronSessionSsr(
  async ({ req }) => {
    const user = req.session.user;

    if (!user) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    if (!user.onboarding) {
      return {
        redirect: {
          destination: '/app',
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  }, sessionOptions,
);
