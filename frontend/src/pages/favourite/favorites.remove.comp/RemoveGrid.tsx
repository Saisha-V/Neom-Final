import React, { useEffect, useState } from "react";
import RemoveCard from "./RemoveCard";

const RemoveGrid = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("../src/constants/remove.fav.data.json")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  const handleRemove = (id) => {
    // Filter out the event with the given id
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  return (
    <div className="bg-[#F9F7F2]">
      <div className="container mx-auto ">
        <div className="flex flex-wrap ">
          {" "}
          {events.map((event) => (
            <RemoveCard key={event.id} event={event} onRemove={handleRemove} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RemoveGrid;
