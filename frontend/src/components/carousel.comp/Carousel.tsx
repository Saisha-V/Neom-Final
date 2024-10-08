import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./Card";

import "swiper/swiper-bundle.css";

import carouselData from "../../constants/carousel.data.json";

const Carousel = () => {
  return (
    <div className="w-full flex bg-[#F9F7F2] py-4">
      <Swiper spaceBetween={20} slidesPerView={"auto"} navigation loop={false}>
        {carouselData.map((item) => (
          <SwiperSlide key={item.id} style={{ width: "500px" }}>
            <Card {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
