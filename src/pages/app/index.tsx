import type { NextPage } from 'next';
import Sidebar from '../../components/navigation/sidebar/Sidebar';
import AssessmentOverview from '../../components/dashboard/assessments/AssessmentOverview';
import PastPaperOverview from '../../components/dashboard/papers/PastPaperOverview';
import EventList from '../../components/dashboard/events/EventList';
import StudyOverview from '../../components/dashboard/study/StudyOverview';

const DashboardPage: NextPage = () => {
  return (
    <div className='container h-screen'>
      <Sidebar />
      <div className='ml-72 h-full w-5/6 p-4 mb-2'>
        <p className='text-4xl font-semibold mb-4'>Dashboard</p>
        <div className='flex flex-row gap-12 mt-2 w-full min-h-full pb-10'>
          <div className='flex flex-col gap-8 w-full'>
            <StudyOverview />
            <PastPaperOverview />
          </div>
          <div className='flex flex-col w-4/5 h-auto gap-8 flex-grow'>
            <AssessmentOverview />
            <EventList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
