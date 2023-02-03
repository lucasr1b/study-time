import { PlusIcon } from '@heroicons/react/24/outline';

const SubjectInfoAdd = () => {
  return (
    <div className='flex items-center justify-center min-h-40 w-full rounded-lg bg-white border border-zinc-200 hover:bg-zinc-200 hover:cursor-pointer'>
      <p className='text-zinc-500 '><PlusIcon className='w-6 h-6' /></p>
    </div>
  )
}

export default SubjectInfoAdd;