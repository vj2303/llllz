"use client"
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { ArrowUpRight } from 'lucide-react';
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const handleSendMessage = async (data) => {
    try {
      const res = await axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/v1/sendMail`,
        params: { ...data },
      });
      console.log(res);
      alert(res.data.message);
    } catch (error) {
      console.log(error);
      alert("Could not send message");
    }
  };
  return (
    <div className="sm:pl-[100px] mt-[100px]">
      <h1 className="text-[40px] font-medium">Contact Us</h1>

      <div className="flex sm:flex-row items-center flex-col sm:py-[40px] gap-[30px] ">
        <form
          className="bg-[white] sm:w-[636px] w-[90%]  py-[40px] px-[10px] sm:px-[40px] rounded-md  shadow"
          onSubmit={handleSubmit(handleSendMessage)}
        >
          <p className="text-[20px] font-normal mb-[20px]">Send a message</p>
          <div className="flex flex-col gap-[20px]">
            <input
              placeholder="Full Name"
              className="border rounded-[5px] px-[10px] pb-[20px]"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}

            <input
              placeholder="Your Number"
              className="border rounded-[5px] px-[10px] pb-[20px] "
              type="number"
              {...register("contact", {
                required: "Contact is required",
                minLength: { value: 10, message: "Enter a valid phone number" },
                maxLength: { value: 11, message: "Enter a valid phone number" },
              })}
            />
            {errors.contact && (
              <span className="text-red-500">{errors.contact.message}</span>
            )}

            <textarea
              placeholder="Your Message"
              className="border rounded-[5px] px-[10px] pb-[100px] "
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>

          <button
            className="bg-[#3554D1] mt-[10px] flex text-[white] font-medium px-[20px] py-[20px] rounded"
            type="submit"
          >
            {isSubmitting?"Sending" : <>Send a Message <ArrowUpRight /></>}
          </button>
        </form>
        <div className="px-[10px] mb-[60px]">
          <h1 className="text-[30px] sm:pb-[30px]  font-medium">Get In Touch</h1>
          <div className="flex  text-[#697488]   cursor-pointer sm:flex-row flex-wrap justify-between gap-[40px] sm:gap-[90px]">
            <div className="">
              <h3 className=" text-[14px] sm:mb-[15px]">WhatsApp</h3>
              <p className="hover:text-[#094FB7] text-[#051036] text-[18px]">7738182493</p>
            </div>
            <div>
              <h3  className="text-[14px] sm:mb-[15px]">Need support?</h3>
              <p className="hover:text-[#094FB7] text-[#051036] text-[18px] sm:mb-[5px] ">info@luzo.app</p>
              <p className="hover:text-[#094FB7] text-[#051036] text-[18px]">founders@luzo.app</p>
            </div>
            <div>
              <h3  className="text-[14px] sm:mb-[15px]">Follow us on social media</h3>
              <span className=" h-8 flex items-center text-[14px] flex-row gap-[30px]  text-[#051036]  ">
              
              <Link href='https://www.facebook.com/luzoapp/'>
                <span className="hover:text-[#094FB7]"> <FontAwesomeIcon icon={faFacebookF} className="text-14" /></span>
              </Link>
               <Link href='https://twitter.com/luzo_app?s=11&amp;t=W_nfHtVga_uF3WIz70N1sg'>
               <span className="hover:text-[#094FB7]">  <FontAwesomeIcon icon={faTwitter} /></span>  
               </Link>
               <Link href='https://instagram.com/luzo.app?igshid=YmMyMTA2M2Y='>
               <span className="hover:text-[#094FB7]"> <FontAwesomeIcon icon={faInstagram} className="text-14" /></span>    
              </Link>
              <Link href='https://www.linkedin.com/company/salonsurf/'>
              <span className="hover:text-[#094FB7]"> <FontAwesomeIcon icon={faLinkedinIn} className="text-14" /></span>         
               </Link>  
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
