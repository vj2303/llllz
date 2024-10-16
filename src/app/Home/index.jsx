"use client"
import SalonCrousal from './SalonCrousal'
import PopularSalonsCrousal from './PopularSalonsCrousal'
import Footer from '../../components/Footer'
import Discount from './Discount'
import Trust from './Trust'
import Testimonial from './Testimonial'
import Navbar from '../../components/Navbar'
import HeaderCrousal from './HeaderCrousal'
import Banner from './Banner'
import HowToUse from './HowToUse'
import { X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";
import Image from 'next/image'
import DownloadPopUp from '../../components/DownloadPopUp'
import { WhyBook } from './WhyBook'

const Home = () => {

  const [showDownload, setShowDownload] = useState(true)

  return (
    <div >
      <Helmet>
                <meta name="description" content="LUZO | Avail Premium Offers at salons and spas" />
                <title>LUZO | Avail Premium Offers at salons and spas</title>
                {/* <base href='https://www.luzo.app' />  */}
              
      </Helmet>

      <Navbar />
      <HeaderCrousal />
      <SalonCrousal />
      <Discount />
      <WhyBook />
      <HowToUse />
      <PopularSalonsCrousal />
      <Trust />
      <Testimonial />
      <Banner />
      <DownloadPopUp />
      <Footer />

  
    </div>
  )
}

export default Home