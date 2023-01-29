import type { NextPage } from 'next'
import Sidebar from '../components/sidebar/Sidebar'
import Subject from '../components/subjects/Subject'
import SubjectAdd from '../components/subjects/SubjectAdd'
import Exams from '../components/exams/Exams'
import Events from '../components/events/Events'
import { ArrowSmallLeftIcon, ArrowSmallRightIcon } from '@heroicons/react/24/solid'

const Dashboard: NextPage = () => {
  return (
    <div className='container w-full h-screen p-4'>
      <Sidebar />
      <div className='ml-72 h-full w-5/6'>
        <p className='text-4xl font-semibold mb-4'>Dashboard</p>
        <div className='flex flex-row gap-12 mt-2 h-full w-full'>
          <div className='flex flex-col gap-8 w-full h-full'>
            <div className='bg-white border-2 border-zinc-200 rounded-lg p-4'>
              <h1 className='font-semibold mb-4'>Subjects</h1>
              <div className='flex items-center gap-2 mb-2'>
                <button className='flex items-center justify-center w-6 h-6 rounded border-2 border-zinc-200 text-zinc-500 hover:bg-zinc-200'>
                  <ArrowSmallLeftIcon className='h-4 w-4' />
                </button>
                <span className='text-zinc-500'>This week</span>
                <button className='flex items-center justify-center w-6 h-6 rounded border-2 border-zinc-200 text-zinc-500 hover:bg-zinc-200'>
                  <ArrowSmallRightIcon className='h-4 w-4' />
                </button>
              </div>
              <div className='grid grid-rows-3 grid-flow-col gap-4'>
                <Subject icon={'💼'} name={'Business Studies'} />
                <Subject icon={'🚀'} name={'Physics'} />
                <Subject icon={'📉'} name={'Maths'} />
                <Subject icon={'💻'} name={'Computer Science'} />
                <Subject icon={'📚'} name={'English'} />
                <SubjectAdd />
              </div>
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
