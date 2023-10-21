import { Fragment } from "react";
import { useRouter } from "next/router"
import { getEventById } from "@/dynamicData";
import EventSummary from "@/components/eventDetail/event-summary";
import EventLogistics from "@/components/eventDetail/event-logistics";
import EventContent from "@/components/eventDetail/event-content";

export default function EventDetailPage() {
  const router = useRouter();

  const { eventId } = router.query
  const event = getEventById(eventId)

  if (!event) {
    return <p>No event found</p>
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