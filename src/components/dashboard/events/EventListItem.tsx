import { formatEventDate } from '../../../utils/helpers';
import { Event } from '../../../utils/types';

type EventListItemProps = {
  event: Event;
};

const EventListItem = ({ event }: EventListItemProps) => {
  return (
    <li key={event._id} className='flex gap-2'>
      <span className='font-medium'>{formatEventDate(event.date)}</span>
      <p>{event.title}</p>
    </li>
  );
};

export default EventListItem;