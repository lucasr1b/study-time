export type Subject = {
  subject_id: string;
  subject_name: string;
  subject_curriculum: string;
  subject_level: string;
  subject_icon: string;
};

export type SetSubjects = React.Dispatch<React.SetStateAction<Subject[]>>;

export type Assessment = {
  assessment_id: string;
  user: string;
  subject_id: string;
  subject_name: string;
  subject_icon: string;
  description: string;
  date: Date;
};

export type SetAssessments = React.Dispatch<React.SetStateAction<Assessment[]>>;

export type Tracker = {
  tracker_id: string;
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
