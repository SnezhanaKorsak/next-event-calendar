import { Fragment } from "react";
import { useRouter } from "next/router";

import EventList from "@/components/events/eventList";
import EventsSearch from "@/components/events/eventsSearch";

import { getAllEvents } from "@/dynamicData";

export default function EventsPage () {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList events={events}/>
    </Fragment>
  );
}