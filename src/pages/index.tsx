import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar/Sidebar'

const Dashboard: NextPage = () => {
  return (
    <div className='container'>
      <Sidebar />
      <div className="p-4 ml-64">
        <h1>Dashboard</h1>
      </div>
    </div>
  )
}

export default Dashboard;
