"use client"

import Navbar from "../../components/Navbar"
import Salons from "./Salons"
import Footer from "../../components/Footer"
import DownloadPopUp from "../../components/DownloadPopUp"
import ScrollToTop from "../../components/ScrollToTop"

const page = () => {
  return (
    <div>
      <Navbar />
      <Salons />
      <Footer />
      <ScrollToTop />
      <DownloadPopUp />
    </div>
  )
}

export default page