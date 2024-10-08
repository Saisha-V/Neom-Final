import React from "react";

const RemoveCard = ({ event, onRemove }) => {
  return (
    <div className="max-w-64 rounded overflow-hidden m-4 ml-6">
      <div className="relative">
        <div
          className="absolute right-2 top-1 text-sm px-2 py-0 font-poppins cursor-pointer rounded-full bg-white text-red-500"
          onClick={() => onRemove(event.id)}
        >
          Remove
        </div>
        <img
          src={event.image}
          alt={`Event ${event.id}`}
          className="h-55 w-52 object-cover rounded-t-lg"
        />
      </div>
      <div className="pt-2">
        <p className="text-black-600 mb-2 text-sm font-poppins">
          <img
            src="../src/assests/images/overwhelmed.svg"
            className="inline h-4 w-4"
            alt="overwhelmed"
          />
          {"  "}
          {event.category}
        </p>
        <h2 className="text-lg mb-2 font-ivy">{event.title}</h2>
        <p className="text-sm text-black-600">{event.time}</p>
      </div>
    </div>
  );
};

export default RemoveCard;
