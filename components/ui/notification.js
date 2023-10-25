import { useContext } from 'react';
import { NotificationContext } from "@/store/notification-context";

import classes from './notification.module.css';

export default function Notification(props) {
 const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;

  let statusClasses = '';

  switch (status) {
    case 'success': {
      statusClasses = classes.success;
      break;
    }
    case 'error': {
      statusClasses = classes.error;
      break;
    }
    case 'pending': {
     statusClasses = classes.pending;
      break;
    }
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

