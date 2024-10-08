type CardProps = {
  id: number;
  title: string;
  rating: number;
  reviews: number;
  description: string;
  date: string;
  location: string;
  category: string;
  status: string;
  temperature: string;
  imgSrc: string;
};

export const Card = ({
  title,
  rating,
  reviews,
  description,
  date,
  location,
  category,
  status,
  temperature,
  imgSrc,
}: CardProps) => {
  return (
    <div className="bg-white flex flex-row rounded-lg border-solid border border-black shadow-md overflow-hidden w-[500px] mx-14">
      <img src={imgSrc} alt={title} className="w-[230px] h-[270px] " />
      <div className="p-4">
        <h3 className="text-lg font-ivy font-light">{title}</h3>
        <div className="flex flex-row items-center pb-2">
          <span className="text-red-500 text-sm ">★★★★★</span>
          <span className="ml-2 text-sm text-gray-600">
            {rating} ({reviews} reviews)
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {description}{" "}
          <span className="text-red-600 underline">read more</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">📅 {date}</p>
        <p className="text-sm text-gray-500 mt-2">📍 {location}</p>
        <p className="text-sm text-gray-500 mt-2">🏷️ {category}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-green-600 text-sm">{status}</span>
          <span className="text-sm">{temperature}</span>
        </div>
      </div>
    </div>
  );
};
