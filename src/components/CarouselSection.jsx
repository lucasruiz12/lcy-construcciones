import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CarouselSection = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop
      style={{
        height: 450,
        borderRadius: "12px",
        overflow: "hidden",
        marginBottom: "2rem",
        margin: "2rem 0",
      }}
    >
      {images.map((src, index) => (
        <SwiperSlide
          key={index}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={src}
            alt={`Slide ${index}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselSection;
