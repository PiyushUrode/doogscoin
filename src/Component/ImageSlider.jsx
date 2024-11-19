import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import '../Component/Imageslider.css';

import headerImg1 from '../assets/images/header-img/headerimg1.webp';
import headerImg2 from '../assets/images/header-img/headerimg2.webp';
import headerImg3 from '../assets/images/header-img/headerimg3.webp';

const ImageSlider = () => {
  const images = [headerImg1, headerImg2, headerImg3, headerImg2, headerImg3, headerImg1];

  return (
    <Swiper
      slidesPerView={5}
      centeredSlides={true}
      loop={true}
      spaceBetween={20}
      autoplay={{ delay: 2000, disableOnInteraction: true }}  // Auto-slide every 2 seconds
      speed={500}  // Smooth transition speed
      breakpoints={{
        250: {
          slidesPerView: 1,  // Show 1 slide on small screens
        },
        640: {
          slidesPerView: 3,  // Show 3 slides on medium screens
        },
        1024: {
          slidesPerView: 5,  // Show 5 slides on large screens
        },
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="container">
            <div className="image-container">
              <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
