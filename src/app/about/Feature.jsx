"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Feature = () => {
  const features = [
    {
      img: '/abouBanner2.png',
      heading: 'Exclusive Offers',
      // para: 'You can easily book, cancel, reschedule your appointment',
    },
    {
      img: '/aboutBanner3.png',
      heading: '700+ Salons | Spas | Clinic',
      // para: 'Avail exclusive offers at all salon ',
    },
    {
      img: '/aboutBanner4.png',
      heading: 'Browse Your Favourite Services Easily',
      // para: 'Buy / claim gift cards',
    },
    {
      img: '/aboutBanner5.png',
      heading: 'Book Appointment under 30 Seconds',
      // para: 'Book appointment according to your concern',
    },
    {
      img: '/aboutBanner6.png',
      heading: 'Book Services By Concerns',
      // para: 'Get services done at different cities',
    },
    {
      img: '/aboutBanner7.png',
      heading: 'Safe & Secure Payments',
      // para: 'Get services done at different cities',
    },
  ];

  return (
    <div className='px-[10px] sm:px-[120px] relative max-w-[1500px] mx-auto'>
      <h1 className='text-[30px] font-bold leading-[39px] my-[30px]'>Our Features</h1>
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
            slidesPerView: 4,
          },
        }}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center '>
              <Image src={feature.img} alt={feature.heading} width={250} height={163} className='h-[500px] rounded-2xl shadow-md aspect-[9/16]' />
              <h1 className='text-[16px] sm:text-[18px] font-medium text-center py-[10px] font-medium'>{feature.heading}</h1>
              {/* <p className='text-[12px] sm:text-[16px] text-center'>{feature.para}</p> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className='popular_prev p-2 sm:block shadow-md rounded-full absolute left-[4%] top-1/2 transform -translate-y-1/2 text-white bg-blue-500 z-50'>
        <ChevronLeft />
      </button>
      <button className='popular_next p-2 sm:block shadow-md rounded-full absolute right-[4%] top-1/2 transform -translate-y-1/2 text-white bg-blue-500 z-50'>
        <ChevronRight />
      </button>
    </div>
  );
};

export default Feature;
