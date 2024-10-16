import React from 'react'
import Navbar from '../../components/Navbar'
import Header from './Header'
import WhyUs from './WhyUs'
import TestimonialCrousal from './TestimonialCrousal'
import Form from './Form'
import AboutLuzo from './AboutLuzo'
import Footer from '../../components/Footer'
import Carousel from './Carousel'
// import SalonCrousal from '../Home/SalonCrousal'

const index = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar />
        <Header />
        <WhyUs />
        <AboutLuzo/>
        {/* <SalonCrousal/> */}
        <Carousel/>
        {/* <TestimonialCrousal /> */}

        <Form />
        <Footer/>
    </div>
  )
}

export default index