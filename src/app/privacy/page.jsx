import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"

const { Privacy } = require("./Privacy")

const page = () => {
  return (
    <>
      <Navbar />
      <Privacy />
      <Footer />
    </>
  )
}

export default page