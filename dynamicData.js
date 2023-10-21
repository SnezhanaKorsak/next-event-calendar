const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Programming for everyone',
    description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to learn more effective tools. A lot of everyday life areas are now automated. So maybe let\'s give ourselves a bit of luxury and learn how to code!',
    location: '200 Ketch Harbour Drive Bronx',
    date: '2023-11-12',
    image: 'images/coding-event.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Networking for introverts',
    description: 'We know: Networking is no fun if you are an introvert person. Building a network is a common recommendation for career development. A strong network can help you access unique opportunities, and offer advice to help you grow and handle challenging situations.',
    location: '910 Rockwell Rd. Brooklyn',
    date: '2023-12-30',
    image: 'images/introvert-event.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Networking for extroverts',
    description: 'Networking should come easily to you, right? Not always. As an extrovert, you face a different set of networking challenges. To truly get the most out of every networking experience, you should visit our event.',
    location: '8006 New Dr. Webster',
    date: '2024-01-20',
    image: 'images/extrovert-event.jpg',
    isFeatured: false,
  },
  {
    id: 'e4',
    title: 'Women Who Code',
    description: 'Our community is for professional women and allies of women in technology careers. We help you build the skills you need to raise your professional profile and achieve greater career success.',
    location: '91 Wild Rose St. New York',
    date: '2024-01-17',
    image: 'images/woman-event.jpg',
    isFeatured: true,
  },
]

export const getFeaturedEvents = () => {
  return DUMMY_EVENTS.filter(event => event.isFeatured);
}

export const getAllEvents = () => {
  return DUMMY_EVENTS;
}

export const getFilteredEvents = (dateFilter) => {
  const {year, month} = dateFilter;

  return DUMMY_EVENTS.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  })
}

export const getEventById = (id) => {
  return DUMMY_EVENTS.find(event => event.id === id);
}

