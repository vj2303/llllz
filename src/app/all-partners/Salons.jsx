"use client";

import Image from "next/image";
import SalonCard from "./SalonCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { ShimmerSimpleGallery, ShimmerThumbnail } from "react-shimmer-effects";

function Salons() {
  const [salons, setSalons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getda = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `${process.env.NEXT_PUBLIC_HOST}/api/v1/salonFamily/list`,
        });
        setSalons(res.data.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getda();
  }, []);

  return (
    <div className="px-[10px] sm:px-[120px] mt-[100px]">
      <h1 className="font-medium text-[30px]">All Partners</h1>
      <div className="flex sm:flex-wrap flex-col sm:flex-row gap-[20px] cursor-pointer py-[20px] shimmer_container">
        {loading ? (
          Array.from({ length: 21 }).map((_, index) => (
            <ShimmerThumbnail
              key={index}
              height={200}
              rounded
              className={"shimmer"}
            />
          ))
        ) : (
          salons?.map((salon, i) => salon ? <SalonCard salon={salon} key={i} /> : null)
        )}
      </div>
      <h1 className="font-medium sm:text-[28px] text-[20px] text-center">
        To view more partners download the app now!
      </h1>
      <div className="flex items-center justify-center gap-[20px] py-[20px]">
        <Image src="/img/appstore.webp" alt="img" width={150} height={60} />
        <Image src="/img/playstore.webp" alt="img" width={150} height={60} />
      </div>
    </div>
  );
}

export default Salons;