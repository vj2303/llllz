import { LocateFixed } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Address = ({ address, mapLink }) => {
    return (
        <div className='p-2 max-w-[1400px] mx-auto mt-2'>
            <h2 className="text-2xl sm:text-[32px] font-semibold mb-2">Address</h2>
            <p className='sm:text-[18px]'>
                {address}  
            </p>

            <Link target='_blank' href={mapLink} ><p className='flex gap-2 items-center text-blue-400 underline mt-4'><LocateFixed />Get Direction</p></Link>
        </div>
    )
}

export default Address