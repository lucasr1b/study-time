type SubjectProps = {
  icon: string;
  name: string;
}
const Subject = (props: SubjectProps) => {
  return (
    <div className='flex flex-col items-center justify-center h-32 w-full rounded-lg bg-white border-2 border-zinc-200'>
      <p className='text-2xl'>{props.icon}</p>
      <p className='text-m text-gray-400'>{props.name}</p>
      <p className='text-xl text-black font-semibold'>3/8 hours</p>
    </div>
  )
}

export default Subject;