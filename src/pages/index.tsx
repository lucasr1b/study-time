import type { NextPage } from 'next'
import Sidebar from '../components/sidebar/Sidebar'
import SubjectOverview from '../components/subjects/SubjectOverview'
import SubjectOverviewAdd from '../components/subjects/SubjectOverviewAdd'
import Exams from '../components/exams/Exams'
import Events from '../components/events/Events'
import SubjectOverviewPagination from '../components/pagination/SubjectOverviewPagination'
import Tests from '../components/tests/Tests'

const Dashboard: NextPage = () => {
  return (
    <div className='container h-screen'>
      <Sidebar />
      <div className='ml-72 h-full w-5/6 p-4 mb-2'>
        <p className='text-4xl font-semibold mb-4'>Dashboard</p>
        <div className='flex flex-row gap-12 mt-2 w-full min-h-full pb-10'>
          <div className='flex flex-col gap-8 w-full'>
            <div className='bg-white border border-zinc-200 rounded-lg p-4'>
              <h1 className='font-semibold mb-4'>Subjects</h1>
              <SubjectOverviewPagination />
              <div className='grid grid-rows-3 grid-flow-col gap-4'>
                <SubjectOverview icon={'💼'} name={'Business Studies'} progress={1} total={2} />
                <SubjectOverview icon={'🚀'} name={'Physics'} progress={2} total={6} />
                <SubjectOverview icon={'📉'} name={'Maths'} progress={3} total={8} />
                <SubjectOverview icon={'💻'} name={'Computer Science'} progress={3} total={4} />
                <SubjectOverview icon={'📚'} name={'English'} progress={1} total={2} />
                <SubjectOverviewAdd />
              </div>
            </div>
            <Exams />
          </div>
          <div className='flex flex-col w-4/5 h-auto gap-8 flex-grow'>
            <Tests />
            <Events />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
