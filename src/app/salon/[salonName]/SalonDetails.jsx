import DownloadLinks from '../../../components/DownloadLinks'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
// import { useParams } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import ScrollToTop from '../../../components/ScrollToTop'
import DownloadPopUp from '../../../components/DownloadPopUp'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link'
import axios from 'axios'
import { ShimmerThumbnail } from "react-shimmer-effects";
import { redirect } from 'next/navigation'
import { brands } from '../../all-partners/salonsData'
import ImageComponent from "./ImageComponent"

// Fetching data on the server side
async function fetchData(salonName) {
    console.log(salonName)
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/v1/salonFamily/salonDetails?salonFamilyName=${encodeURIComponent(salonName)}`);
        console.log(res.data.data);

        return res.data.data;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

function transformURLToString(input) {
    // console.log(brands[input]);
    return brands[input]
}

const SalonDetails = async ({ params }) => {

    const { salonName } = params;
    const salon = await fetchData(transformURLToString(salonName));


    if (!salon || (!salon.about && salon.salons.length < 1)) {
        console.log("Redirecting to /all-partners");
        redirect("/401");
    }

    function convertString(str) {
        return str.toLowerCase().replace(/\s+/g, '-');
    }



    return (
        <>
            <Navbar />
            {salon && salon !== undefined ? <div>
                <div>
                    <ImageComponent imgUri={salon.salons[0]?.salon_cover_photo} />

                    <div className="sm:px-[100px] px-[10px] sm:leading-[30px] ">
                        <h1 className=" text-[50px] sm:py-[20px] sm:mt-[10px]">{salon.salons[0]?.salon_name}</h1>
                        <div>
                            <p className="text-[16px] sm:leading-[30px] sm:my-[20px]">{salon.about === "null" ? "" : salon.about}</p>
                        </div>

                    </div>

                    <div className="sm:px-[100px] px-[10px] my-[20px]">
                        <h1 className="font-medium sm:my-[20px] text-[20px]">{salon.name} Branches</h1>
                        <div className="flex sm:flex-row flex-col flex-wrap gap-[30px]">
                            {
                                salon.salons.map((ele) => {
                                    return (
                                        <a
                                            href={`/partner-details/${convertString(ele.salon_name)}-${ele.id}`}
                                            key={ele.id}
                                            // target="_blank"
                                            rel="noopener noreferrer"
                                            className="border sm:w-[30%] text-[14px] border-[#B9B9B9] rounded px-[30px] py-[8px] shadow-sm flex gap-[20px] items-center"
                                        >
                                            <Image src="/img/pin.svg" alt='img' height={20} width={20} />
                                            <p className="py-[10px]">{ele.salon_location}</p>
                                            <span className='sm:hidden ml-auto'>
                                                <ChevronRight />
                                            </span>
                                        </a>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <DownloadLinks className={"items-center justify-center mb-[60px] py-[15px]"} />
            </div> : (
                <ShimmerThumbnail height={250} rounded />
            )}
            <Footer />
            <ScrollToTop />
            <DownloadPopUp />
        </>
    )
}

export default SalonDetails