import React, { useState } from 'react';
import StudyTrackerItem from './StudyTrackerItem';
import SetupStudyTrackerModal from '../modal/SetupStudyTrackerModal';
import EditStudyTrackerModal from '../modal/EditStudyTrackerModal';
import { SetTrackers, Tracker } from '../../../utils/types';
import StudyTrackerSkeleton from './StudyTrackerItemSkeleton';

type StudyTrackerProps = {
  trackers: Tracker[];
  setTrackers: SetTrackers;
  isLoading: boolean;
};

const StudyTracker = (props: StudyTrackerProps) => {
  const [selectedTracker, setSelectedTracker] = useState<Tracker>({} as Tracker);
  const [isSetupModalOpen, setIsSetupModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openSetupModal = (tracker: Tracker) => {
    setSelectedTracker(tracker);
    setIsSetupModalOpen(true);
  };

  const openEditModal = (tracker: Tracker) => {
    setSelectedTracker(tracker);
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTracker({} as Tracker);
    setIsSetupModalOpen(false);
    setIsEditModalOpen(false);
  };

  const updateTrackers = (updatedTracker: Tracker) => {
    props.setTrackers((prevTrackers: Tracker[]) => {
      const updatedTrackers = prevTrackers.map((tracker: Tracker) =>
        tracker._id === updatedTracker._id
          ? { ...tracker, time_allocated: updatedTracker.time_allocated, is_setup: updatedTracker.is_setup }
          : tracker);
      updatedTrackers.sort((trackerA, trackerB) => trackerA.is_setup === trackerB.is_setup ? 0 : trackerA.is_setup ? -1 : 1);
      return updatedTrackers;
    });
  };

  return (
    <div className='bg-primary border border-accent rounded-lg p-4 w-full'>
      <h1 className='font-semibold mb-4'>Study trackers</h1>
      <div className='grid grid-cols-3 grid-flow-row gap-6'>
        {props.isLoading ? (
          [...Array(4)].map((x, i) => (
            <StudyTrackerSkeleton key={i} />
          ))
        ) : (
          props.trackers.map((tracker: Tracker) => (
            <StudyTrackerItem tracker={tracker} key={tracker._id} openSetupModal={openSetupModal} openEditModal={openEditModal} />
          ))
        )}
      </div>
      {isSetupModalOpen && <SetupStudyTrackerModal tracker={selectedTracker} closeModal={closeModal} updateTrackers={updateTrackers} />}
      {isEditModalOpen && <EditStudyTrackerModal tracker={selectedTracker} closeModal={closeModal} updateTrackers={updateTrackers} />}
    </div>
  );
};

export default StudyTracker;