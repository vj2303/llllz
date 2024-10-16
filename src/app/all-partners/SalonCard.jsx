import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { brands } from "./salonsData"

function transformStringToURL(input) {
    for (const [key, value] of Object.entries(brands)) {
        if (value.toLowerCase() === input.toLowerCase()) {
            return key.toLowerCase();
        }
    }
    return null;
}

const SalonCard = ({ salon }) => {
    const [fallbackUri, setFallbackUri] = useState(null)
    return (
        <Link href={`/salon/${transformStringToURL(salon.salon_family_name)}`} className={"sm:w-[32%]"}>
            <div className='flex flex-col gap-[20px] shadow-md relative rounded-xl overflow-hidden'>
                {salon.salon_cover_photo_url ? <Image  src={fallbackUri?fallbackUri:salon.salon_cover_photo_url} onError={() => {setFallbackUri("/luzo_partners.jpg")}} alt={salon.salon_family_name} width={600} height={230} className='aspect-video  transform hover:scale-110 transition duration-300 ease-in-out' /> : null}
                <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>{salon.salon_family_name}</h1>
            </div>
        </Link>
    )
}

export default SalonCard



