'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'


const DownloadPopUp = () => {
    
    const [showDownload, setShowDownload] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) return null;


  return (
    <div className={`bg-black w-full fixed bottom-[0%] z-20 text-white flex items-center justify-between gap-[2px] py-4 px-2 ${showDownload?"visible":"invisible"} transition sm:hidden`}>
    <button onClick={()=>setShowDownload(false)}><X/></button>
    <Image src="/img/icon.webp" height={50} width={50} alt="logo" className='w-[35px] aspect-square' />
    <p className='whitespace-nowrap text-[13px]'>Download LUZO to book now!</p>
    <button className='popup_btn_gradient rounded-md px-2 py-1'><Link href={"/loading"}>Download</Link></button>
  </div>
  )
}

export default DownloadPopUp