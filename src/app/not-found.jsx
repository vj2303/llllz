import React from 'react'
import Link from 'next/link';

const NotFound = () => {

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <p className=' border-r-2 border-black h-10 flex items-center text-[20px] text- font-medium px-[10px]'>404  </p>
        <span className='px-[10px]'><p>This Page Could Not Found </p>
          <Link href='/' className='text-[blue]'>Go To Home Page</Link></span>
      </div>
    </>
  )
}

export default NotFound