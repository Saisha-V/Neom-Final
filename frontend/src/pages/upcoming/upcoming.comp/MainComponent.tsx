import React, { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

interface FilterProps {
  selectedTravel: string;
  setSelectedTravel: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

const travelOptions = [
  "10 mins walking",
  "20 mins walking",
  "30 mins walking",
  "10 mins drive",
  "20 mins drive",
  "30 mins drive",
  "No limits",
];

const categories = [
  "Stand Up Comedy",
  "RAMP Walk",
  "Box Cricket",
  "Swimming",
  "Golf Tournament",
  "Singing",
  "Talks Shows",
  "Kite Surfing",
  "Book Exhibitions",
];

const FilterComponent: React.FC<FilterProps> = ({
  selectedTravel,
  setSelectedTravel,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className=" bg-[#faf8f2] pl-14 p-4 text-gray-700 ">
      <div className="mb-6 flex space-x-20">
        <div className=" gap-4 ">
          <h2 className="mb-2  font-poppins">What suits your schedules?</h2>
          <div className="buttons flex gap-2 font-thin">
            <button className="flex  items-center gap-2 px-4 py-2 border  border-gray-400 rounded-full">
              <FaCalendarAlt className="text-red-500 " />
              Pick a date
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-full">
              <FaMapMarkerAlt className="text-red-500" />
              Pick a location
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h2 className=" mb-2  font-poppins">
            How far are you willing to travel?
          </h2>
          <div className="flex flex-wrap gap-1 font-thin">
            {travelOptions.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedTravel(option)}
                className={`px-4 py-2 border border-gray-400 rounded-full ${
                  selectedTravel === option ? "bg-black text-white" : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className=" font-poppins mb-2">
          You can always filter out the events by category wise.
        </h2>
        <div className="flex gap-1 flex-wrap font-thin">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 border border-gray-400 rounded-full ${
                selectedCategory === category ? "bg-black text-white" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const MainComponent: React.FC = () => {
  const [selectedTravel, setSelectedTravel] =
    useState<string>("20 mins walking");
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Golf Tournament");

  return (
    <FilterComponent
      selectedTravel={selectedTravel}
      setSelectedTravel={setSelectedTravel}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  );
};

export default MainComponent;
