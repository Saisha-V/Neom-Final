type SuggestedCardProps = {
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

export const SuggestedCard = ({
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
}: SuggestedCardProps) => {
  return (
    <div className="   bg-[#F9F7F2] overflow-hidden w-[500px] mx-14">
      <img src={imgSrc} alt={title} className="w-full rounded-lg mb-2" />
      <h3 className="text-lg font-ivy font-light">{title}</h3>
      <p className="text-xs text-gray-400 ">{date}</p>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <div className="flex my-4">
        <button className=" px-4 py-2 text-white bg-gray-800 font-light rounded mr-4 font-poppins text-sm">
          Yes, I accept
        </button>
        <a className=" font-poppins text-sm font-light cursor-pointer pt-2 hover:underline">
          No thanks
        </a>
      </div>
    </div>
  );
};
