import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const SubjectOverviewAdd = () => {
  return (
    <Link href='app/study' className='flex flex-col items-center justify-center h-32 w-full p-8 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-200 hover:cursor-pointer'>
      <p className='text-zinc-500 '><PlusIcon className='w-6 h-6' /></p>
    </Link>
  );
};

export default SubjectOverviewAdd;