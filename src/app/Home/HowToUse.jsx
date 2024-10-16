"use client"

import React, { useEffect, useRef } from 'react'
import { Play, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
// import { Play } from 'lucide-react';

const HowToUse = () => {
    const modalRef = useRef(null)
    const videoRef = useRef(null)

    const handleOpenModal = () => {
        modalRef.current.showModal()
        // videoRef.current.requestFullscreen()
        videoRef.current.play()
        document.body.style.overflow = "hidden";

    }
    const handlCloseModal = () => {
        modalRef.current.close()
        videoRef.current.pause()
        document.body.style.overflow = "scroll"
    }
    useEffect(() => {
        const handleEscape = (event) => {
          if (event.key === 'Escape') {
            handlCloseModal()
          }
        };
    
        document.addEventListener('keydown', handleEscape);
    
        // Clean up the event listener when the component unmounts
        return () => {
          document.removeEventListener('keydown', handleEscape);
        };
      }, []);

    return (
        <div className='bg-[#ECF4FF] py-7 sm:py-0'>
               <div className='sm:hidden px-[10px] text-center '>
                    <p className='text-[32px] font-semibold text-[#051036] sm:text-[40px]'>How to use LUZO?</p>
                    <p>Watch the video to know more</p>
                </div> 

            <div className='sm:mx-[100px] px-[10px] flex justify-center items-center gap-[32px] sm:p-[40px] z-30 '>
                {/* <div className='flex flex-col text-center  p-[8px] shadow-md rounded-xl text-[32px] font-bold relative max-w-[500px]'>
                    <span className='p-4 bg-white rounded-full shadow absolute top-[40%] left-[40%] cursor-pointer ' onClick={handleOpenModal}>
                        <Play />
                    </span>

                </div> */}
            <div className="relative sm:w-[37%] w-[90%] h-[90%] sm:h-[49%]">
              <Image
                src='/phone_14_01-removebg-preview.png'
                width={600}
                height={300}
                alt='Phone Frame'
                className='w-full h-[18%]'
              />
              <Link
                href="https://www.instagram.com/reel/C5lNwi4IAtV/?igsh=dXF3YzV3M2lyOG84"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src='/instagram_thumbnail.jpg'
                  width={600}
                  height={300}
                  alt='Instagram Thumbnail'
                  className='absolute sm:rounded-3xl rounded-xl top-[9%] left-[31%] w-[39%] h-[82%]'
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#81D0F4] rounded-full p-1">
                  <Play className="text-white sm:w-8 sm:h-8 w-4 h-4" />
                </div>
              </Link>
            </div>

                <div className='hidden sm:block'>
                    <p className='text-[32px] font-semibold text-[#051036] sm:text-[40px]'>How to use LUZO?</p>
                    <p>Watch the video to know more</p>
                </div>

            </div>
            {/* <dialog ref={modalRef} className='backdrop:backdrop-blur-sm half-transparent-backdrop z-30 overflow-hidden bg-transparent modal animated'>
                <div className='flex flex-col items-center relative'>
                <span className='bg-black text-white p-4 rounded-full absolute top-4 cursor-pointer hover:bg-blue-400 z-40' onClick={handlCloseModal}>
                    <X />
                </span>
                <Video width="100%" height="65%" controls controlsList='nodownload' autoPlay loop ref={videoRef} >
                    <source src='/img/luzo_pay.mp4' type='video/mp4' className=''   />
                </Video>
                  
                  <video controls loop playsInline className={"sm:w-[35%] h-full mx-auto rounded-md"} ref={videoRef}>
                        <source src='https://www.instagram.com/reel/CwnR-rftgrl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' type='video/mp4' />
                    </video>

                </div>
            </dialog> */}


        </div>
    )
}

export default HowToUse