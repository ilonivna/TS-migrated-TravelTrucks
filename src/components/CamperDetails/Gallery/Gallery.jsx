import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import css from "./Gallery.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLocation } from "react-router-dom";

export default function Gallery({ gallery, name, slidesPerView }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={slidesPerView}
      navigation
      pagination={{ clickable: true }}
      loop="true"
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
      }}
    >
      {gallery.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <img className={css.image} src={item.thumb} alt={name} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
