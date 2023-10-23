import { Fragment } from "react";
import { getEventById, getFeaturedEvents } from "@/helpers/utils";
import EventSummary from "@/components/eventDetail/event-summary";
import EventLogistics from "@/components/eventDetail/event-logistics";
import EventContent from "@/components/eventDetail/event-content";

export default function EventDetailPage(props) {
  const event = props.event;

  if(!event) {
    return <h1 className='center'>Loading...</h1>
  }

  return (
    <Fragment>
      <EventSummary title={event.title}/>
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  if(!event) {
    return { notFound: true};
  }

  return {
    props: {
      event: event,
    },
    revalidate: 30,
  }
}

export async function getStaticPaths() {
  const allEvents = await getFeaturedEvents();
  const params = allEvents.map(event => ({params: {eventId: event.id}}));

  return {
    paths: params,
    fallback: 'blocking',
  };
}