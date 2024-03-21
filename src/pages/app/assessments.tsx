import type { NextPage } from 'next';
import Sidebar from '../../components/navigation/sidebar/Sidebar';
import AssessmentsList from '../../components/assessments/AssessmentsList';
import AssessmentPastPapers from '../../components/assessments/papers/AsessmentPastPapers';
import Head from 'next/head';

const AssessmentsPage: NextPage = () => {
  return (
    <div className='container h-screen'>
      <Head>
        <title>Assessments</title>
      </Head>
      <Sidebar />
      <div className='ml-72 h-full w-5/6 p-4 mb-2'>
        <p className='text-4xl font-semibold mb-4'>Assessments</p>
        <div className='flex flex-col gap-12 mt-2 w-full pb-10'>
          <AssessmentsList />
          <AssessmentPastPapers />
        </div>
      </div>
    </div>
  );
};

export default AssessmentsPage;
