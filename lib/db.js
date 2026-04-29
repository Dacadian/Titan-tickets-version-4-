
let events = [
  {
    id: 1,
    title: "Titan Tech Summit 2024",
    description: "Join Africa's premier tech conference with 50+ speakers and 5000+ attendees",
    date: "2024-12-15T10:00:00Z",
    location: "KICC - Nairobi",
    price: 3500,
    availableTickets: 1200,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    organizer: "Titan Tech Hub"
  },
  {
    id: 2,
    title: "AfroVibe Music Festival",
    description: "3 days of non-stop music with top African artists and international DJs",
    date: "2024-12-20T16:00:00Z",
    location: "Nairobi National Park Grounds",
    price: 2500,
    availableTickets: 3500,
    image: "https://images.unsplash.com/photo-1461896836934-ffe60778fe84?w=800&h=400&fit=crop",
    organizer: "Titan Entertainment"
  },
  {
    id: 3,
    title: "Crypto Titans Conference",
    description: "Blockchain, Web3, and Crypto innovation summit for developers and investors",
    date: "2024-12-28T09:00:00Z",
    location: "Sarit Centre - Westlands",
    price: 4500,
    availableTickets: 800,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    organizer: "Titan Blockchain"
  }
];

let tickets = [];

export function getEvents() {
  return events;
}

// ... rest remains the same
