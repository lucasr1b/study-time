type SubjectProps = {
  name: string;
}
const Subject = (props: SubjectProps) => {
  return (
    <div className='flex items-center justify-center h-32 w-full rounded-lg bg-white border-2 border-zinc-200'>
      <p className='text-xl text-gray-400 dark:text-gray-500'>{props.name}</p>
    </div>
  )
}

export default Subject;