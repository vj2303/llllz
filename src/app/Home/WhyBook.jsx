import React from 'react'
import { CircleCheckBig } from 'lucide-react';



export const WhyBook = () => {
  return (
    <div className='pt-[50px]'>  
          <h1 className='text-center text-[30px] font-bold'>Why Book with LUZO</h1>
      <div className=' flex justify-center items-center '>

          <div className='flex sm:flex-row flex-col sm:gap-[140px] mt-[20px] mb-[40px]  '>

             <div>
                <div className='flex gap-[20px] p-5 items-center'> <span className='text-blue'><CircleCheckBig style={{ color: 'blue', width: '50px', height: '50px'  }} /></span><p className='text-[20px]'>Free booking</p></div>
                <div className='flex gap-[20px] p-5 items-center'> <span className='text-blue'><CircleCheckBig style={{ color: 'blue', width: '50px', height: '50px'  }} /></span><p className='text-[20px]'> No cancellation fee </p></div>      
             </div>
             
             <div>
               <div className='flex gap-[20px] p-5 items-center'> <span className='text-blue'><CircleCheckBig style={{ color: 'blue', width: '50px', height: '50px'  }} /></span><p className='text-[20px]'>Pay after service</p></div>
               <div className='flex gap-[20px] p-5 items-center'> <span className='text-blue'><CircleCheckBig style={{ color: 'blue', width: '50px', height: '50px'  }} /></span><p className='text-[20px]'> Exclusive offers</p></div>
              
             </div>
          </div>

    </div>

    </div>

  )
}








