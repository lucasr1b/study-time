import { formatEventDate } from '../../../utils/helpers';
import { Event, SetEvent } from '../../../utils/types';
import EventAddButton from './EventAddButton';

type ManageEventsModalProps = {
  closeModal: () => void;
  events: Event[];
  setSelectedEvent: SetEvent;
};

const ManageEventsModal = (props: ManageEventsModalProps) => {

  return (
    <>
      <div className='fixed z-40 flex items-center justify-center bg-modal-backdrop w-full h-full top-0 left-0' onClick={props.closeModal}></div>
      <div className='fixed z-50 flex flex-col w-1/5 h-auto p-4 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary'>
        <h1 className='font-semibold'>Manage Events</h1>
        <div className='w-full'>
          <ul className='bg-primary border border-accent rounded-lg mt-2 overflow-y-scroll h-64'>
            <EventAddButton />
            {props.events.map((event: Event) => (
              <li key={event._id} className='h-14 w-full p-2 hover:bg-accent hover:cursor-pointer' onClick={() => props.setSelectedEvent(event)}>
                <p className='font-medium'>{event.title}</p>
                <p className='text-xs text-text-secondary'>{formatEventDate(event.date)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );

};

export default ManageEventsModal;