import { ArrowSmallLeftIcon, ArrowSmallRightIcon } from '@heroicons/react/24/outline';

const SubjectPagination = () => {
  return (
    <div className='flex items-center gap-2 my-4'>
      <button className='flex items-center justify-center w-6 h-6 rounded border-2 border-zinc-200 text-zinc-500 hover:bg-zinc-200'>
        <ArrowSmallLeftIcon className='h-4 w-4' />
      </button>
      <span className='text-zinc-500'>This week</span>
      <button className='flex items-center justify-center w-6 h-6 rounded border-2 border-zinc-200 text-zinc-500 hover:bg-zinc-200'>
        <ArrowSmallRightIcon className='h-4 w-4' />
      </button>
    </div>
  )
}

export default SubjectPagination;