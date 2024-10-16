"use client"
import Image from "next/image";
import { useState } from "react";


export default function ImageComponent({ imgUri }) {
    const [fallbackUri, setFallbackUri] = useState(null)
    return (
        <Image src={fallbackUri?fallbackUri:imgUri} onError={() => setFallbackUri("/luzo_partners.jpg")} alt='img' width={2200} height={200} className="col-12 w-full rounded-4 aspect-w-16 aspect-h-9 sm:h-[380px] object-fill" />
    )
}