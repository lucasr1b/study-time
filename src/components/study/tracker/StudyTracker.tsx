import { useEffect, useState } from 'react';
import SubjectTracker from './SubjectTracker';
import axios from 'axios';
import StudyTrackerModal from '../../modal/StudyTrackerModal';

const StudyTracker = () => {

  const [trackers, setTrackers] = useState<any[]>([]);
  const [selectedTracker, setSelectedTracker] = useState({});
  const [modalAction, setModalAction] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTrackers = async () => {
      await axios.get(`/api/study/trackers`)
        .then((res) => {
          setTrackers(res.data);
        })
    };
    fetchTrackers();
  }, []);

  const openModal = (tracker: any, action: string) => {
    setSelectedTracker(tracker)
    setModalAction(action)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedTracker({})
    setModalAction('')
    setIsModalOpen(false)
  }

  return (
    <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
      <h1 className='font-semibold mb-4'>Study tracker</h1>
      <div className='grid grid-cols-3 grid-flow-row gap-6'>
        {trackers.map(tracker => (
          <SubjectTracker tracker={tracker} key={tracker.tracker_id} openModal={openModal} />
        ))}
      </div>
      {isModalOpen && <StudyTrackerModal tracker={selectedTracker} closeModal={closeModal} action={modalAction} />}
    </div>
  )
}

export default StudyTracker;