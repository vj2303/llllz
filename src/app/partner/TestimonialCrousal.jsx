"use client"
import React from 'react'
import Image from 'next/image'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";

const TestimonialCrousal = () => {
    const testimonials = [
        {
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
            picture: "/testimonals/2.webp",
            name: "Shalini Shah",
            designation: "Owner - Bodycraft",
            location: "Mumbai"
        },
        {
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
            picture: "/testimonals/2.webp",
            name: "Shalini Shah",
            designation: "Owner - Bodycraft",
            location: "Mumbai"
        },
        {
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
            picture: "/testimonals/2.webp",
            name: "Shalini Shah",
            designation: "Owner - Bodycraft",
            location: "Mumbai"
        },
    ]
    return (
        <div className='px-[20px] py-[40px] bg-[#ECF4FF] '>
            <h2 className='font-medium text-[20px] mb-[30px] text-center'>Our Happy Partners</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                modules={[Autoplay, Pagination]}
                pagination={true}
            // autoplay={{
            //     delay: 2000,
            //     disableOnInteraction: false
            // }}
            className='partner_swiper'
            >
                {
                    testimonials.map((testimonial, i) => {
                        return <SwiperSlide key={i} className='flex flex-col items-center  gap-2 text-center w-full'>
                            <p className='text-[14px] font-normal max-w-[900px] mx-auto text-center'>{testimonial.message}</p>
                            <Image src={testimonial.picture} alt='person' width={70} height={70} className='rounded-full mx-auto' />
                            <p className='text-[#3784C3]'>{testimonial.name}</p>
                            <p>{testimonial.designation}</p>
                            <p>{testimonial.location}</p>
                        </SwiperSlide>
                    })
                }
                <div class="swiper-pagination"></div>
            </Swiper>
        </div>
    )
}

export default TestimonialCrousal