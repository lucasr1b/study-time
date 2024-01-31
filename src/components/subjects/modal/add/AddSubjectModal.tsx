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
  const [examBoardLevel, setExamBoardLevel] = useState('');

  return (
    <>
      <div className='fixed z-40 flex items-center justify-center bg-modal-backdrop w-full h-full top-0 left-0' onClick={props.closeModal}></div>
      {!examBoardLevel ? (
        <AddSubjectModalSelectLevel setExamBoard={setExamBoard} setExamBoardLevel={setExamBoardLevel} />
      ) : (
        <AddSubjectModalSelectSubject closeModal={props.closeModal} subjects={props.subjects} setSubjects={props.setSubjects} examBoard={examBoard} examBoardLevel={examBoardLevel} />
      )}
    </>
  );
};

export default AddSubjectModal;


