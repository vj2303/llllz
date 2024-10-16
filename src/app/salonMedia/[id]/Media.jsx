"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Media = ({ images }) => {
    const [active, setActive] = useState("all")
    return (
        <div className='p-2'>
            <div className='flex mt-[100px] mb-[50px]'>
                <p className={`font-semibold text-[22px] flex-grow text-center ${active === "all" ? "border-b-4 border-black" : ""}`} onClick={()=>setActive("all")}>All Photos</p>
                <p className={`font-semibold text-[22px] flex-grow text-center ${active === "ambience" ? "border-b-4 border-black" : ""}`} onClick={()=>setActive("ambience")}>Ambience</p>
            </div>
            <div className='flex flex-wrap gap-2'>
                {
                    images.map((img, i)=>{
                        return <Image key={i} src={img} alt="Salon Photo 1" width={100} height={100} className="w-full h-full rounded-md" />
                    })
                }
            </div>
        </div>
    )
}

export default Media