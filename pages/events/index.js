import { Fragment } from "react";
import { useRouter } from "next/router";

import EventList from "@/components/events/eventList";
import EventsSearch from "@/components/events/eventsSearch";

import { getAllEvents } from "@/helpers/utils";

export default function AllEventsPage (props) {
  const router = useRouter();
  const { events } = props;

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

export async function getStaticProps() {
  const featuredEvents = await getAllEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 60,
  }
}