"use client"

// components/ServicesSection.js
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

const ServicesSection = ({ services }) => {
  const router = useRouter();
  const { id } = useParams();

  return (
    <div id="services" className="mt-3 sm:max-w-[1400px] mx-auto p-2 bg-white">
      <h2 className="text-2xl sm:text-[32px] font-semibold mb-4">Services</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
        {services?.map((service) => (
          <div
            key={service.id}
            className="text-center"
            onClick={() => router.push(`/partner-details/${id}/service-details/service-${service.id}`)}
          >
            <Image
              src={service.image_url}
              alt={service.name}
              width={100} // Fixed width in pixels
              height={100} // Fixed height in pixels
              className="rounded-lg mx-auto"
            />
            <p className="text-[14px] sm:text-[18px] mt-2">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
