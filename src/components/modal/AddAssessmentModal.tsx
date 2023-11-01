import DateSelector from '../date/DateSelector';

type AddAssessmentModalProps = {
  closeModal: () => void;
};

const AddAssessmentModal = (props: AddAssessmentModalProps) => {
  return (
    <>
      <div className='fixed z-40 flex items-center justify-center bg-black opacity-20 w-full h-full top-0 left-0' onClick={props.closeModal}></div>
      <div className='fixed z-50 flex flex-col w-1/5 h-auto p-4 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white'>
        <h1 className='font-semibold'>Add new assessment</h1>
        <form className='flex flex-row items-baseline space-y-4 gap-4 h-full'>
          <div className='mt-2 flex flex-col gap-4 w-full'>
            <div className='inline-flex border rounded-md p-2'>
              <select className='outline-none w-full'>
                <option>📉 Mathematics</option>
                <option>💼 Business Studies</option>
                <option>🚀 Physics</option>
              </select>
            </div>
            <DateSelector />
            <div className='inline-flex border rounded-md p-2'>
              <textarea placeholder='Description (optional)' className='resize-none outline-none' />
            </div>
            <div className='flex gap-2 mt-2'>
              <button className='bg-white border border-zinc-200 rounded-md h-8 w-fit px-3 hover:bg-zinc-200 text-sm' onClick={props.closeModal}>Cancel</button>
              <button className='bg-white border border-zinc-200 rounded-md h-8 w-fit px-3 hover:bg-zinc-200 text-sm'>Save</button>
            </div>
          </div>
        </form >
      </div >
    </>
  );
};

export default AddAssessmentModal;