import { useRouter } from "next/router";

import EventList from "@/components/events/eventList";
import ResultsTitle from "@/components/events/resultsTitle";
import { getFilteredEvents } from "@/dynamicData";

export default function FilteredEventsPage () {
  const router = useRouter();
  const filterData = router.query.slug;

  if(!filterData) {
    return <h1 className='center'>Loading...</h1>
  }

  const [selectedYear, selectedMonth] = filterData;
  const numYear = Number(selectedYear);
  const numMonth = Number(selectedMonth)

  if(isNaN(numYear) || isNaN(numMonth) || numMonth > 12 || numMonth < 1) {
    return <h1 className='center'>Invalid filter. Please adjust your values</h1>
  }
  const filteredEvent = getFilteredEvents({year: numYear, month: numMonth});
  const date = new Date(numYear, numMonth - 1);

  if(filteredEvent.length === 0) {
    return <h1 className='center'>Sorry, but we didn't find any events for this date</h1>
  }

  return (
    <div>
      <ResultsTitle date={date}/>
      <EventList events={filteredEvent}/>
    </div>
  );
}