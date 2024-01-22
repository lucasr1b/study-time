export type Subject = {
  subject_id: string;
  subject_name: string;
  subject_curriculum: string;
  subject_level: string;
  subject_icon: string;
};

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
