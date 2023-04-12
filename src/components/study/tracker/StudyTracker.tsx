import { useEffect, useState } from 'react';
import SubjectTracker from './SubjectTracker';
import axios from 'axios';
import SetupStudyTrackerModal from '../../modal/SetupStudyTrackerModal';
import EditStudyTrackerModal from '../../modal/EditTrackerModal';

type StudyTrackerProps = {
  trackers: any;
  setTrackers: any;
}

const StudyTracker = (props: StudyTrackerProps) => {

  const [selectedTracker, setSelectedTracker] = useState({});
  const [isSetupModalOpen, setIsSetupModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openSetupModal = (tracker: any) => {
    setSelectedTracker(tracker)
    setIsSetupModalOpen(true)
  }

  const openEditModal = (tracker: any) => {
    setSelectedTracker(tracker)
    setIsEditModalOpen(true)
  }

  const closeModal = () => {
    setSelectedTracker({})
    setIsSetupModalOpen(false)
    setIsEditModalOpen(false)
  }

  const updateTrackers = (updatedTracker: any) => {
    props.setTrackers(props.trackers.map((tracker: any) =>
      tracker.tracker_id === updatedTracker.tracker_id
        ? { ...tracker, hours_allocated: updatedTracker.hours_allocated, is_setup: updatedTracker.is_setup }
        : tracker
    ));
  }

  return (
    <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
      <h1 className='font-semibold mb-4'>Study tracker</h1>
      <div className='grid grid-cols-3 grid-flow-row gap-6'>
        {props.trackers.map((tracker: any) => (
          <SubjectTracker tracker={tracker} key={tracker.tracker_id} openSetupModal={openSetupModal} openEditModal={openEditModal} />
        ))}
      </div>
      {isSetupModalOpen && <SetupStudyTrackerModal tracker={selectedTracker} closeModal={closeModal} updateTrackers={updateTrackers} />}
      {isEditModalOpen && <EditStudyTrackerModal tracker={selectedTracker} closeModal={closeModal} />}
    </div>
  )
}

export default StudyTracker;