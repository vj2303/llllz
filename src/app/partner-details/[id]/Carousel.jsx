"use client"

import Image from 'next/image'
import React from 'react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Carousel = ({ images }) => {
    return (
        <div>
            <Swiper
                modules={[Autoplay, EffectFade]}
                slidesPerView={1}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                loop={true}
                effect='fade'
            >
               {
                images.map((img, i)=>{
                    return  <SwiperSlide key={i}>
                    <div className='flex flex-col items-center  justify-center  relative'>
                        <div className='w-full h-full absolute left-0 top-0 overlay'></div>      
                        <Image src={img} width={300} height={300} className='w-full sm:min-h-[50vh] h-[40vh] aspect-square' />                 
                    </div>
                </SwiperSlide>
                })
               }
                

            </Swiper>
        </div>
    )
}

export default Carousel