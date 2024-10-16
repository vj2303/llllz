import React from 'react'
import Image from 'next/image'
import Link from "next/link"

const Team = () => {
  const teams = [
    {
      img: '/teams/anurav.webp',
      name: 'Anurav Dave',
      position: 'Founder & CEO',
      linkedin: 'https://www.linkedin.com/in/anuravdave?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      img: '/teams/maan.webp',
      name: 'Maan Jetley',
      position: 'Co-Founder & COO',
      linkedin: 'https://www.linkedin.com/in/maanjetley?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      img: '/teams/nikhil.webp',
      name: 'Nikhil Kalwani',
      position: 'Co-Founder & CFO',
      linkedin: 'https://www.linkedin.com/in/nikhil-kalwani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
  ]

  return (
    <div className='px-[10px] bg-[#ECF4FF] mt-[50px] pb-12'>
      <h1 className='font-bold text-center text-[30px] py-[40px]'>Our Team</h1>
      <div className='flex flex-col gap-4 sm:flex-row sm:gap-[80px] justify-center items-center'>
        {teams.map((teamMember, index) => (
          <div key={index} className='flex '>
            <div className='text-center mb-4 flex flex-col gap-[10px]'>
            <Link target="_blank" href={teamMember.linkedin}>
              <Image src={teamMember.img} width={185} height={232} alt={teamMember.name} className='h-[30vh] w-[30vh] rounded-md' />
              <div className='flex items-center gap-2 mt-3'>
                  <li className="flex items-center  gap-[10px]"><Image src="/img/linkedin.svg" width='25' height='25' alt="linkedin" /></li>
                 <div className="text-left ">
                  <h3 className='text-[#343A40] leading-[18px] text-[14px] font-semibold'>{teamMember.name}</h3>
                  <p className='text-[#707070] text-[12px] leading-[18px]'>{teamMember.position}</p>
                </div>
              </div>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team;
