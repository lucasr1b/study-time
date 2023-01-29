type SubjectProps = {
  icon: string;
  name: string;
}
const Subject = (props: SubjectProps) => {
  return (
    <div className='flex flex-col items-center justify-center h-32 w-full p-8 rounded-lg bg-white border-2 border-zinc-200'>
      <p className='text-2xl'>{props.icon}</p>
      <p className='text-m text-zinc-500'>{props.name}</p>
      <div className='mb-1 font-medium'>3/8 hours</div>
      <div className='w-full bg-gray-200 rounded-full h-1.5 mb-4'>
        <div className='bg-blue-600 h-1.5 rounded-full' style={{ width: '45%' }}></div>
      </div>
    </div>
  )
}

export default Subject;