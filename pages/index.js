import { getFeaturedEvents } from "@/dynamicData";
import EventList from "@/components/events/eventList";


export default function StartingPage () {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents}/>
    </div>
  );
}