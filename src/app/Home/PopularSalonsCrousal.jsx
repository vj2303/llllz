"use client"

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/bundle"
import CustomPagination from './CustomPagination';
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { brands } from '../all-partners/salonsData';


const PopularSalonsCrousal = () => {
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
    const count = 6;
    const renderPagination = () => {
        const items = [];
        for (let i = 0; i < count; i++) {
            items.push(
                <div
                    key={i}
                    className={`pagination-item`}
                ></div>
            );
        }
        return items;
    };

    const salons = [
        {
            name: 'BBlunt',
            href: '/salon/BBLUNT',
            imgSrc: '/BBlunt_Transparent.png'
        },
        {
            name: 'bodycraft',
            href: '/salon/Bodycraft',
            imgSrc: '/Final_Logos/Bodycraft.png'
        },
        {
            name: 'Looks Salon',
            href: '/salon/Looks',
            imgSrc: '/luzologo/3.png'
        },
        {
            name: 'Enrich',
            href: '/salon/Enrich Salon',
            imgSrc: '/Final_Logos/Enrich.png'
        },
        {
            name: 'Toni & Guy',
            href: '/salon/Toni and Guy',
            imgSrc: '/luzologo/4.png'
        },
        {
            name: 'JCB',
            href: '/salon/JCB (Jean-Claude Biguine)',
            imgSrc: '/Final_Logos/JCB.png'
        },
        // {
        //     name: 'Lifestyle Salon',
        //     href: '/salon/jcb',
        //     imgSrc: '/Logos-Website/7.jpg'
        // },
        {
            name: 'HM Salon',
            href: '/salon/Hair Masters',
            imgSrc: '/Final_Logos/Hairmasters.png'
        },
        {
            name: 'Femina and Flaunt',
            href: '/salon/Femina Flaunt',
            imgSrc: '/Final_Logos/Femina Flaunt.png'
        },
        {
            name: 'Elixir',
            href: '/salon/Elixir Wellness',
            imgSrc: '/Final_Logos/Elixir.png'
        },
        {
            name: 'Dessange Paris',
            href: '/salon/Dessange Salon & Spa',
            imgSrc: '/Final_Logos/Dessange.png'
        },
        {
            name: 'Nailashes',
            href: '/salon/Nailashes',
            imgSrc: '/Final_Logos/Nailashes.png'
        },
        {
            name: 'Affinity Elite',
            href: '/salon/Affinity Elite',
            imgSrc: '/luzologo/5.png'
        },

        {
            name: 'Lookwell',
            href: '/salon/LookWell',
            imgSrc: '/Final_Logos/Lookwell.png'
        },

        {
            name: 'Cut & Style',
            href: '/salon/Cut and Style',
            imgSrc: '/luzologo/6.png'
        },
        {
            name: 'Tattva Salon',
            href: '/salon/Tattva Spas',
            imgSrc: '/Final_Logos/Tattva.png'
        },
        {
            name: 'Kapils Salon ',
            href: '/salon/Kapils',
            imgSrc: '/Final_Logos/Kapils.png'
        },
        {
            name: 'Monsoon Salon',
            href: '/salon/Monsoon Salon Pro',
            imgSrc: '/luzologo/9.png'
        },
        {
            name: 'Skuccii',
            href: '/salon/Skucci',
            imgSrc: '/luzologo/7.png'
        },
        {
            name: 'Tip & Toe',
            href: '/salon/Tip and Toe',
            imgSrc: '/Final_Logos/Tip & Toe.png'
        },
        {
            name: 'Wellness Salon',
            href: '/salon/Wellness Co',
            imgSrc: '/Final_Logos/Wellness Co.png'
        },
        {
            name: 'Juice',
            href: '/salon/juice',
            imgSrc: '/Final_Logos/Juice.png'
        },
        {
            name: 'Aveda x Nykaa',
            href: '/salon/Aveda x Nykaa',
            imgSrc: '/Final_Logos/Aveda x Nykaa.png'
        },
        {
            name: 'Naturals Salon',
            href: '/salon/Naturals Salon',
            imgSrc: '/Final_Logos/Naturals.png'
        },
        {
            name: 'Apple',
            href: '/salon/Apple The Original',
            imgSrc: '/Final_Logos/Apple.png'
        },
    ];


    return (
        <>
            <div className=' px-[10px] my-[60px] relative 2xl:max-w-[1300px] xl:max-w-[1200px] lg:max-w-[1000px] sm:mx-auto'>
                <div className='flex justify-between mb-[20px]'>
                    <h1 className='font-bold text-[30px] '>Popular Partners</h1>
                     <Link href='/all-partners'> <button className=' hover:text-[white] text-blue-600 bg-[#3554D10D] px-[10px] py-[10px] hover:bg-[#3554D1] '> <span className='flex gap-[10px]'>View All<ArrowUpRight /> </span>   </button>
                    </Link>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation={{ nextEl: ".popular_next", prevEl: ".popular_prev" }}
                    loop={true}
                    pagination={{ clickable: true, el: '.custom-pagination', bulletClass: "pagination-item", bulletActiveClass: "pagination-active-item" }}

                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        // When window width is <= 640px (for mobile devices)
                        640: {
                            slidesPerView: 4,
                        },
                    }}
                >

                    {salons.map((salon, index) => (
                        <SwiperSlide key={index}>
                            <Link href={transformStringToURL(salon.href)}>
                            <div className='relative flex shadow-sm border my-1 flex-col gap-[20px] rounded-xl overflow-hidden'>
                                    <Image
                                        src={salon.imgSrc}
                                        width={360}
                                        height={172}
                                        alt='salon'
                                        className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out'
                                    />
                                        {/* <span className='absolute inset-0 w-full bg-[#9A9A9A] opacity-10 rounded-md'></span>
                                    <h1 className='text-[white] text-[20px] font-medium absolute bottom-0 left-0 px-4 py-1 w-full'>
                                        <span className='relative z-10'>{salon.name}</span>
                                        <span className='absolute inset-0 w-full bg-black opacity-20 rounded-md'></span>
                                    </h1> */}
                                    </div>
                            </Link>
                        </SwiperSlide>
                    ))}

                    {/* <SwiperSlide>
                        <Link href='/salon/jcb'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/JCB.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>JCB (Jean-Claude Biguine) </h1>
                            </div>
                        </Link>
                    </SwiperSlide>
                    

                    <SwiperSlide>
                        <Link href='/salon/tattva'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden '>
                                <Image src='/SalonPhotos/TattvaSpa.webp' width={360} height={172}  alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Tattva Spa</h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    
                    <SwiperSlide>
                        <Link href='/salon/fashiontv'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/FTV.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Fashion TV</h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    
                    <SwiperSlide>
                        <Link href='/salon/harsha-and-rakesh'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/HarshaRakesh.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Harsha & Rakesh</h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href='/salon/juice'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/juice,ghatkopar.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Juice </h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    

                    <SwiperSlide>
                        <Link href='/salon/bblunt'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/bblunt.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>BBlunt</h1>
                            </div>
                        </Link>
                    </SwiperSlide>


                    <SwiperSlide>
                        <Link href='/salon/apple'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/Apple(The Original).webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Apple</h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href='/salon/bodycraft'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/BodyCraft.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>BodyCraft</h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href='/salon/cocomelon'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/Cocomelon.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>CocoMelon</h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href='/salon/femina-flaunt'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/feminaflaunt.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Femina Flaunt</h1>
                            </div>
                        </Link>
                    </SwiperSlide>



                    <SwiperSlide>
                        <Link href='/salon/the-first'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/TheFirst.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>The First </h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href='/salon/tip-and-toe'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/timntoe.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Tip & Toe</h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href='/salon/toni-and-guy'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/toninguy.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Toni & Guy </h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    
                    <SwiperSlide>
                        <Link href='/salon/lookwell'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/LookWell.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>LookWell </h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    
                    <SwiperSlide>
                        <Link href='/salon/kprive'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/Kprive.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Kprive </h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    

                    
                    <SwiperSlide>
                        <Link href='/salon/lemon'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/lemon.webp' alt='salon' width={360} height={172} className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Lemon </h1>
                            </div>
                        </Link>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Link href='/salon/houseofbumble'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/HouseOfBumble.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>House Of Bumble </h1>
                            </div>
                        </Link>
                    </SwiperSlide> */}

                </Swiper>


                <button className='popular_prev p-2 hidden sm:block shadow rounded-full  absolute left-[-25px] top-[50%] z-10 text-[white] bg-blue-500'><ChevronLeft /> </button>
                <button className='popular_next p-2 hidden sm:block shadow rounded-full absolute right-[-25px] top-[50%] z-10  text-[white] bg-blue-500'><ChevronRight /> </button>

                <div className="custom-pagination">
                    {renderPagination()}
                </div>
                {/* <Link href='/all-partners'>
                    <button className='hide_on_small hover:text-[white] text-blue-600 bg-[#3554D10D] px-[10px] py-[10px] hover:bg-[#3554D1]'>
                        <span className='flex gap-[10px]'>View All Salons <ArrowUpRight /> </span>
                    </button>
                </Link> */}
            </div>

        </>
    )
}

export default PopularSalonsCrousal