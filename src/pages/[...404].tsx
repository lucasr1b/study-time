import Image from 'next/image';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-screen'>
      <Image src='/img/404.svg' alt='Not found' width={350} height={350} />
      <div className='flex flex-col items-center'>
        <h1 className='text-8xl font-semibold'>404</h1>
        <p className='text-text-secondary'>Page not found</p>
      </div>
    </div>
  );
};

export default NotFoundPage;