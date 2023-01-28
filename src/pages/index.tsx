import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar/Sidebar'
import Subject from '../components/subjects/Subject'
import SubjectAdd from '../components/subjects/SubjectAdd'
import Exams from '../components/exams/Exams'

const Dashboard: NextPage = () => {
  return (
    <div className='container'>
      <Sidebar />
      <div className='p-4 ml-64'>
        <h1 className='text-4xl font-semibold'>Dashboard</h1>
        <div className='grid grid-cols-3 gap-4 mt-4'>
          <Subject name={'Business Studies'} />
          <Subject name={'Physics'} />
          <Subject name={'Maths'} />
          <Subject name={'Computer Science'} />
          <Subject name={'English'} />
          <SubjectAdd />
          <Exams />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
