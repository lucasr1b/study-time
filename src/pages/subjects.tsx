import { NextPage } from 'next';
import Sidebar from '../components/sidebar/Sidebar';

const Subjects: NextPage = () => {
  return (
    <div className='container'>
      <Sidebar />
      <div className="p-4 ml-64">
        <h1>Subjects</h1>
      </div>
    </div>
  )
}

export default Subjects;