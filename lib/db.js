let events = [
  {
    id: 1,
    title: "Tech Conference 2024",
    description: "Join us for the biggest tech event of the year!",
    date: "2024-12-15T10:00:00Z",
    location: "Nairobi Convention Centre",
    price: 2500,
    availableTickets: 500,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
    organizer: "TechHub Kenya"
  },
  {
    id: 2,
    title: "Music Festival",
    description: "Live performances from top African artists",
    date: "2024-12-20T18:00:00Z",
    location: "Uhuru Park",
    price: 1500,
    availableTickets: 2000,
    image: "https://images.unsplash.com/photo-1461896836934-ffe60778fe84?w=500&h=300&fit=crop",
    organizer: "AfroBeats Ltd"
  }
];

let tickets = [];

export function getEvents() {
  return events;
}

export function getEventById(id) {
  return events.find(event => event.id === parseInt(id));
}

export function createEvent(event) {
  const newEvent = { ...event, id: events.length + 1 };
  events.push(newEvent);
  return newEvent;
}

export function purchaseTicket(ticketData) {
  const ticket = {
    id: tickets.length + 1,
    ...ticketData,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  tickets.push(ticket);
  return ticket;
}

export function getTicketsByEventId(eventId) {
  return tickets.filter(ticket => ticket.eventId === parseInt(eventId));
}

export function updateTicketStatus(ticketId, status) {
  const ticket = tickets.find(t => t.id === ticketId);
  if (ticket) {
    ticket.status = status;
    return ticket;
  }
  return null;
}
