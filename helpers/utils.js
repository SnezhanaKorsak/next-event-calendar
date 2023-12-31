import { MongoClient } from "mongodb";

export const getAllEvents = async () => {
  const res = await fetch('https://events-calendar-21ffb-default-rtdb.europe-west1.firebasedatabase.app/events.json');
  const data = await res.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    })
  }

  return events;
}

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();

  return allEvents.filter(event => event.isFeatured);
}

export const getEventById = async (id) => {
  const allEvents = await getAllEvents();

  return allEvents.find(event => event.id === id);
}

export const getFilteredEvents = async (dateFilter) => {
  const {year, month} = dateFilter;
  const allEvents = await getAllEvents();

  return allEvents.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  })
}

export const getMongoClient = async (databaseName) => {
  return  await MongoClient.connect(`mongodb+srv://Snega:WhYgl7mc2oEae6gY@cluster0.vynq4ec.mongodb.net/${databaseName}?retryWrites=true&w=majority`)
}