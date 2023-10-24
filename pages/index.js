import Head from "next/head";

import EventList from "@/components/events/eventList";
import { getFeaturedEvents } from "@/helpers/utils";

export default function StartingPage (props) {
  const { events } = props;

  return (
    <div>
      <Head>
        <title>NextJS Course</title>
        <meta name='description' content='Find a lot of great events that allow you to evolve...'/>
      </Head>
      <EventList events={events}/>
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  }
}