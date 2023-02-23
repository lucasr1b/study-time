import Sidebar from '../../components/sidebar/Sidebar';

const Study = () => {
  return (
    <div className='container h-screen'>
      <Sidebar />
      <div className='ml-72 h-full w-5/6 p-4 mb-2'>
        <p className='text-4xl font-semibold mb-4'>Study Log</p>
      </div>
    </div>
  )
}

export default Study;