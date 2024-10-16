import React from 'react'
import Link from 'next/link';


const page = () => {
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
    <p className=' border-r-2 border-black h-10 flex items-center text-[20px] text- font-medium px-[10px]'>401  </p>
    <span className='px-[10px]'><p>Something went wrong our team is working on it</p>
      <Link href='/all-partners' className='text-[blue]'>View all partners</Link></span>
  </div>
  </>
  )
}

export default page
