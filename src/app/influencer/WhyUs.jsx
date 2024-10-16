import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
    const benefits = [
        "Free salon services", "Affiliate marketing opportunity", "Feature on LUZO Social Media", "Exclusive offers for you"
    ]
    return (
        <div className='flex flex-col gap-[15px] px-5 mx-[15px] my-[30px]  max-w-[1200px] mx-auto'>
            <h2 className='text-[20px] sm:text-[30px] font-semibold'>Become a part of the campaign</h2>
            <p className='text-[#7E7E7E] text-[16px] font-[400px] leading-[21px]'>Join our exclusive community tailored just for you. We&apos;re all about empowering your creativity and providing a platform for your unique voice to shine. Get ready to network, grow your influence, and be part of a community that celebrates your individuality while elevating your beauty & wellness.</p>
            <ul className='flex flex-col text-[15px] text-[#707070] gap-[5px]'>
                {
                    benefits.map((ele) => {
                        return <li key={ele} className='list-disc list-inside marker:text-[#707070] marker:font-bold'>{ele}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default WhyUs