"use client"
import React, { useEffect } from 'react'

import 'swiper/css';
import 'swiper/css/pagination';
import { ChevronDown, Copy, Heart, MapPin,  Share2, Phone, ChevronRight, CircleArrowRight } from 'lucide-react';

import { Tooltip as ReactTooltip } from 'react-tooltip'
import TimingPopup from './TimingPopup';


import { useState } from 'react';
import axios from 'axios';
import LocationsPopup from './Locations';
import Link from 'next/link';

const Info = ({ info, mapLink }) => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLocationsPopup, setIsLocationsPopup] = useState(false)
  const [timings, setTimings] = useState([])
  const [relatedSalons, setRelatedSalons] = useState([])
  const [tooltipContent, setTooltipContent] = useState('Copy URL');

  const fetchTimings = async () => {
    try {
      const res = await axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/get/salon/timings`,
        params: {
          salonId: info.id,
          verify: process.env.NEXT_PUBLIC_VERIFY
        }
      })
      setTimings(res.data.salonTiming)
      // alert("Fetched successfully")
    } catch (error) {
      console.error("Error fetching salon info:", error);

      return (
        <div className='flex justify-center items-center w-full h-screen'>
          {error.response?.status === 404 ? "Salon not found (404)" : "Could not load the salon info"}
        </div>
      )
    }
  }

  const fetchRelatedSalons = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/v1/salon/${info.id}/related/salons`,
      })
      setRelatedSalons(res.data.data.related_salons)
      // alert("Fetched successfully")
    } catch (error) {
      console.error("Error fetching salon info:", error);

      return (
        <div className='flex justify-center items-center w-full h-screen'>
          {error.response?.status === 404 ? "Salon not found (404)" : "Could not load the salon info"}
        </div>
      )
    }
  }

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    fetchTimings()
    fetchRelatedSalons()
  }, [info.id, info])

  const handleCopyClick = () => {
    if (!relatedSalons[0].salon_share_link) {
      setTooltipContent("URL not available")
    }
    // Copy the URL to the clipboard
    navigator.clipboard.writeText(relatedSalons[0].salon_share_link)
      .then(() => {
        // Change tooltip content to "Copied URL"
        setTooltipContent('Copied URL');

        // Reset tooltip content after a delay
        setTimeout(() => {
          setTooltipContent('Copy URL');
        }, 2000); // Tooltip reverts after 2 seconds
      })
      .catch(err => {
        console.error('Failed to copy the URL', err);
      });
  };


  return (
    <div className="sm:max-w-[1400px] mx-auto  h-full">
      {/* Basic Info Section */}
      <div className="px-4 mt-4">
        <div className='flex sm:gap-12 justify-between sm:justify-start'>
          <h1 className="text-2xl sm:text-[32px] font-semibold sm:max-w-[50%]">{info?.salon_name}, {info?.salon_location}</h1>
          <span className='flex items-center  gap-20 sm:gap-10'>
            {relatedSalons && relatedSalons.length > 1 && <ChevronDown className="sm:size-10 cursor-pointer" onClick={() => setIsLocationsPopup(!isLocationsPopup)} />}

            <div className="relative cursor-pointer flex items-center">
              {/* Copy Icon with Tooltip */}
              <Share2
                data-tooltip-id="copy-tooltip" // Associate tooltip with this id
                data-tooltip-content={tooltipContent} // Dynamic tooltip content
                onClick={handleCopyClick}
                tabIndex={0} // Make it focusable for accessibility
                className="focus:outline-none focus:ring-0 sm:size-8 cursor-pointer" // Remove default focus styles
              />

              {/* Tooltip Component */}
              <ReactTooltip id="copy-tooltip" place="bottom" effect="solid" />
            </div>

          </span>
        </div>

        <div className="flex items-center text-gray-500 space-x-2">
          <span className='text-[12px] sm:text-[18px]'>
            {info?.salon_gender && info?.salon_gender.charAt(0).toUpperCase() + info?.salon_gender.slice(1)} | {info?.salon_price_rating}
          </span>
        </div>

        <div>
          {timings.length > 1 && <div className="inline-flex items-center bg-gray-200 py-2 px-2 rounded-md space-x-3 text-[12px] sm:text-[16px] text-gray-500 mt-2">
            {(new Date().getHours() < Number(timings[new Date().getDay()].working_hours.split("-")[0].split(":")[0])) || (new Date().getHours() > (Number(timings[new Date().getDay()].working_hours.split("-")[1].split(":")[0]) + 12)) ? <span className="text-red-500">Closed Now</span> : <span className="text-green-500">Open</span>}
            <span>|</span>
            <span className='inline-flex items-center gap-1'>
              {(new Date().getHours() < Number(timings[new Date().getDay()].working_hours.split("-")[0].split(":")[0])) ? `Opens Today at ${timings.length > 1 && timings[new Date().getDay()].working_hours.split("-")[0]}` : (new Date().getHours() > Number(timings[new Date().getDay()].working_hours.split("-")[0].split(":")[0])) ? `Closes Today at ${timings.length > 1 && timings[new Date().getDay()].working_hours.split("-")[1]}` : `Opens Tomorrow at ${timings.length > 1 && timings[new Date().getDay() + 1].working_hours.split("-")[0]}`}
              <span onClick={togglePopup} className="cursor-pointer">
                <ChevronDown />
              </span>
            </span>
          </div>}

          {/* Conditionally render the TimingPopup component */}
          {isPopupOpen && <TimingPopup onClose={togglePopup} timings={timings} />}
          {isLocationsPopup && <LocationsPopup onClose={() => setIsLocationsPopup(!isLocationsPopup)} relatedSalons={relatedSalons} />}
        </div>


        {/* Location and Contact */}
        <div className="flex mt-2 sm:text-[16px] text-[12px] space-x-4">
          <button className="flex items-center space-x-2 px-1 sm:px-2 sm:py-3 py-2 bg-gray-200 rounded-lg">
            <Link target='_blank' href={mapLink}>  <span className='flex gap-1 text-gray-500 items-center'> <MapPin  size={20} /> Get Directions  <ChevronRight size={20} /></span>
            </Link>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 bg-gray-200 rounded-lg">
            <span className='flex items-center text-gray-500 gap-1'> <Phone size={18} />Contact</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Info

