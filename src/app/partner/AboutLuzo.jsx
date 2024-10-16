import React from 'react'
import Image from 'next/image'


const AboutLuzo = () => {
   

    const about = [
        {
            icon: "/partnerSalon.png",
            benefit: "700+ Partners"
        },
        {
            icon: "/Barbershop.png",
            benefit: "75,000+ Appointments"
        },
        {
            icon: "/customer-review.png",
            benefit: "2,00,000+ Downloads"
        }
    ]



  return (
    <div className='flex flex-col gap-[17px] mx-[15px] px-3 my-[30px]  max-w-[1200px] mx-auto'>
        <h2 className='text-[20px] sm:text-[30px] font-semibold'>About LUZO</h2>
        <div className='flex flex-wrap gap-[5px]'>
                {
                    about.map((ele)=>{
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

export default AboutLuzo
