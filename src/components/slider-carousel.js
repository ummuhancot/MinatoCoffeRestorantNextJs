"use client"
import React from 'react'
import {Swiper, SwiperSlide }from 'swiper/react';
import "swiper/css";
import slider from "@/helpers/data/slider.json";
import Image from 'next/image';
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Mousewheel,
  A11y
} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

const Slider = () => {
  return (
    <div 
      style={{
        width: "100vw",
        height: "100vh",
        maxWidth: "100%",
        maxHeight: "100%",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff"
      }}
    >
      <Swiper
        style={{
          width: "100vw",    
          height: "100vh",   
          maxWidth: "800px",
          maxHeight: "80vh",
        }}
        spaceBetween={5}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          scale: 1,
          slideShadows: true,
        }}
        a11y={{
          enabled: true,
          prevSlideMessage: "Önceki slayt",
          nextSlideMessage: "Sonraki slayt",
          firstSlideMessage: "İlk slayttasınız",
          lastSlideMessage: "Son slayttasınız",
          paginationBulletMessage: "Slayt {{index}}",
        }}
        modules={[EffectCoverflow, Pagination, Autoplay, Mousewheel, A11y]}
        className="mySwiper"
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slider.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{
              width: "100%",
              height: "80vh",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              background: "#222",
              borderRadius: "24px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            >
              <Image
                src={`/minatoCoffe/${item.image}`}
                alt="mino"
                fill
                style={{
                  objectFit: "cover",
                }}
                priority
              />
            </div>
            <h2
              className='swiper'
              style={{
                position: "absolute",
                bottom: "40px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 2,
                color: "white",
                backgroundColor: "rgba(84, 84, 84, 0.6)",
                padding: "16px 32px",
                fontSize: "2rem",
                textAlign: "center",
                maxWidth: "90%",
                boxShadow: "0 4px 20px rgba(255, 255, 0, 0.4)",
                fontWeight: "600",
                margin: "0",
              }}
            >
              {item.title}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider