import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Import Swiper modules
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/autoplay';
import '../Component/Imageslider.css'; // Import your custom styles

import headerImg1 from '../assets/images/header-img/headerimg1.webp';
import headerImg2 from '../assets/images/header-img/headerimg2.webp';
import headerImg3 from '../assets/images/header-img/headerimg3.webp';
import headerImg4 from '../assets/images/header-img/headerimg4.png';
import headerImg5 from '../assets/images/header-img/headerimg5.png';
import headerImg6 from '../assets/images/header-img/headerimg6.png';
import headerImg7 from '../assets/images/header-img/headerimg7.png';
import headerImg8 from '../assets/images/header-img/headerimg8.png';

const ImageSlider = () => {
  const images = [headerImg1, headerImg2, headerImg3, headerImg4, headerImg5, headerImg6 , headerImg7,  headerImg8, ];

  return (
    <Swiper
      modules={[Navigation, Autoplay]} // Include Navigation and Autoplay modules
      slidesPerView={5}
      centeredSlides={true}
      loop={true}
      spaceBetween={20}
      autoplay={{ delay: 2000, disableOnInteraction: true }} // Auto-slide every 2 seconds
      speed={500} // Smooth transition speed
      navigation={true} // Enable navigation
      breakpoints={{
        250: {
          slidesPerView: 1, // Show 1 slide on small screens
        },
        640: {
          slidesPerView: 3, // Show 3 slides on medium screens
        },
        1024: {
          slidesPerView: 5, // Show 5 slides on large screens
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
