import { useState } from 'react';
import { SetTrackers, Tracker } from '../../../utils/types';
import SetupStudyTrackerModal from '../../study/modal/SetupStudyTrackerModal';

type StudyOverviewItemSetupProps = {
  tracker: Tracker;
  setTrackers: SetTrackers;
};

const StudyOverviewItemSetup = (props: StudyOverviewItemSetupProps) => {

  const [isSetupModalOpen, setIsSetupModalOpen] = useState(false);

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
    <>
      <div className='flex flex-col items-center justify-center h-32 w-full p-8 rounded-lg bg-primary border border-accent'>
        <p className='text-2xl'>{props.tracker.subject_icon}</p>
        <p className='text-m text-text font-medium'>{props.tracker.subject_name}</p>
        <div className='flex gap-4 mt-1'>
          <button className='bg-primary border border-accent rounded-md h-8 px-3 hover:bg-accent text-sm' onClick={() => setIsSetupModalOpen(true)}>Setup study tracker</button>
        </div>
      </div>
      {isSetupModalOpen && <SetupStudyTrackerModal tracker={props.tracker} closeModal={() => setIsSetupModalOpen(false)} updateTrackers={updateTrackers} />}
    </>
  );
};

export default StudyOverviewItemSetup;