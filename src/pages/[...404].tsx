import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col gap-8 justify-center items-center h-screen'>
      <Image src='/img/404.svg' alt='Not found' width={350} height={350} />
      <div className='flex flex-col items-center'>
        <h1 className='text-8xl font-semibold'>404</h1>
        <p>Page not found</p>
        <Link href='/' className='text-blue-600 mt-2 underline'>Go home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;