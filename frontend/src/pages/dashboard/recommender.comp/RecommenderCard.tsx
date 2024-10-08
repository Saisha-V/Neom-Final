import React from "react";

const RecommenderCard = ({ event }) => {
  return (
    <div className="max-w-64 rounded overflow-hidden m-2">
      <div className="relative">
        <div className="absolute right-2 text-4xl opacity-60 hover:text-red-500 hover:opacity-100 cursor-pointer ease-in-out">
          ♥
        </div>
        <img
          src={event.image}
          alt={`Event ${event.id}`}
          className="h-55 w-full object-cover rounded-t-lg"
        />

        <img
          src={event.rank}
          alt="ranking"
          className="absolute bottom-2 right-2"
        />
      </div>
      <div className="pt-2">
        <p className="text-black-600 mb-2  text-sm font-poppins ">
          <img
            src="../src/assests/images/overwhelmed.svg"
            className="inline h-4 w-4"
            alt="overwhelmed"
          />
          {"  "}
          {event.category}
        </p>

        <h2 className="text-lg  mb-2 font-ivy">{event.title}</h2>
        <p className="text-sm text-black-600">{event.time}</p>
      </div>
    </div>
  );
};

export default RecommenderCard;
