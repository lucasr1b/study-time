import { AcademicCapIcon, ClockIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <aside className='fixed top-0 left-0 z-40 w-64 h-full px-3 py-4 border-r bg-white border-zinc-200 overflow-y-auto'>
      <h1 className='text-3xl text-center font-semibold pt-4 pb-8'>Study Time</h1>
      <ul className='space-y-2'>
        <SidebarItem name='Dashboard' href='/app' icon={<Squares2X2Icon className='w-6 h-6' />} />
        <SidebarItem name='Subjects' href='/app/subjects' icon={<AcademicCapIcon className='w-6 h-6' />} />
        <SidebarItem name='Study Log' href='/app/study' icon={<ClockIcon className='w-6 h-6' />} />
      </ul>
    </aside >
  )
}

export default Sidebar;