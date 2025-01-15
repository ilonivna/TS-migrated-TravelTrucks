import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import css from "./Gallery.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Camper, GalleryItem } from "../../types/types";

type GalleryProps = {
  gallery?: GalleryItem[];
  name?: string;
  slidesPerView: number;
};

export default function Gallery({ gallery, slidesPerView }: GalleryProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={slidesPerView}
      navigation
      pagination={{ clickable: true }}
      loop={true}
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
      {gallery && (
        <>
          {gallery.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img className={css.image} src={item.thumb} />
              </SwiperSlide>
            );
          })}
        </>
      )}
    </Swiper>
  );
}
