import { Fragment, useContext } from "react";
import MainHeader from "@/components/layout/mainHeader";
import Notification from "@/components/ui/notification";
import { NotificationContext } from "@/store/notification-context";

export default function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

 const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      <MainHeader/>
      <main>
        {props.children}
      </main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status} />
      )}
    </Fragment>
  );
}