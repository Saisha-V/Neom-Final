import { Swiper, SwiperSlide } from "swiper/react";
import { SuggestedCard } from "./SuggestedCard";

import "swiper/swiper-bundle.css";

import carouselData from "../../constants/suggested.data.json";

const SuggestedCarousel = () => {
  return (
    <div className="w-full flex bg-[#F9F7F2] py-4">
      <Swiper spaceBetween={20} slidesPerView={"auto"} navigation loop={false}>
        {carouselData.map((item) => (
          <SwiperSlide key={item.id} style={{ width: "500px" }}>
            <SuggestedCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SuggestedCarousel;
