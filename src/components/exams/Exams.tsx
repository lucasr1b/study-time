const Exams = () => {
  return (
    <div className='container flex flex-col h-70 w-full p-4 rounded-lg bg-white border-2 border-zinc-200 '>
      <h1 className='font-semibold mb-4'>Past papers</h1>
      <ul className='grid'>
        <li className='py-1 px-2 rounded hover:bg-zinc-200 hover:cursor-pointer'>💼 Bussiness Studies (0/144)</li>
        <li className='py-1 px-2 rounded hover:bg-zinc-200 hover:cursor-pointer'>🚀 Physics (0/144)</li>
        <li className='py-1 px-2 rounded hover:bg-zinc-200 hover:cursor-pointer'>📉 Maths (0/144)</li>
        <li className='py-1 px-2 rounded hover:bg-zinc-200 hover:cursor-pointer'>💻 Computer Science (0/144)</li>
        <li className='py-1 px-2 rounded hover:bg-zinc-200 hover:cursor-pointer'>📚 English (0/144)</li>
      </ul>
    </div>
  )
}

export default Exams;