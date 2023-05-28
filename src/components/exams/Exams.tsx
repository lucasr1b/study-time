import ExamSubject from './ExamSubject';

const Exams = () => {
  return (
    <div className='container flex flex-col h-full w-full p-4 rounded-lg bg-white border border-zinc-200'>
      <h1 className='font-semibold mb-4'>Past papers</h1>
      <ul className='grid'>
        <ExamSubject icon='💼' name='Bussiness Studies' progress={0} total={144} />
        <ExamSubject icon='💻' name='Computer Science' progress={0} total={144} />
        <ExamSubject icon='🚀' name='Physics' progress={0} total={144} />
        <ExamSubject icon='📚' name='English' progress={0} total={144} />
        <ExamSubject icon='📉' name='Maths' progress={0} total={144} />
      </ul>
    </div>
  );
};

export default Exams;