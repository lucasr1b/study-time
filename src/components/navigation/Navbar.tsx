import Link from 'next/link';
import { logoutUser } from '../../utils/helpers';

type NavbarProps = {
  hideAuth?: boolean;
  showLogout?: boolean;
  isLoggedIn?: boolean;
};

const Navbar = (props: NavbarProps) => {
  return (
    <nav className='flex w-full'>
      <Link href='/' className='text-3xl font-semibold'>
        Study Time
      </Link>
      <div className='flex gap-4 ml-auto'>
        {!props.hideAuth && !props.isLoggedIn && (
          <>
            <Link href='/login' className='border border-accent rounded-lg py-2 px-4 w-fit font-medium hover:bg-accent hover:cursor-pointer'>Login</Link>
            <Link href='/register' className='border border-accent rounded-lg py-2 px-4 w-fit font-medium hover:bg-accent hover:cursor-pointer'>Sign up</Link>
          </>
        )}
        {(props.showLogout || props.isLoggedIn) && (
          <>
            {props.isLoggedIn && (
              <Link href='/app' className='border border-accent rounded-lg py-2 px-4 w-fit font-medium hover:bg-accent hover:cursor-pointer'>Open App</Link>
            )}
            {props.showLogout && (
              <div onClick={logoutUser} className='border border-accent rounded-lg py-2 px-4 w-fit font-medium hover:bg-accent hover:cursor-pointer'>Logout</div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;