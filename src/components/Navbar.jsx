"use client"

import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {

     const [isScrolled, setIsScrolled] = useState(false)
     const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
     const pathname  = usePathname()

     const navItems = [
          {
               label : "Home",
               value : "home",
               link : "/"
          },
          {
               label : "Buy Gift Card",
               value : "giftcard",
               link : "/giftcard"
          },
          {
               label : "About Us",
               value : "about",
               link : "/about"
          },
          {
               label : "Partner With Us",
               value : "partner",
               link : "/partner"
          },
          {
               label : "Influencer Program",
               value : "influencer",
               link : "/influencer"
          },
          {
               label : "Careers",
               value : "careers",
               link : "/careers"
          },
     ]

     useEffect(() => {
          const handleScroll = () => {
               const scrolled = window.scrollY > 100
               if (pathname !== "/" && !pathname.startsWith("/salon/") ) {
                    return setIsScrolled(true)
               }
               setIsScrolled(scrolled)
          }

          document.addEventListener("scroll", handleScroll)

          if (pathname !== "/" && !pathname.startsWith("/salon/")) {
               setIsScrolled(true)
          }
          
          

          return () => {
               document.removeEventListener("scroll", handleScroll)
          }

     }, [])



     const toggleNavbar = () => {
          setMobileDrawerOpen(!mobileDrawerOpen);
     };


     return (
          <nav className={`sm:px-[80px] px-[10px] flex justify-between h-[80px] items-center fixed top-0 w-full z-20 ${isScrolled ? "bg-white text-black" : "bg-transparent sm:text-white"} transition-all duration-[350ms]`}>
               <Link href='/'>  <Image src="/img/icon.webp" alt="logo icon" width="50" height="50" className="" /></Link>
               <div className="hidden sm:block">
                    <ul className="flex gap-[20px] cursor-pointer ">
                         {
                              navItems.map((item)=>{
                                   if (item.value==='influencer') return;
                                   return <li key={item.link} className={`${pathname===item.link && isScrolled && pathname !== "/" ?"text-blue-500" : ""}`}><Link href={item.link}>{item.label}</Link></li>
                              })
                         }
                    </ul>
               </div>
               <div className="lg:hidden md:flex flex-col ">
                    <button onClick={toggleNavbar}>
                         {!mobileDrawerOpen && <Menu className={`${isScrolled ? "text-black" : "text-white"}`} />}
                    </button>
               </div>
               {/* {mobileDrawerOpen && ( */}
               <div className={`absolute top-0 ${!mobileDrawerOpen ? "invisible left-[-100%]" : "left-0 visible"} transition-all duration-[350ms] z-20 bg-white w-[90%] py-12  flex flex-col  lg:hidden h-screen`}>
                    <div className="flex justify-between pb-4 border-b-2 px-12">
                         <Image src="/img/icon.webp" alt="logo icon" width="40" height="40" className="" />
                         <X onClick={toggleNavbar} />

                    </div>
                    <ul className="flex text-black flex-col gap-[20px] cursor-pointer border-b-2 py-4 px-12">
                    {
                              navItems.map((item)=>{
                                   return <li key={item.link} className={`${pathname===item.link?"text-blue-500" : ""}`}><Link href={item.link}>{item.label}</Link></li>
                              })
                         }
                    </ul>
               </div>
               {/* )} */}

          </nav>
     )
}

export default Navbar