// ... existing events array

let tickets = [];

export function getEvents() {
  return events;
}

export function getEventById(id) {
  return events.find(event => event.id === parseInt(id));
}

export function createEvent(eventData) {
  const newEvent = { 
    ...eventData, 
    id: Date.now(), // Simple ID generation
    image: eventData.image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop'
  };
  events.unshift(newEvent); // Add to beginning for latest first
  return newEvent;
}

export function updateEvent(id, eventData) {
  const index = events.findIndex(event => event.id === id);
  if (index !== -1) {
    events[index] = { ...events[index], ...eventData };
    return events[index];
  }
  return null;
}

export function deleteEvent(id) {
  const index = events.findIndex(event => event.id === id);
  if (index !== -1) {
    events.splice(index, 1);
    return true;
  }
  return false;
}

// ... rest of existing functions
