"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Offers = () => {
  const carouselItems = [
    {
      icon: "✅", // Replace with an actual image or SVG if needed
      title: "Get 40% OFF via LUZO",
      subtitle: "20% Discount + 20% Cashback",
    },
    {
      icon: "✅",
      title: "Get 30% OFF via LUZO",
      subtitle: "20% Discount + 10% Cashback",
    },
    {
      icon: "✅",
      title: "Get 30% OFF via LUZO",
      subtitle: "20% Discount + 10% Cashback",
    },
  ];

  return (
    <div className="px-4 max-w-[1400px] mx-auto mt-4">
        <h1 className='sm:text-[32px] text-2xl py-2 font-semibold'>Offers available for you</h1>
         <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={{ nextEl: ".popular_next", prevEl: ".popular_prev" }}
        loop={true}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
          bulletClass: "pagination-item",
          bulletActiveClass: "pagination-active-item"
        }}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
        }}
      >
     
        {carouselItems.map((item, index) => ( 
          
             <SwiperSlide key={index}>   
            <div className="flex items-center justify-between w-full sm:max-w-[60%] p-4 border border-gray-200 bg-white rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-green-200 p-2 rounded-full text-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500">{item.subtitle}</p>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                {`${index + 1}/${carouselItems.length}`}
              </div>
            </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Offers;
