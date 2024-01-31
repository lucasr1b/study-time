import { useState } from 'react';
import { SetSubjects, Subject } from '../../../../utils/types';
import AddSubjectModalSelectLevel from './AddSubjectModalSelectLevel';
import AddSubjectModalSelectSubject from './AddSubjectModalSelectSubject';

type AddSubjectModalProps = {
  closeModal: () => void;
  subjects: Subject[];
  setSubjects: SetSubjects;
};

const AddSubjectModal = (props: AddSubjectModalProps) => {

  const [examBoard, setExamBoard] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  return (
    <>
      <div className='fixed z-40 flex items-center justify-center bg-modal-backdrop w-full h-full top-0 left-0' onClick={props.closeModal}></div>
      {!selectedLevel ? (
        <AddSubjectModalSelectLevel setExamBoard={setExamBoard} setSelectedLevel={setSelectedLevel} />
      ) : (
        <AddSubjectModalSelectSubject closeModal={props.closeModal} subjects={props.subjects} setSubjects={props.setSubjects} />
      )}
    </>
  );
};

export default AddSubjectModal;


