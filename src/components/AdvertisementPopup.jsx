"use client"
import { Facebook, Instagram, Linkedin, Twitter, X, Youtube } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Copy } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import Link from 'next/link';



const AdvertisementPopup = () => {
    const advertisementRef = useRef(null)
    const [isClosed, setIsClosed] = useState(false)
    const [text, setText] = useState("Copy")
    const [coupon, setCoupon] = useState("Dhruv40")
    const [timeLeft, setTimeLeft] = useState(120); // 120 seconds = 2 minutes

    useEffect(() => {
        // If time left is 0, stop the timer
        if (timeLeft === 0)
            return handleCloseModal(true, false);

        // Set up a countdown timer
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(timer);
    }, [timeLeft]);

    // Format the time left in minutes and seconds
    const formatTime = (time, span) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        if (span === "hours") {
            return "00"
        }
        if (span === "minutes") {
            return "0" + minutes
        }
        if (span === "seconds") {
            if (seconds < 10) {
                return "0" + seconds
            }
            return seconds
        }
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    };

    useEffect(() => {
        if (!isClosed) {
            const intervalId = setTimeout(function () {
                advertisementRef.current.showModal()
                document.body.style.overflow = "hidden";
            }, 25000);

            // Cleanup function to clear the interval
            return () => clearTimeout(intervalId);
        }
    }, [isClosed]);

    const handleCloseModal = (isInstant, isCopied) => {
        if (isCopied && !coupon) {
            setText("Enter Coupon")
            return setTimeout(() => {
                setText("Copy")
            }, 1000);
        }
        localStorage.setItem("advertisementPopup", false)
        if (isCopied) {
            setText("Copied")
        }
        if (isInstant) {
            document.body.style.overflow = "scroll";
            // advertisementRef.current.style.display = "hidden"
            return advertisementRef.current.close()
        }
        setTimeout(() => {
            advertisementRef.current.close()
            // advertisementRef.current.style.display = "hidden"
            document.body.style.overflow = "scroll";
        }, 1000)

    }

    useEffect(()=>{
        if (localStorage.getItem === null) {
            localStorage.setItem("advertisementPopup", true)
        }
        setIsClosed(localStorage.getItem("advertisementPopup"))
    }, [])

    return (

<dialog ref={advertisementRef} className='half-black-backdrop sm:min-h-[80vh] aspect-[9/16] p-0 bg-transparent'>
    {/* <div className=''> */}
        <div className='relative flex flex-col items-center justify-center p-0 bg-transparent aspect-[9/16] sm:h-[80vh] mx-auto'>
            <Image src={"/1.png"} alt='discount' width={400} height={500} className='sm:h-full w-full h-[500px] mx-auto' />
            <X className='bg-gray-400 rounded-full p-[2px] text-white cursor-pointer absolute top-2 right-2' size={28} onClick={() => handleCloseModal(true, false)} />
            
            <Link target="_blank" href={"/loading"} className='popup_btn_gradient text-white sm:px-4 px-2 sm:py-[10px] py-1 rounded flex justify-center outline-none absolute bottom-[3%] left-[calc(50% - 150px )]'>
                    {/* <button className='popup_btn_gradient text-white sm:px-4 px-2 sm:py-[10px] py-1 rounded flex justify-center outline-none absolute bottom-6 left-1/2 transform -translate-x-1/2'> */}
                        Download LUZO
                    {/* </button>  */}
            </Link>
        </div>
                {/* <span className='flex gap-2'>
                    
                    <p className='bg-[#FAF9F6] text-black px-4 py-4 shadow rounded-md font-bold text-3xl text-center w-[70px]'>{formatTime(timeLeft, "minutes")}</p>
                    <p className='bg-white text-black py-4  font-bold text-3xl'>{":"}</p>
                    <p className='bg-[#FAF9F6] text-black px-4 py-4 shadow rounded-md font-bold text-3xl text-center w-[70px]'>{formatTime(timeLeft, "seconds")}</p>

                </span>
                <span className='max-w-[80%]'>
                    <p className='font-bold text-2xl text-center'>50% off + 100Rs cashback via postpaid zomato coupon code</p>
                    <p className='text-center'>50% off + 100Rs cashback via postpaid LUZO coupon code</p>
                </span> */}
                {/* <div className='flex justify-between mx-auto border-4 custom-dotted-border sm:max-w-[50%] rounded-md'>

                    <input 
                        type='text' 
                        placeholder='Enter your coupon' 
                        className='p-2 pr-[12px] rounded-md outline-none sm:w-[50%] w-[60%] text-[20px]' 
                        value={coupon} 
                        onChange={e => setCoupon(e.target.value)} 
                        disabled 
                    />
                   <button 
                        className='bg-[#64B3F2] text-white px-4 rounded py-[13px] flex justify-center sm:gap-4  outline-none' 
                        onClick={() => { 
                        navigator.clipboard.writeText(coupon); 
                        handleCloseModal(false, true);
                        }}
                    >
                      <Copy />
                      {text}
                   </button>
                   
                </div> */}

                  
{/* 
            <span className='flex gap-[30px] sm:gap-[50px] mb-8'>
                <Link href='https://www.facebook.com/luzoapp/'>
                <span className="hover:text-[#094FB7]"> <FontAwesomeIcon icon={faFacebookF} className="text-[20px]" /></span>
              </Link>
               <Link href='https://twitter.com/luzo_app?s=11&amp;t=W_nfHtVga_uF3WIz70N1sg'>
               <span className="hover:text-[#094FB7]">  <FontAwesomeIcon icon={faTwitter} className="text-[20px]" /></span>  
               </Link>
               <Link href='https://instagram.com/luzo.app?igshid=YmMyMTA2M2Y='>
               <span className="hover:text-[#094FB7]"> <FontAwesomeIcon icon={faInstagram} className="text-[20px]" /></span>    
              </Link>
              <Link href='https://www.linkedin.com/company/salonsurf/'>
              <span className="hover:text-[#094FB7]"> <FontAwesomeIcon icon={faLinkedinIn} className="text-[20px]" /></span>         
               </Link>
            </span> */}


            {/* </div> */}
        </dialog>
    )
}

export default AdvertisementPopup