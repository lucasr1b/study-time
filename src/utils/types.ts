export type Country = {
  code: string;
  name: string;
};

export type Subject = {
  subject_id: string;
  subject_name: string;
  subject_board: string;
  subject_level: string;
  subject_icon: string;
  board_id: string;
  level_id: string;
};

export type SetSubjects = React.Dispatch<React.SetStateAction<Subject[]>>;
export type SetSubject = React.Dispatch<React.SetStateAction<Subject | undefined>>;

export type ExamBoard = {
  _id: string;
  board_name: string;
  board_levels: string[];
};

export type ExamLevel = {
  _id: string
  level_name: string;
  board_id: string;
};

export type ExamBoardDetails = {
  board_id: string;
  board_name: string;
  level_id: string;
  level_name: string;
};

export type Assessment = {
  _id: string;
  user: string;
  subject_id: string;
  subject_name: string;
  subject_icon: string;
  description: string;
  date: Date;
};

export type SetAssessments = React.Dispatch<React.SetStateAction<Assessment[]>>;

export type Tracker = {
  _id: string;
  user: string;
  subject_id: string;
  subject_name: string;
  subject_icon: string
  is_setup: boolean;
  time_allocated: number;
  time_studied: number;
  completed: boolean;
};

export type SetTrackers = React.Dispatch<React.SetStateAction<Tracker[]>>;

export type StudyLog = {
  user: string;
  subject_name: string;
  subject_icon: string;
  time_studied: number;
  date_logged: Date;
};

export type Event = {
  _id: string;
  user: string;
  title: string;
  date: Date;
};

export type SetEvent = React.Dispatch<React.SetStateAction<Event | undefined>>;

export type SetNumberState = React.Dispatch<React.SetStateAction<number>>;
export type SetStringState = React.Dispatch<React.SetStateAction<string>>;
export type SetBooleanState = React.Dispatch<React.SetStateAction<boolean>>;
export type SetDateState = React.Dispatch<React.SetStateAction<Date>>;