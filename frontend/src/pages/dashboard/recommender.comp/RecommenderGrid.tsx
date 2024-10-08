import React, { useEffect, useState } from "react";

import RecommenderCard from "./RecommenderCard";

const RecommenderGrid = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("../src/constants/recommended.data.json")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="bg-[#F9F7F2]">
      <div className="container mx-auto px-4 py-8 ">
        <div className="flex justify-between">
          {events.map((event) => (
            <RecommenderCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommenderGrid;
