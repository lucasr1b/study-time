import Assessment from '../models/Assessment';
import { Subject } from '../utils/types';

export const createAssessment = async (subject: Subject, date: Date, description: string, _id: string) => {

  const newAssessment = await Assessment.create({
    user: _id,
    subject_id: subject.subject_id,
    subject_name: subject.subject_name,
    subject_icon: subject.subject_icon,
    description,
    date,
  });

  return newAssessment;
};

export const editAssessment = async (assessmentId: string, date: Date, description: string) => {
  await Assessment.findOneAndUpdate({ _id: assessmentId }, { $set: { date, description } });
  const updatedAssessment = await Assessment.findOne({ _id: assessmentId });
  return updatedAssessment;
};

export const deleteAssessment = async (assessmentId: string) => {
  await Assessment.findOneAndDelete({ _id: assessmentId });
};