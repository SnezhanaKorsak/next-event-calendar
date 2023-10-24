import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

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
      <Head>
        <title>All Events</title>
        <meta name='description' content='Find a lot of great events that allow you to evolve...'/>
      </Head>
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