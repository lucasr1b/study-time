import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className='fixed top-0 left-0 z-40 w-64 h-screen px-3 py-4 border-r-2 bg-white border-zinc-200 overflow-y-auto'>
      <h1 className='text-3xl text-center font-semibold pt-4 pb-8'>Study Time</h1>
      <ul className='space-y-2'>
        <li>
          <Link href='/' className={`flex items-center p-2.5 text-base font-normal rounded-lg ${router.pathname == '/' ? 'bg-zinc-200 font-medium' : 'hover:bg-zinc-200 '}`}>
            <span className='ml-3'>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href='/subjects' className={`flex items-center p-2.5 text-base font-normal rounded-lg ${router.pathname == '/subjects' ? 'bg-zinc-200 font-medium' : 'hover:bg-zinc-200 '}`}>
            <span className='ml-3'>Subjects</span>
          </Link>
        </li>
      </ul>
    </aside >
  )
}

export default Sidebar;