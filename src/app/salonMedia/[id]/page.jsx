import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

import axios from 'axios'
import Media from './Media'



const page = async ({ params }) => {

  let salonsInfo;

  try {
    salonsInfo = await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/v1/salon/${params.id.split("-")[params.id.split("-").length - 1]}`,
      params: {
        customerId: 518,
        latitude: "na",
        longitude: "na",
        id: params.id
      }
    });

    // Check if the status code is not 200 (e.g., 404 Not Found)
    if (salonsInfo.status !== 200 || salonsInfo.data.status !== "Success") {
      throw new Error("Failed to fetch salon info");
    }

  } catch (error) {
    console.error("Error fetching salon info:", error);

    return (
      <div className='flex justify-center items-center w-full h-screen'>
        {error.response?.status === 404 ? "Salon not found (404)" : "Could not load the salon info"}
      </div>
    )
  }

  return (
    <div>
      <Navbar />
        <Media images={salonsInfo.data?.data.salon?.salonData?.[0].mediaByCategories.images[0].photo_urls.split(",")} />


      <Footer />
    </div>
  )
}

export default page



