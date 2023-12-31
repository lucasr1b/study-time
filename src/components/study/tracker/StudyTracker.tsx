import { useState } from 'react';
import SubjectStudyTracker from './SubjectStudyTracker';
import SetupStudyTrackerModal from '../modal/SetupStudyTrackerModal';
import EditStudyTrackerModal from '../modal/EditStudyTrackerModal';

type StudyTrackerProps = {
  trackers: any;
  setTrackers: any;
};

const StudyTracker = (props: StudyTrackerProps) => {
  const [selectedTracker, setSelectedTracker] = useState({});
  const [isSetupModalOpen, setIsSetupModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openSetupModal = (tracker: any) => {
    setSelectedTracker(tracker);
    setIsSetupModalOpen(true);
  };

  const openEditModal = (tracker: any) => {
    setSelectedTracker(tracker);
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTracker({});
    setIsSetupModalOpen(false);
    setIsEditModalOpen(false);
  };

  const updateTrackers = (updatedTracker: any) => {
    props.setTrackers((prevTrackers: any) =>
      prevTrackers.map((tracker: any) =>
        tracker.tracker_id === updatedTracker.tracker_id
          ? { ...tracker, time_allocated: updatedTracker.time_allocated, is_setup: updatedTracker.is_setup }
          : tracker,
      ),
    );
  };

  return (
    <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
      <h1 className='font-semibold mb-4'>Study tracker</h1>
      <div className='grid grid-cols-3 grid-flow-row gap-6'>
        {props.trackers.map((tracker: any) => (
          <SubjectStudyTracker tracker={tracker} key={tracker.tracker_id} openSetupModal={openSetupModal} openEditModal={openEditModal} />
        ))}
      </div>
      {isSetupModalOpen && <SetupStudyTrackerModal tracker={selectedTracker} closeModal={closeModal} updateTrackers={updateTrackers} />}
      {isEditModalOpen && <EditStudyTrackerModal tracker={selectedTracker} closeModal={closeModal} updateTrackers={updateTrackers} />}
    </div>
  );
};

export default StudyTracker;