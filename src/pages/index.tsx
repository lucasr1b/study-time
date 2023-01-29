import type { NextPage } from 'next'
import Sidebar from '../components/sidebar/Sidebar'
import Subject from '../components/subjects/Subject'
import SubjectAdd from '../components/subjects/SubjectAdd'
import Exams from '../components/exams/Exams'
import Events from '../components/events/Events'
import { ArrowSmallLeftIcon, ArrowSmallRightIcon } from '@heroicons/react/24/solid'

const Dashboard: NextPage = () => {
  return (
    <div className='container w-full'>
      <Sidebar />
      <div className='p-4 ml-72 h-full w-2/4'>
        <p className='text-4xl font-semibold mb-4'>Dashboard</p>
        <div className='flex items-center gap-1'>
          <button className='flex items-center justify-center w-6 h-6 rounded text-zinc-500 hover:bg-zinc-200'>
            <ArrowSmallLeftIcon className='h-5 w-5' />
          </button>
          <span className='text-zinc-500'>This week</span>
          <button className='flex items-center justify-center w-6 h-6 rounded text-zinc-500 hover:bg-zinc-200'>
            <ArrowSmallRightIcon className='h-5 w-5' />
          </button>
        </div>
        <div className='flex flex-row items-center h-full w-full mt-2'>
          <div className='flex flex-col gap-12 w-full'>
            <div className='grid grid-rows-3 grid-flow-col gap-4'>
              <Subject icon={'💼'} name={'Business Studies'} />
              <Subject icon={'🚀'} name={'Physics'} />
              <Subject icon={'📉'} name={'Maths'} />
              <Subject icon={'💻'} name={'Computer Science'} />
              <Subject icon={'📚'} name={'English'} />
              <SubjectAdd />
            </div>
            <Exams />
          </div>
          <Events />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
