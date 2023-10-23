import EventList from "@/components/events/eventList";
import { getFeaturedEvents } from "@/helpers/utils";

export default function StartingPage (props) {
  const { events } = props;

  return (
    <div>
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