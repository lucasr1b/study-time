import { useEffect, useState } from 'react';
import ManageEventsModal from './ManageEventsModal';
import UpdateEventModal from './UpdateEventModal';
import axios from 'axios';
import { Event } from '../../../utils/types';
import { formatEventDate } from '../../../utils/helpers';

const EventList = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event>();
  const [events, setEvents] = useState<Event[]>([]);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(undefined);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await axios.get('/api/events');
        setEvents(fetchedEvents.data.events);
      } catch (err: any) {
        console.error('Error fetching events:', err.response.data.error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <aside className='w-full h-1/2 p-4 border rounded-lg border-accent bg-primary'>
      <h1 className='font-semibold'>Upcoming events</h1>
      <p className='text-blue-600 cursor-pointer hover:underline' onClick={() => setIsModalOpen(true)}>Manage events</p>
      <ul className='flex flex-col gap-2 mt-4'>
        {events.map((event: Event) => (
          <li key={event._id} className='flex gap-2'>
            <span className='font-medium'>{formatEventDate(event.date)}</span>
            <p>{event.title}</p>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <>
          <div className='fixed z-40 flex items-center justify-center bg-modal-backdrop w-full h-full top-0 left-0' onClick={closeModal}></div>
          {!selectedEvent ? (
            <ManageEventsModal closeModal={closeModal} events={events} setSelectedEvent={setSelectedEvent} />
          ) : (
            <UpdateEventModal closeModal={closeModal} setSelectedEvent={setSelectedEvent} selectedEvent={selectedEvent} />
          )}
        </>
      )}
    </aside>
  );
};

export default EventList;