import React from 'react'
import Navbar from '../../components/Navbar'
import Header from './Header'
import WhyUs from './WhyUs'
import TestimonialCrousal from './TestimonialCrousal'
import Form from './Form'
import Footer from '../../components/Footer'

const index = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar />
        <Header />
        <WhyUs />
        <TestimonialCrousal />
        <Form />
        <Footer/>
    </div>
  )
}

export default index