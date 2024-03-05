import Image from 'next/image';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className='px-8 py-4 h-screen'>
      <div className='flex w-full'>
        <Link href='/' className='text-3xl font-semibold'>Study Time</Link>
        <div className='flex gap-4 ml-auto'>
          <Link href='/login' className='border border-accent rounded-lg py-2 px-3 w-fit font-medium hover:bg-accent hover:cursor-pointer'>Login</Link>
          <Link href='/register' className='border border-accent rounded-lg py-2 px-3 w-fit font-medium hover:bg-accent hover:cursor-pointer'>Sign up</Link>
        </div>
      </div >
      <div className='flex items-center h-full w-full'>
        <div className='flex items-center justify-around w-full'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-6xl font-semibold'>Track your learning!</h1>
            <p className='text-xl text-text-secondary max-w-2xl'>Ascend your grades by managing and tracking your learning. A study platform to keep  your studying organised all-in-one-place. </p>
            <Link href='/register' className='bg-primary border border-accent rounded-lg py-2 px-3 w-fit font-medium hover:bg-accent text-lg'>Get Started For Free</Link>
          </div>
          <Image src='/img/landing.svg' alt='Landing' width={500} height={500} />
        </div>
      </div >
    </div >
  );
};

export default LandingPage;