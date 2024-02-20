type ManageEventsModalProps = {
  closeModal: () => void;
  selectedEvent: any;
};

const UpdateEventModal = (props: ManageEventsModalProps) => {
  return (
    <>
      <div className='fixed z-40 flex items-center justify-center bg-modal-backdrop w-full h-full top-0 left-0' onClick={props.closeModal}></div>
      <div className='fixed z-50 flex flex-col w-1/5 h-auto p-4 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary'>
        <h1 className='font-semibold'>{props.selectedEvent.title}</h1>
        <div>
          <h1>Editing event</h1>
        </div>
      </div>
    </>
  );
};

export default UpdateEventModal;