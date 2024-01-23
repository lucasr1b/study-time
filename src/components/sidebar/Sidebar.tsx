import { AcademicCapIcon, ArrowLeftOnRectangleIcon, ClockIcon, Cog6ToothIcon, DocumentTextIcon, MoonIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import SidebarItem from './SidebarItem';
import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';

const Sidebar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const logoutUser = async () => {
    try {
      await axios.post('/api/auth/logout');
      Router.push('/');
    } catch (err: any) {
      console.error('Error during login:', err.response.data.error);
    }
  };

  return (
    <aside className='fixed top-0 left-0 z-40 w-64 h-full px-3 py-4 border-r bg-white border-zinc-200 overflow-y-auto flex flex-col'>
      <div className='flex-1'>
        <h1 className='text-3xl text-center font-semibold pt-4 pb-8'>Study Time</h1>
        <ul className='space-y-2'>
          <SidebarItem name='Dashboard' href='/app' icon={<Squares2X2Icon className='w-6 h-6' />} />
          <SidebarItem name='Subjects' href='/app/subjects' icon={<AcademicCapIcon className='w-6 h-6' />} />
          <SidebarItem name='Study' href='/app/study' icon={<ClockIcon className='w-6 h-6' />} />
          <SidebarItem name='Assessments' href='/app/assessments' icon={<DocumentTextIcon className='w-6 h-6' />} />
        </ul>
      </div>
      {isDropdownOpen && (
        <div className='top-full right-0 mb-2 bg-white border border-zinc-200 p-2 rounded-md shadow'>
          <div className='flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-zinc-100'>
            <MoonIcon className='w-5 h-5' />
            Dark Mode
          </div>
          <div className='flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-zinc-100'
            onClick={logoutUser}>
            <ArrowLeftOnRectangleIcon className='w-5 h-5' />
            Logout
          </div>
        </div>
      )}
      <div className='border border-zinc-200 p-3 rounded-md mb-2 cursor-pointer hover:bg-zinc-200'
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <span className='flex gap-2'><Cog6ToothIcon className='w-6 h-6' />
          Settings
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;