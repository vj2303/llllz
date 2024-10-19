'use client'
import { Baby, ChevronDown, ChevronUp, Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import BottomSheet from "./BottomSheet";
import { useParams } from "next/navigation";
import { serviceData } from "./ServiceData";
import axios from "axios";
import Image from "next/image";
import { ShimmerSimpleGallery, ShimmerThumbnail } from "react-shimmer-effects";

const MainContent = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const { id, serviceId } = useParams();
  const [isDesktop, setIsDesktop] = useState(false);  // Will detect desktop view

  // Detect screen width and set openIndex on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // Tailwind's md breakpoint
        setIsDesktop(true);
        setOpenIndex(0); // Open the first dropdown by default in desktop
      } else {
        setIsDesktop(false);
        setOpenIndex(null); // Reset for mobile
      }
    };
    handleResize(); // Set initial state on mount
    window.addEventListener('resize', handleResize); // Add resize listener
    return () => window.removeEventListener('resize', handleResize); // Clean up listener
  }, []);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);  // Toggle the dropdown
  };

  const fetchServices = async () => {
    setLoading(true); // Start loading
    try {
      const res = await axios({
        method: "post",
        baseURL: `${process.env.NEXT_PUBLIC_HOST}/api/v1`,
        url: "/salon/subCategories",
        params: {
          main_category_id: serviceId.split("-")[serviceId.split("-").length - 1],
          salon_id: id.split("-")[id.split("-").length - 1]
        }
      });
      setServices(res.data.data.sub_categories);
    } catch (error) {
      console.log(error);
      alert("Could not fetch services");
    } finally {
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchServices();
  }, [serviceId]);

  return (
    <div className="w-3/4">
      {loading ? ( // Show loading while fetching data
        // <div className="text-center text-gray-500">Loading...</div>
        Array.from({ length: 4 }).map((_, index) => (
          <ShimmerThumbnail
            key={index}
            height={100}
            rounded
            className={"shimmer"}
          />
        ))
      ) : (
        services && (
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
                <Image src='/Men.svg' alt='img' width={12} height={12} /> Men
              </button>
              <button className="border rounded-md px-10 flex items-center gap-2">
                <Image src='/Women.svg' alt='img' width={12} height={12} /> Women
              </button>
            </div>

            <div className="">
              {services?.filter(service => service && service.name).map((service, index) => (
                <div key={index} className="border-gray-500 border-b-4 border-b-gray-200">
                  <div
                    className="flex justify-between items-center p-2 cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    {/* Display service name and count of services */}
                    {service.name} ({service?.services?.length || 0})
                    {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                  </div>
                  <div className="sm:flex sm:items-center sm:justify-start sm:flex-wrap sm:rounded-md text-gray-600 md:flex md:flex-row md:flex-wrap">
                    {service?.services?.filter(ele => ele && ele.name).map((ele, i) => (
                      <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}
                        key={i}
                      >
                        <div className="p-2 flex items-center sm:mx-2 sm:m-1 sm:justify-start sm:gap-8 sm:border sm:flex-wrap sm:rounded-md justify-between text-gray-600">
                          <div>
                            {ele.gender === "Women" ? (
                              <Image src='/Women.svg' alt='img' width={15} height={15} />
                            ) : ele.gender === "Men" ? (
                              <Image src='/Men.svg' alt='img' width={12} height={12} />
                            ) : (
                              <Image src='/Unisex.svg' alt='img' width={12} height={12} />
                            )}
                            <p className="font-medium">{ele.name}</p>
                            {ele.one_line_description && (
                              <p className="text-[11px] text-gray-400">{ele.one_line_description}</p>
                            )}
                            {ele.display_rate && (
                              <p className="text-[11px]">From ₹ {Math.round(ele.display_rate)} + GST</p>
                            )}
                          </div>
                          <button
                            className="text-blue-200 font-semibold border shadow-md rounded-md px-2 flex gap-1"
                            onClick={() => ele?.customizations?.length > 0 && setSelectedServiceId(ele.id)}
                          >
                            ADD {ele?.customizations?.length > 0 && <Plus />}
                          </button>
                          <BottomSheet isOpen={selectedServiceId && selectedServiceId === ele.id ? true  :false} onClose={()=>setSelectedServiceId(null)}  service={ele} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default MainContent;
