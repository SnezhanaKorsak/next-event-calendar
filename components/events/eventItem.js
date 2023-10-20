import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import AddressIcon from "../icons/address-icon";

import styles from "./eventItem.module.css";

export default function EventItem(props) {
  const { event } = props;

  const formattedDate = new Date(event.date).toLocaleDateString('en-US',{
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const eventLink = `/events/${event.id}`

  return (
    <li className={styles.item}>
      <img src={'/' + event.image} alt=''/>
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{event.title}</h2>
          <div className={styles.date}>
            <DateIcon/>
            <time>{formattedDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon/>
            <address>{event.location}</address>
          </div>
          <div className={styles.actions}>
            <Button link={eventLink}>
              <span>Explore Event</span>
              <span className={styles.icon}><ArrowRightIcon/></span>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}