
import Navbar from "../../components/Navbar"
import ContactUsForm from "./ContactUsForm"
import Footer from "../../components/Footer"
import DownloadPopUp from "../../components/DownloadPopUp"
import ScrollToTop from "../../components/ScrollToTop"


const Contact = () => {

  return (
    <div>
      <Navbar />
        <ContactUsForm />
        <Footer />
        <ScrollToTop />

        <DownloadPopUp  />
    </div>
  )
}

export default Contact