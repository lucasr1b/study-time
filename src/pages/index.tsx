import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navigation/Navbar';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from '../lib/session';
import Head from 'next/head';

type LandingPageProps = {
  isLoggedIn: boolean;
};

const LandingPage = ({ isLoggedIn }: LandingPageProps) => {
  return (
    <div className='px-8 py-4 h-screen'>
      <Head>
        <title>Study Time</title>
      </Head>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className='flex items-center h-full w-full'>
        <div className='flex items-center justify-around w-full'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-6xl font-semibold'>Track your studying!</h1>
            <p className='text-xl text-text-secondary max-w-2xl'>Ascend your grades by managing and tracking your studying. A study platform to keep your studying organised all-in-one-place. </p>
            {isLoggedIn ? (
              <Link href='/app' className='bg-primary border border-accent rounded-lg py-2 px-4 w-fit font-medium hover:bg-accent text-lg'>Go to Dashboard</Link>
            ) : (
              <Link href='/register' className='bg-primary border border-accent rounded-lg py-2 px-4 w-fit font-medium hover:bg-accent text-lg'>Get Started For Free</Link>
            )}
          </div>
          <Image src='/img/landing.svg' alt='Landing' width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

export const getServerSideProps = withIronSessionSsr(
  async ({ req }) => {
    const user = req.session.user;

    if (user) {
      return {
        props: {
          isLoggedIn: true,
        },
      };
    }

    return {
      props: {
        isLoggedIn: false,
      },
    };
  }, sessionOptions,
);