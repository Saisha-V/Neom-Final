import React, { useEffect, useState } from "react";
import FilterComponent from "./FilterComponent";
import Card from "./Card";

const MainComponent: React.FC = () => {
  const [selectedTravel, setSelectedTravel] =
    useState<string>("20 mins walking");
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Golf Tournament");
  const [cardData, setCardData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../src/constants/filter.data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCards = cardData.filter(
    (card) =>
      card.travelTime === selectedTravel && card.category === selectedCategory
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <FilterComponent
        selectedTravel={selectedTravel}
        setSelectedTravel={setSelectedTravel}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="flex flex-wrap bg-[#F9F7F2] p-12">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              category={card.category}
              travelTime={card.travelTime}
              image={card.image}
            />
          ))
        ) : (
          <p>No events match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default MainComponent;
