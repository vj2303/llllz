
import Hero from "./Hero"
import AboutLuzo from "./AboutLuzo"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import DownloadPopUp from "../../components/DownloadPopUp"
import ScrollToTop from "../../components/ScrollToTop"
import Feature from "./Feature"
import Team from "./Team"



const About = () => {
  
  // const [showDownload, setShowDownload] = useState(true)
  return (
    <div>

        <Navbar />
        <Hero />
        <AboutLuzo />
        <Feature />
        <Team />
        <Footer />
        <ScrollToTop/>

        <DownloadPopUp  />
        
    </div>
  )
}

export default About