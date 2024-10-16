import React from 'react'
import Info from './Info'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

import Carousel from './Carousel'
import Services from './Services'
import SwitchBar from './SwitchBar'
import PhotosSection from './PhotoSection'
import ReviewsSection from './ReviewSection'
import AboutSection from './AboutSection'
import axios from 'axios'
import Offers from './Offers'
import Address from './Address'



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

  const getAmenityKeysWithOne = (amenity) => {
    // Use Object.keys to loop through the object and filter the keys where value is 1
    if (amenity === "null") return null;
    return Object.keys(amenity).filter((key) => amenity[key] === 1);
  };

  const info = salonsInfo.data?.data.salon?.salonData?.[0].salon
  const services = salonsInfo.data?.data?.services
  const images = salonsInfo.data?.data.salon?.salonData?.[0].mediaByCategories.images[0].photo_urls.split(",")
  const about = salonsInfo.data?.data.salon?.salonData?.[0].salon.about
  const amenties = salonsInfo && salonsInfo.data?.data.salon?.salonData?.[0].salon.amenity ? getAmenityKeysWithOne(salonsInfo.data?.data.salon?.salonData?.[0].salon.amenity) : null
  const address = salonsInfo.data?.data.salon?.salonData?.[0].salon.salon_address
  const mapLink = salonsInfo.data?.data.salon?.salonData?.[0].salon.google_map_link ? salonsInfo.data?.data.salon?.salonData?.[0].salon.google_map_link : "#"
  const reviews = salonsInfo.data?.data.reviews


  return (
    <div >
      {
        salonsInfo && <div>
          <Navbar />
          <Carousel images={images} />
          <Info info={info} mapLink={mapLink} />
          <Offers />
          <SwitchBar />
          <Services services={services} />
          <PhotosSection mediaLink={`/salon-photos/${params.id}`} images={images} />
          <AboutSection about={about} amenties={amenties} />
          <Address address={address} mapLink={mapLink} />
          <ReviewsSection reviews={reviews} />
          <Footer />
        </div>
      }
    </div>
  )
}

export default page



