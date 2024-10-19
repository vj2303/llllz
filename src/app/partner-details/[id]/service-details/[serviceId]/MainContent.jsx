'use client'
import { Baby, ChevronDown, ChevronUp, Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import BottomSheet from "./BottomSheet";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { ShimmerThumbnail } from "react-shimmer-effects";

const MainContent = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id, serviceId } = useParams();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsDesktop(true);
        setOpenIndex(0); // Open first dropdown by default on desktop
      } else {
        setIsDesktop(false);
        setOpenIndex(null); // Reset for mobile
      }
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/v1/salon/subCategories`, {
        main_category_id: serviceId.split("-").pop(),
        salon_id: id.split("-").pop()
      });
      setServices(res.data.data.sub_categories);
    } catch (error) {
      console.error(error);
      alert("Could not fetch services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [serviceId]);

  return (
    <div className="w-3/4">
      {loading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <ShimmerThumbnail key={index} height={100} rounded className="shimmer" />
        ))
      ) : (
        <div className="mt-4 bg-white">
          <div className="border mx-2 flex items-center rounded-md p-2">
            <Search size={15} className="mr-2" />
            <input
              type="text"
              placeholder="Search for service..."
              className="focus:outline-none"
            />
          </div>
          <div className="flex mt-1 mx-2 sm:justify-start justify-between gap-2">
            <button className="border rounded-md px-10 flex items-center gap-2">
              <Image src="/Men.svg" alt="img" width={12} height={12} /> Men
            </button>
            <button className="border rounded-md px-10 flex items-center gap-2">
              <Image src="/Women.svg" alt="img" width={12} height={12} /> Women
            </button>
          </div>

          <div>
            {services?.map((service, index) => (
              <div
                key={index}
                className="border-b-4 border-b-gray-200"
              >
                <div
                  className="flex justify-between items-center p-2 cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  {service.name} ({service?.services?.length || 0})
                  {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                </div>

                {/* Smooth dropdown content */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === index ? 'max-h-screen' : 'max-h-0'
                  }`}
                >
                  {service.services?.map((ele, i) => (
                    <div
                      key={i}
                      className="p-2 flex items-center sm:mx-2 sm:m-1 sm:gap-8 sm:border sm:rounded-md text-gray-600"
                    >
                      <div>
                        <Image
                          src={
                            ele.gender === "Women"
                              ? "/Women.svg"
                              : ele.gender === "Men"
                              ? "/Men.svg"
                              : "/Unisex.svg"
                          }
                          alt="img"
                          width={15}
                          height={15}
                        />
                        <p className="font-medium">{ele.name}</p>
                        {ele.one_line_description && (
                          <p className="text-[11px] text-gray-400">
                            {ele.one_line_description}
                          </p>
                        )}
                        {ele.display_rate && (
                          <p className="text-[11px]">
                            From ₹ {Math.round(ele.display_rate)} + GST
                          </p>
                        )}
                      </div>
                      <button
                        className="text-blue-200 font-semibold border shadow-md rounded-md px-2 flex gap-1"
                        onClick={() =>
                          ele.customizations?.length > 0 &&
                          setSelectedServiceId(ele.id)
                        }
                      >
                        ADD {ele.customizations?.length > 0 && <Plus />}
                      </button>
                      <BottomSheet
                        isOpen={selectedServiceId === ele.id}
                        onClose={() => setSelectedServiceId(null)}
                        service={ele}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
