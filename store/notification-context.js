import { createContext, useEffect, useState } from 'react';

export const NotificationContext = createContext({
  notification: null,
  showNotification: () => {},
  hideNotification: () => {},
});

export const NotificationContextProvider = (props) => {
  const [activeNotification, setActiveNotification] = useState();

  useEffect(() => {
    if (activeNotification && activeNotification.status !== 'pending') {
      const timer = setTimeout(() => {
        setActiveNotification(null)
      }, 3000);

      return () => clearTimeout(timer);
    }
  })

  const showNotificationHandler = (notificationData) => {
    setActiveNotification(notificationData)
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null)
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  }

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}