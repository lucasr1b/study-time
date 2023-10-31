import type { NextPage } from 'next';
import Sidebar from '../../components/sidebar/Sidebar';
import PastPaper from '../../components/assessments/PastPaper';
import UpcomingTest from '../../components/assessments/AssessmentItem';
import AddUpcomingTest from '../../components/assessments/AddAssessment';

const Assessments: NextPage = () => {

  return (
    <div className='container h-screen'>
      <Sidebar />
      <div className='ml-72 h-full w-5/6 p-4 mb-2'>
        <p className='text-4xl font-semibold mb-4'>Assessments</p>
        <div className='flex flex-col gap-12 mt-2 w-full pb-10'>
          <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
            <h1 className='font-semibold mb-4'>Past papers</h1>
            <div className='grid grid-flow-row grid-cols-3 gap-4 pb-4'>
              <PastPaper />
              <PastPaper />
              <PastPaper />
              <PastPaper />
            </div>
          </div>
          <div className='bg-white border border-zinc-200 rounded-lg p-4 w-full'>
            <h1 className='font-semibold mb-4'>Upcoming assessments</h1>
            <div className='grid grid-flow-row grid-cols-3 gap-4 auto-cols-min pb-4'>
              <UpcomingTest text={'Linear graphing, graphs and functions'} />
              <UpcomingTest text={'Linear graphing, graphs and functions and trigonometry'} />
              <UpcomingTest text={'Background checking and sets'} />
              <AddUpcomingTest />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessments;
