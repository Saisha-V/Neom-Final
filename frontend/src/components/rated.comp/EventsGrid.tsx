import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";

const EventsGrid: React.FC = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("../src/constants/event.data.json")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="bg-[#F9F7F2]">
      <div className="container mx-auto px-4 py-8 ">
        <div className="flex justify-between">
          {events.map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              title={event.title}
              date={event.date}
              guests={event.guests}
              rating={event.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsGrid;
