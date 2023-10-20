import EventItem from "./eventItem";

import styles from "./eventList.module.css";

export default function EventList(props) {
  const { events } = props;
  return (
    <ul className={styles.list}>
      {events.map(event => <EventItem key={event.id} event={event}/>)}
    </ul>
  );
}