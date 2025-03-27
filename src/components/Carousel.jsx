import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({ images, modal }) => {
    return (
        <Swiper navigation pagination={{ clickable: true }} modules={[Navigation, Pagination]}>
            {images.map((src, index) => (
                <SwiperSlide key={index} style={{display: "flex", justifyContent: "center"}}>
                    <img
                        key={index}
                        src={src}
                        alt={`Imagen ${index}`}
                        style={{
                            width: modal ? "50%" : "100%",
                            height: modal ? "50%" : "100%",
                        }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
