"use client";
import Link from "next/link"
import DownloadLinks from "./DownloadLinks"
import Image from "next/image"
import { usePathname } from "next/navigation";


const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="bg-[#3554D1] bg-opacity-5">
      <div className="sm:px-[120px] px-[10px] gap-[30px] pb-[100px] flex flex-col sm:flex-row justify-between   py-[20px] border-t max-w-[1400px] mx-auhref ">
      <ul className="flex flex-col gap-[20px]">
      <h1 className="text-[16px] font-semibold">Pages</h1>
      <Link href="/about">
        <li className={pathname === "/about" ? "text-blue-500" : ""}>
          About Us
        </li>
      </Link>
      <Link href="/partner">
        <li
          className={pathname === "/partner" ? "text-blue-500" : ""}
        >
          Partner With Us
        </li>
      </Link>
      <Link href="/influencer">
        <li
          className={
            pathname === "/influencer" ? "text-blue-500" : ""
          }
        >
          Influencer Program
        </li>
      </Link>
      <Link href="/careers">
        <li className={pathname === "/career" ? "text-blue-500" : ""}>
          Careers
        </li>
      </Link>
      {/* <Link href='/contact'> <li>Get In Touch</li></Link> */}
      <Link href="/privacy">
        <li className={pathname === "/privacy" ? "text-blue-500" : ""}>
          Privacy Policy
        </li>
      </Link>
      <Link href="/terms">
        <li className={pathname === "/terms" ? "text-blue-500" : ""}>
          Terms of Service
        </li>
      </Link>
    </ul>
        <ul className="flex flex-col gap-[20px]">
          <h1 className="text-[16px] font-semibold">Social</h1>
          <Link target="_blank" href='https://www.instagram.com/luzo.app?igshid=YmMyMTA2M2Y%3D'>
            <li className="flex items-center gap-[10px]"><Image src="/img/instagram.svg" width='25' height='21'  alt="instagram" />Instagram</li>
          </Link>

          <Link target="_blank" href='https://www.linkedin.com/company/salonsurf/posts/?feedView=all'>
            <li className="flex items-center gap-[10px]"><Image src="/img/linkedin.svg" width='25' height='21' alt="instagram" />LinkedIn</li>
          </Link>

          <Link target="_blank" href='https://www.youtube.com/channel/UCKOrqE0xVXIdgw1S50gq_vg'>
            <li className="flex items-center gap-[10px]"><Image src="/img/youtube.svg" width='25' height='21' alt="instagram" />Youtube</li>
          </Link>
          <Link target="_blank" href='https://www.facebook.com/luzoapp/'>
            <li className="flex items-center gap-[10px]"><Image src="/img/facebook.svg" width='25' height='21' alt="instagram" />Facebook</li>
          </Link>

          {/* <Link target="_blank" href='https://x.com/luzo_app?s=11&t=W_nfHtVga_uF3WIz70N1sg&mx=2'>
            <li className="flex items-center gap-[10px]"><Image src="/img/twitter.svg" width='25' height='21' alt="instagram" />Twitter</li>
          </Link> */}




        </ul>
        <ul className="flex flex-col gap-[20px]">
          <h1 className="text-[16px] font-semibold">Contact us</h1>
          <Link target="_blank" href='https://api.whatsapp.com/send?phone=917738182493'>  <li>WhatsApp</li></Link>
          <Link target="_blank" href='mailto:info@luzo.app'>   <li className="">Email</li></Link>
          {/* <div className="flex flex-col gap-[10px] sm:hidden">
            <Link href='/loading'><Image src="/Image/appshrefre.webp" alt="Image" width='150' /></Link>
            <Link href='/loading'><Image src="/Image/playshrefre.webp" alt="Image" width='150' /></Link>
          </div>
          <div className="sm:flex flex-col gap-[10px] hidden">
            <Link target="_blank" href='https://apps.apple.com/in/app/luzo-luxury-you-aspire/id1594592604'><Image src="/Image/appshrefre.webp" alt="Image" width='150' /></Link>
            <Link target="_blank" href='https://play.google.com/shrefre/apps/details?id=com.salon_surf&pli=1'><Image src="/Image/playshrefre.webp" alt="Image" width='150' /></Link>
          </div> */}
          <DownloadLinks className={"flex-col"} />
        </ul>
      </div>
    </div>
  )
}

export default Footer