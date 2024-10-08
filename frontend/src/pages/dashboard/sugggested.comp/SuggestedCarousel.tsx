import { Swiper, SwiperSlide } from "swiper/react";
import { SuggestedCard } from "./SuggestedCard";
import { useRef } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

import "swiper/swiper-bundle.css";

import carouselData from "../../../constants/suggested.data.json";

const SuggestedCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <div className="w-full flex bg-[#F9F7F2] py-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          loop={false}
        >
          {carouselData.map((item) => (
            <SwiperSlide key={item.id} style={{ width: "500px" }}>
              <SuggestedCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="buttons flex space-x-6 items-center bg-[#F9F7F2] px-14 pb-4">
        <div className="previous flex items-center justify-center w-12 h-12 border-2 border-black rounded-full cursor-pointer hover:bg-gray-200 transition">
          <GrLinkPrevious className="text-2xl text-black" />
        </div>
        <div className="next flex items-center justify-center w-12 h-12 border-2 border-black rounded-full cursor-pointer hover:bg-gray-200 transition">
          <GrLinkNext className="text-2xl text-black" />
        </div>
      </div>
    </>
  );
};

export default SuggestedCarousel;
