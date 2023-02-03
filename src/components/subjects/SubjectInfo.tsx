type SubjectInfoProps = {
  icon: string;
  name: string;
  description: string;
}

const SubjectInfo = (props: SubjectInfoProps) => {
  return (
    <div className='flex flex-col h-full w-full p-3 gap-1 rounded-lg bg-white border-2 border-zinc-200'>
      <p className='text-m font-medium text-black'>{props.icon} {props.name}</p>
      <p className='text-zinc-500'>{props.description}</p>
      <div className='flex gap-4 mt-1'>
        <button className='bg-white border-2 border-zinc-200 rounded-md h-8 px-3 hover:bg-zinc-200 text-sm font-medium'>Edit</button>
        <button className='bg-white border-2 border-zinc-200 rounded-md h-8 px-3 hover:bg-zinc-200 text-sm font-medium'>Remove</button>
      </div>
    </div>
  )
}

export default SubjectInfo;