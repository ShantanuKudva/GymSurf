import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import img1 from "../assets/girl-squat.avif";
import img2 from "../assets/tricep-pushdowns.avif";
import img3 from "../assets/man-pushweight.avif";
import img4 from "../assets/girl-backsquat.avif";
import img5 from "../assets/man-alone.avif";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={5} // Set spaceBetween to 0 to remove x-axis whitespace
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 2000 }}
    >
      <SwiperSlide>
        <img src={img1} alt="Slide 1" className="h-60 object-cover" />{" "}
        {/* Add object-cover class to ensure the image fits within the slide */}
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="Slide 2" className="h-60 object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="Slide 3" className="h-60 object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="Slide 4" className="h-60 object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} alt="Slide 5" className="h-60 object-cover" />
      </SwiperSlide>
    </Swiper>
  );
}
