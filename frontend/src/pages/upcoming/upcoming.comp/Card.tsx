import React from "react";

interface CardProps {
  title: string;
  category: string;
  travelTime: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, category, travelTime, image }) => {
  return (
    <>
      <div className="max-w-64 rounded overflow-hidden m-2">
        <div className="relative">
          <div className="absolute right-2 text-4xl opacity-60 hover:text-red-500 hover:opacity-100 cursor-pointer ease-in-out">
            ♥
          </div>
          <img
            src={image}
            alt={`Event: ${title}`}
            className="w-full h-56 border rounded-md"
          />
        </div>
        <div className="pt-2 ">
          <p className="text-black-600 mb-2 text-sm font-poppins">
            <img
              src="../src/assests/images/overwhelmed.svg"
              className="inline h-4 w-4 rounded-md"
              alt="category icon"
            />
            {"  "}
            {category}
          </p>
          <h2 className="text-lg mb-2 font-ivy ">{title}</h2>
          <p className="text-sm text-black-600 font-poppins">{travelTime}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
