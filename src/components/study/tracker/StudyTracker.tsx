import { useEffect, useState } from 'react';
import SubjectTracker from './SubjectTracker';
import axios from 'axios';
import SetupStudyTrackerModal from '../../modal/SetupStudyTrackerModal';
import EditStudyTrackerModal from '../../modal/EditTrackerModal';

const StudyTracker = () => {

  const [trackers, setTrackers] = useState<any[]>([]);
  const [selectedTracker, setSelectedTracker] = useState({});
  const [isSetupModalOpen, setIsSetupModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const fetchTrackers = async () => {
      await axios.get(`/api/study/trackers`)
        .then((res) => {
          setTrackers(res.data);
        })
    };
    fetchTrackers();
  }, []);

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

  return (
    <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
      <h1 className='font-semibold mb-4'>Study tracker</h1>
      <div className='grid grid-cols-3 grid-flow-row gap-6'>
        {trackers.map(tracker => (
          <SubjectTracker tracker={tracker} key={tracker.tracker_id} openSetupModal={openSetupModal} openEditModal={openEditModal} />
        ))}
      </div>
      {isSetupModalOpen && <SetupStudyTrackerModal tracker={selectedTracker} closeModal={closeModal} />}
      {isEditModalOpen && <EditStudyTrackerModal tracker={selectedTracker} closeModal={closeModal} />}
    </div>
  )
}

export default StudyTracker;