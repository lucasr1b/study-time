const UpcomingTest = (props: any) => {
  return (
    <div>
      <div className='flex flex-col border border-zinc-200 rounded-lg p-2 h-full'>
        <div className='flex items-center'>
          <p className='font-medium'>📉 Mathematics</p>
          <div className='text-sm w-fit rounded-md ml-auto text-zinc-500'>12/12/21</div>
        </div>
        <p className='font-normal text-sm py-1'>{props.text}</p>
        <div className='flex gap-4 py-1 mt-auto'>
          <button className='bg-white border border-zinc-200 rounded-md h-8 px-3 hover:bg-zinc-200 text-sm'>Edit</button>
          <button className='bg-white border border-zinc-200 rounded-md h-8 px-3 hover:bg-zinc-200 text-sm'>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTest;