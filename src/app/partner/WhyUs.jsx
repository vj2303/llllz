import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
    const benefits = [
        {
            icon: "/coinInHand.png",
            benefit: "25% more revenue"
        },
        {
            icon: "/graph.png",
            benefit: "Get new customers"
        },
        {
            icon: "/Commercial.png",
            benefit: "Boost brand visibility"
        },
        // {
        //     icon: "/graph.png",
        //     benefit: "700+ Partners"
        // },
        // {
        //     icon: "/graph.png",
        //     benefit: "75,000+ Appointments"
        // },
        // {
        //     icon: "/graph.png",
        //     benefit: "2,00,000+ Downloads"
        // },
    ]
    return (
        <div className='flex flex-col gap-[17px] px-3 mx-[15px] my-[30px]  max-w-[1200px] mx-auto'>
            <h2 className='text-[20px] sm:text-[30px] font-semibold leading-8'>Why partner with LUZO?</h2>
            <p className='text-[16px] text-[#707070] font-normal leading-[19px]'>If you always wonder about marketing your business, LUZO is your one-stop solution!</p>
            <div className='flex flex-wrap gap-[5px]'>
                {
                    benefits.map((ele)=>{
                        return <span key={ele.benefit} className='flex flex-col items-center text-center gap-[5px] w-[32%] shadow-lg px-[5px] py-[15px] rounded-md'>
                            <Image src={ele.icon} alt='benefit' width={30} height={30} />
                            <p className='font-normal text-[14px]'>{ele.benefit}</p>
                        </span>
                    })
                }
            </div>
        </div>
    )
}

export default WhyUs