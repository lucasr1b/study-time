import axios from 'axios';
import { ExamLevel, SetDateState, SetNumberState } from './types';
import Router from 'next/router';

export const getMinutes = (time: number) => { return Math.floor((time / 60) % 60); };
export const getHours = (time: number) => { return Math.floor((((time / 60) % 3600) / 60)); };

export const formatTime = (time: number) => {
  const minutes = getMinutes(time);
  const hours = getHours(time);

  if (minutes > 0 && hours == 0) return `${minutes}m`;
  if (minutes == 0 && hours > 0) return `${hours}h`;
  return `${hours}h ${minutes}m`;
};

export const formatFancyTime = (time: number) => {
  const minutes = getMinutes(time);
  const hours = getHours(time);

  if (hours == 1 && minutes == 0) return `${hours} hour`;
  if (hours > 1 && minutes == 0) return `${hours} hours`;
  return `${hours}h ${minutes}m`;
};

export const formatWeeklyProgressTime = (time: number, maxTime: number) => {
  const minutes = getMinutes(time);
  const hours = getHours(time);
  if (minutes == 0 && hours == 0) return '0 minutes completed';
  if (minutes > 0 && hours == 0) return `${minutes}m / ${formatTime(maxTime)} completed`;
  if (minutes == 0 && hours > 0) return `${hours}h / ${formatTime(maxTime)} completed`;
  if (time >= maxTime) return 'Weekly goal completed';
  return `${hours}h ${minutes}m / ${formatTime(maxTime)} completed`;
};

export const formatWeeklyProgressBar = (time: number, maxTime: number) => {
  let percentage = 0;
  if (time > maxTime) percentage = 100;
  else percentage = (time / maxTime) * 100;
  if (percentage > 99) return Math.floor(percentage);
  if (percentage < 99) percentage = Math.ceil(percentage);

  return Math.ceil(percentage);
};

export const formatSubjectTimer = (hours: number, minutes: number, seconds: number) => {
  if (hours <= 0 && minutes <= 0 && seconds <= 0) return '0s';
  return `${hours.toString().padStart(1, '0')}h ${minutes.toString().padStart(1, '0')}m ${seconds.toString().padStart(1, '0')}s`;
};

export const formatSubjectSessionLoggedTime = (time: number) => {
  const minutes = getMinutes(time);
  const hours = getHours(time);

  if (hours == 0 && minutes == 0) return 'less than a minute';
  if (minutes == 1 && hours == 0) return '1 minute';
  if (minutes == 0 && hours == 1) return '1 hour';
  if (minutes > 0 && hours == 0) return `${minutes} minutes`;
  if (minutes == 0 && hours > 0) return `${hours} hours`;
  return `${hours}h ${minutes}m`;
};

export const formatSubjectSessionLoggedDate = (date: Date) => {
  date = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const formattedDate = date.toLocaleString('en', options);
  return formattedDate;
};

export const padDate = (date: number) => {
  return date.toString().padStart(2, '0');
};

export const formatAssessmentDate = (date: Date) => {
  date = new Date(date);

  const year = date.getFullYear().toString().slice(2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return `${day}/${month}/${year}`;
};

export const formatFancyAssessmentOverviewDate = (date: Date) => {
  date = new Date(date);
  const currentDate = new Date();

  const timeDifference = Number(date) - Number(currentDate);
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference == 0) {
    return 'assessed tomorrow';
  }

  if (daysDifference <= 30) {
    return `assessed in ${daysDifference} days`;
  } else {
    return `assessed in ${formatAssessmentDate(date)}`;
  }
};

export const validateAssessmentDate = (selectedDate: Date, setDay: SetNumberState, setMonth: SetNumberState, setYear: SetNumberState, setSelectedDate: SetDateState) => {
  const currentDate = new Date();
  if (selectedDate < currentDate) {
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 1);
    setDay(tomorrow.getDate());
    setMonth(tomorrow.getMonth() + 1);
    setYear(tomorrow.getFullYear());
    setSelectedDate(tomorrow);
  } else {
    setSelectedDate(selectedDate);
  }
};

export const formatEventDate = (date: Date) => {
  date = new Date(date);
  const options = { weekday: 'short', day: 'numeric', month: 'short' } as Intl.DateTimeFormatOptions;

  return date.toLocaleDateString('en-NZ', options);
};

export const fetchExamBoardDetails = async () => {
  const fetchExamBoards = async () => {
    try {
      const res = await axios.get('/api/boards');
      return res.data.examBoards;
    } catch (err: any) {
      console.error('Error fetching exam boards:', err.response.data.error);
      return [];
    }
  };

  const fetchExamLevels = async () => {
    try {
      const res = await axios.get('/api/boards/levels');
      return res.data.examLevels;
    } catch (err: any) {
      console.error('Error fetching exam levels:', err.response.data.error);
      return [];
    }
  };

  try {
    const [examBoards, examLevels] = await Promise.all([fetchExamBoards(), fetchExamLevels()]);

    let boardsData = [];

    for (const board of examBoards) {
      if (board.board_levels.length > 0) {
        const levels = examLevels.filter((level: ExamLevel) => level.board_id === board._id);
        for (const level of levels) {
          boardsData.push({ board_id: board._id, board_name: board.board_name, level_id: level._id, level_name: level.level_name });
        }
      } else {
        boardsData.push({ board_id: board._id, board_name: board.board_name, level_id: '', level_name: '' });
      }
    }
    return boardsData;
  } catch (err: any) {
    console.error('Error fetching boards and levels:', err);
    return [];
  }
};


export const logoutUser = async () => {
  try {
    await axios.post('/api/auth/logout').then(async () => {
      await Router.push('/');
    });
  } catch (err: any) {
    console.error('Error during logout:', err.response.data.error);
  }
};