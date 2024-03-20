
import { useEffect, useState } from 'react';
import ManageEventsModal from './ManageEventsModal';
import UpdateEventModal from './UpdateEventModal';
import axios from 'axios';
import { Event } from '../../../utils/types';
import AddEventModal from './AddEventModal';
import EventListItem from './EventListItem';
import EventListItemSkeleton from './EventListItemSkeleton';

const EventList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | undefined>();
  const [eventModalAction, setEventModalAction] = useState('');
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(undefined);
    setEventModalAction('');
  };

  const goBack = () => {
    setSelectedEvent(undefined);
    setEventModalAction('');
  };

  const addEvent = async (title: string, date: Date) => {
    try {
      const res = await axios.post('/api/events/add', { title, date });
      const newEvent = res.data.newEvent;
      const updatedEvents = [...events, newEvent].sort((eventA: Event, eventB: Event) => new Date(eventA.date).getTime() - new Date(eventB.date).getTime());
      setEvents(updatedEvents);
      closeModal();
    } catch (err: any) {
      console.error('Error adding event:', err.response.data.error);
    }
  };

  const deleteEvent = async (id: string) => {
    try {
      await axios.post('/api/events/delete', { id });
      const updatedEvents = events.filter((event: Event) => event._id !== id);
      setEvents(updatedEvents);
      closeModal();
    } catch (err: any) {
      console.error('Error deleting event:', err.response.data.error);
    }
  };

  const updateEvent = async (id: string, title: string, date: Date) => {
    try {
      const res = await axios.post('/api/events/update', { id, title, date });
      const updatedEvent = res.data.updatedEvent;
      const updatedEvents = events.map((event: Event) => event._id === id ? updatedEvent : event).sort((eventA: Event, eventB: Event) => new Date(eventA.date).getTime() - new Date(eventB.date).getTime());
      setEvents(updatedEvents);
      closeModal();
    } catch (err: any) {
      console.error('Error updating event:', err.response.data.error);
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await axios.get('/api/events');
        setEvents(fetchedEvents.data.events);
      } catch (err: any) {
        console.error('Error fetching events:', err.response.data.error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <aside className='w-full h-1/2 p-4 border rounded-lg border-accent bg-primary'>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold'>Upcoming events</h1>
        <button className='bg-primary border border-accent rounded-md h-8 px-3 hover:bg-accent text-sm' onClick={() => setIsModalOpen(true)}>
          Manage events
        </button>
      </div>
      <ul className='flex flex-col gap-2 mt-2'>
        {isLoading ? (
          [...Array(6)].map((x, i) => (
            <EventListItemSkeleton key={i} />
          ))
        ) : (
          <>
            {events.length === 0 && <p className='italic'>No upcoming events.</p>}
            {events.map((event: Event) => (
              <EventListItem key={event._id} event={event} />
            ))}
          </>
        )}
      </ul>
      {
        isModalOpen && (
          <>
            <div className='fixed z-40 flex items-center justify-center bg-modal-backdrop w-full h-full top-0 left-0' onClick={closeModal}></div>
            {eventModalAction === '' &&
              <ManageEventsModal closeModal={closeModal} events={events} setSelectedEvent={setSelectedEvent} setEventModalAction={setEventModalAction} />
            }
            {eventModalAction === 'add' &&
              <AddEventModal closeModal={closeModal} back={goBack} addEvent={addEvent} />
            }
            {eventModalAction === 'edit' && selectedEvent &&
              <UpdateEventModal closeModal={closeModal} back={goBack} selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} deleteEvent={deleteEvent} updateEvent={updateEvent} />
            }
          </>
        )
      }
    </aside >
  );
};

export default EventList; 