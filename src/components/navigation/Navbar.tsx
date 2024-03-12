import Link from 'next/link';
import { logoutUser } from '../../utils/helpers';

type NavbarProps = {
  hideAuth?: boolean;
  showLogout?: boolean;
};

const Navbar = (props: NavbarProps) => {
  return (
    <nav className='flex w-full'>
      <Link href='/' className='text-3xl font-semibold'>Study Time</Link>
      {!props.hideAuth && (
        <div className='flex gap-4 ml-auto'>
          <Link href='/login' className='border border-accent rounded-lg py-2 px-4 w-fit font-medium hover:bg-accent hover:cursor-pointer'>Login</Link>
          <Link href='/register' className='border border-accent rounded-lg py-2 px-4 w-fit font-medium hover:bg-accent hover:cursor-pointer'>Sign up</Link>
        </div>
      )}
      {props.showLogout && (
        <div className='flex gap-4 ml-auto'>
          <div onClick={logoutUser} className='border border-accent rounded-lg py-2 px-4 w-fit font-medium hover:bg-accent hover:cursor-pointer'>Logout</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;