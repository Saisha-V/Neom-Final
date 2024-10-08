import React from "react";

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  guests: number;
  rating: number | null;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  date,
  guests,
  rating,
}) => {
  return (
    <div className="max-w-64 rounded overflow-hidden m-2">
      <img className="w-full h-55 object-cover" src={image} alt={title} />
      <div className="px-4 pl-1 py-4">
        <h3 className="font-ivy text-lg mb-2 ">{title}</h3>
        <p className="text-gray-700 font-poppins text-xs pb-0.5 tracking-wide text-left">
          {guests} guests attended this event
        </p>
        <p className="text-gray-700  font-poppins font-light text-xs">
          on {date}
        </p>
        {rating ? (
          <p className="pt-2 text-gray-700  font-poppins font-light text-xs">
            You rated this event {Array(rating).fill("★").join("")}
          </p>
        ) : (
          <a href="#" className="hover:underline">
            <span className="text-gray-700  font-poppins font-semibold text-xs ">
              Rate this event
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;
