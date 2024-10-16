"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PhotosSection = ({ images, mediaLink }) => {
  // console.log(images);

  return (
    <section id="photos" className="p-2 max-w-[1400px] mx-auto mt-2">
      <h2 className="text-2xl sm:text-[32px] font-semibold mb-4">Photos</h2>
      <div className='flex sm:gap-14 gap-2 rounded-md mb-4'>
        {/* {images?.map((img) => {
          return <Image src={img} alt="Salon Photo 1" width={48} height={48} className="w-[48%] h-48 rounded-md" />
        })} */}
        <Link href={mediaLink} className='text-center sm:text-[22px]'>
          <Image src={images[0]} alt="Salon Photo 1" width={300} height={300} className="w-full mb-2 h-full rounded-md" />
          All Photos({images.length})
        </Link>
        <Link href={mediaLink} className='text-center sm:text-[22px]'>
          <Image src={images[1]} alt="Salon Photo 1" width={300} height={300} className="w-full mb-2 h-full rounded-md" />
          Ambience({images.length})
        </Link>
      </div>
    </section>
  );
};

export default PhotosSection;
