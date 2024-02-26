type AddEventModalProps = {
  back: () => void;
};

const AddEventModal = (props: AddEventModalProps) => {
  return (
    <div className='fixed z-50 flex flex-col w-1/5 h-auto p-4 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary'>
      <h1 className='font-semibold'>Add a new event</h1>
      <div className='w-full'>
        <button type='button' className='bg-primary border border-accent rounded-md h-8 w-fit px-3 hover:bg-accent text-sm' onClick={props.back}>←</button>
      </div>
    </div >
  );
};

export default AddEventModal;