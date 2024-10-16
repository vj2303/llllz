"use client"

import { CircleCheck } from 'lucide-react';
import React, { useState } from 'react';

const AboutSection = ({ about, amenties }) => {
  function formatString(str) {
    return str
      .split('_') // Split the string by underscore
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(' '); // Join words back with spaces
  }

  const [isAboutVisible, setIsAboutVisible] = useState(false)
  return (
    <section id="about" className="p-2 max-w-[1400px] mx-auto mt-6">
      <h2 className="text-2xl sm:text-[32px] font-semibold mb-2">About Us</h2>
      <div>
        <p className={`${isAboutVisible ? "" : "line-clamp-5"} sm:text-[18px] relative`}>
          {about}
          {about?.length > 150 && <p className='text-blue-400  absolute bottom-0 right-2 bg-white px-2' onClick={() => setIsAboutVisible(prev => !prev)}>{isAboutVisible ? "Read Less" : "Read More"}</p>}
        </p>
      </div>
      <h2 className="text-2xl sm:text-[32px] font-semibold mb-2 mt-5 flex flex-wrap">Amenities</h2>
      <div className='flex gap-4'>
        {
          amenties?.map((amenity) => {
            return <p key={amenity} className='flex gap-2 sm:text-[18px] '><CircleCheck color='#fff' fill='#000' />{formatString(amenity)}</p>
          })
        }

      </div>
    </section>
  );
};

export default AboutSection;
