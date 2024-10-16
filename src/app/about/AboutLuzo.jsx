import Image from 'next/image'
import DownloadLinks from '../../components/DownloadLinks'

const AboutLuzo = () => {
  return (
      <div className="sm:px-[120px] px-[10px] py-[20px] flex flex-col max-w-[1500px] mx-auto">
        <h1 className="font-bold text-[30px] mb-[16px]">Who Are We </h1>
        <div className="flex lg:flex-row  flex-col lg:items-center justify-between sm:flex-wrap">
              
              
              <div className="flex flex-col gap-[9px]  text-[16px] sm:leading-[30px] order-1 ">
                  <p >LUZO is here to digitize and revolutionize your salon and spa experience! We know the bliss of enjoying a relaxing massage after a long week at work and the delight of gossiping with your bff over a plush manicure! And we would love to partake in these little joys of your life! When everything is available at the click of a button - from the prettiest dresses to the fanciest shoes, from your everyday groceries to your favourite food - why should the beauty and wellness industry be left behind? With this goal, we set out to create LUZO - your one-stop destination to browse through and book appointments at your preferred salons, spas & dermatologists! </p>
                  <p>Our easy-to-use application allows you to peruse the wide range of services offered by the salons, spas and clinics in your vicinity and hand pick the ones you desire to avail.</p>
                  <p>All you have to do is simply Add to Cart and Book Now, and voila! It&apos;s time to unwind at the spa and adorn at the salon - now at the touch of a button. So put those freshly manicured fingers to good use - book your next appointment through the LUZO app.</p>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing&apos;and typesetting industry. Lorem Ipsum has been &apos;the industry&apos;s standard dummy text ever since the &apos;1500s, when an unknown printer took a galley of &apos;type and scrambled it</p> */}
              </div>
         
               {/* <Image src="/img/download.webp" className="rounded-xl sm:py-none py-[20px] lg:max-w-[50%] order-3 " alt="img" width={636} height={477}/> */}
        
        {/* <DownloadLinks className={"my-[30px]  sm:flex-start justify-center gap-[10px] order-2 sm:order-4"} /> */}
        </div>

    </div>
  )
}

export default AboutLuzo