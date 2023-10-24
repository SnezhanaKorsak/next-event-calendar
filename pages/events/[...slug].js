import Head from "next/head";

import EventList from "@/components/events/eventList";
import ResultsTitle from "@/components/events/resultsTitle";
import { getFilteredEvents } from "@/helpers/utils";

export default function FilteredEventsPage (props) {
  const { hasError, filteredEvents, date} = props;

  if(hasError) {
    return <h1 className='center'>Invalid filter. Please adjust your values</h1>
  }

  if(filteredEvents.length === 0 ) {
    return <h1 className='center'>Sorry, but we didn't find any events for this date</h1>
  }

  const searchedDate = new Date(date.year, date.month - 1);

  return (
    <div>
      <Head>
        <title>Filtered Events</title>
        <meta name='description' content={`All events for ${searchedDate.toLocaleDateString()}`}/>
      </Head>
      <ResultsTitle date={searchedDate}/>
      <EventList events={filteredEvents}/>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;

  const [selectedYear, selectedMonth] = filterData;
  const numYear = Number(selectedYear);
  const numMonth = Number(selectedMonth)

  if(isNaN(numYear) || isNaN(numMonth) || numMonth > 12 || numMonth < 1) {
    return {
      hasError: true,
    }
  }
  const filteredEvents = await getFilteredEvents({year: numYear, month: numMonth});

  return {
    props: {
      filteredEvents: filteredEvents,
      date: {year: numYear, month: numMonth},
    }
  }
}