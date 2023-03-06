import Sidebar from '../../components/sidebar/Sidebar';
import StudyTracker from '../../components/study/tracker/StudyTracker';
import WeeklyProgress from '../../components/study/WeeklyProgess';

const Study = () => {
  return (
    <div className='container h-screen'>
      <Sidebar />
      <div className='ml-72 h-full w-5/6 p-4 mb-2'>
        <p className='text-4xl font-semibold mb-4'>Study Log</p>
        <div className='flex flex-col gap-12 mt-2 w-full pb-10'>
          <WeeklyProgress />
          <StudyTracker />
        </div>
      </div>
    </div>
  )
}

export default Study;