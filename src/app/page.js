
import SalonCrousal from './Home/SalonCrousal'
import PopularSalonsCrousal from './Home/PopularSalonsCrousal'
import Discount from './Home/Discount'
import Trust from './Home/Trust'
import Testimonial from './Home/Testimonial'
import HeaderCrousal from './Home/HeaderCrousal'
import Banner from './Home/Banner'
import HowToUse from './Home/HowToUse'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DownloadPopUp from '../components/DownloadPopUp'
import ScrollToTop from '../components/ScrollToTop'
import AdvertisementPopup from '../components/AdvertisementPopup'
import { WhyBook } from './Home/WhyBook'

const Home = () => {
  return (
    <div className='relative' >
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
      <Footer />


      <ScrollToTop />
      <DownloadPopUp />
      <AdvertisementPopup />
    </div>
  )
}

export default Home