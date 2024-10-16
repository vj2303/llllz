"use client"

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link"
import { brands } from '../all-partners/salonsData';

const SalonCrousal = () => {
    function transformStringToURL(input) {
        console.log(input.split("/")[input.split("/").length - 1]);
        
        for (const [key, value] of Object.entries(brands)) {
            if (value.toLowerCase() === input.split("/")[input.split("/").length - 1].toLowerCase()) {
                console.log("running");
                
            return `/salon/${key.toLowerCase()}`;
            }
        }
        return "";
    }

    const salonGroups = [
        [
            { href: '/salon/BBLUNT', imgSrc: '/BBlunt_Transparent.png' },
            { href: '/salon/Bodycraft', imgSrc: '/Final_Logos/Bodycraft.png' }
        ],
        [
            { href: '/salon/Wellness Co', imgSrc: '/Final_Logos/Wellness Co.png'},
            { href: '/salon/Enrich Salon', imgSrc: '/Final_Logos/Enrich.png' },
        ],
        [
            { href: '/salon/Toni and Guy', imgSrc: '/luzologo/4.png' },
            { href: '/salon/Juice', imgSrc: '/Final_Logos/Juice.png' },
        ],
        [
            { href: '/salon/Aveda x Nykaa', imgSrc: '/Final_Logos/Aveda x Nykaa.png'},
            { href: '/salon/JCB (Jean-Claude Biguine)', imgSrc: '/Final_Logos/JCB.png' },
        ],
        [
            { href: '/salon/Hair Masters', imgSrc: '/Final_Logos/Hairmasters.png' },
            { href: '/salon/Femina Flaunt', imgSrc: '/Final_Logos/Femina Flaunt.png' }
        ],
        [
            { href: '/salon/Elixir Wellness', imgSrc: '/Final_Logos/Elixir.png' },
            { href: '/salon/Dessange Salon & Spa', imgSrc: '/Final_Logos/Dessange.png' }
        ],
        [
            { href: '/salon/Nailashes', imgSrc: '/Final_Logos/Nailashes.png'},
            { href: '/salon/Affinity Elite', imgSrc: '/luzologo/5.png' }
        ],
        [
            { href: '/salon/Looks', imgSrc: '/luzologo/3.png'},
            { href: '/salon/LookWell', imgSrc: '/Final_Logos/Lookwell.png'}
        ],
        [
            { href: '/salon/Cut and Style', imgSrc: '/luzologo/6.png' },
            { href: '/salon/Tattva Spas', imgSrc: '/Final_Logos/Tattva.png' }
        ],
        [
            { href: '/salon/Kapils', imgSrc: '/Final_Logos/Kapils.png'},
            { href: '/salon/Monsoon Salon Pro', imgSrc: '/luzologo/9.png' }
        ],
        [
            { href: '/salon/Skucci', imgSrc: '/luzologo/7.png' },
            { href: '/salon/Tip and Toe', imgSrc: '/Final_Logos/Tip & Toe.png'}
        ],
        [
            { href: '/salon/Naturals Salon', imgSrc: '/Final_Logos/Naturals.png' },
            { href: '/salon/Apple The Original', imgSrc: '/Final_Logos/Apple.png' }
        ],
        // Add more salon groups here
    ];


    return (
        <div className='  my-[30px] sm:my-[60px] 2xl:max-w-[1300px] xl:max-w-[1200px] lg:max-w-[1000px] sm:mx-auto relative'>
            <h1 className='font-bold px-3 text-[30px]  mb-4 text-[#051036] '>700+ Salons | Spas | Dermatologists</h1>
            {/* <div> */}

            <div className='flex gap-[20px]'>
                <button className='prev'><ChevronLeft /></button>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={1}
                    navigation={{ nextEl: ".next", prevEl: ".prev" }}
                    loop={true}

                    modules={[Autoplay, Navigation]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        // When window width is <= 640px (for deskotop devices)
                        640: {
                            slidesPerView: 4,
                        },
                    }}
                >

                    {salonGroups.map((group, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col gap-[20px]'>
                                {group.map((salon, idx) => (
                                    <Link key={idx} href={transformStringToURL(salon.href)}>
                                        <Image src={salon.imgSrc} width={324} height={182} alt='salon' className='sm:aspect-video sm:w-full sm:h-full rounded-md' />
                                    </Link>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            <button className='next'><ChevronRight /></button>
            </div>

            {/* </div> */}
            {/* <div className='flex justify-between  items-center sm:px-[20%] mt-8'> */}

            {/* <div className=' flex flex-row gap-[20px] sm:gap-[100px]'>

<p className='flex gap-[5px]'><Image src="/img/pin.svg" width={20} height={20} alt='img'  />Mumbai</p>
<p className='flex gap-[5px]'><Image src="/img/pin.svg" width={20} height={20} alt='img'  />Pune</p>
<p className='flex gap-[5px]'><Image src="/img/pin.svg" width={20} height={20} alt='img'  />Bangalore</p>
                </div> */}
            {/* </div> */}

        </div>
    )
}

export default SalonCrousal