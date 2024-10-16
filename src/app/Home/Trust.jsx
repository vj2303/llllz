import Image from "next/image"



const Trust = () => {
  return (
    <div className="px-[10px] max-w-[1200px] mx-auto">
        <h1 className="text-[30px] font-bold">Our Milestones</h1>
        
        <div className="items-center flex justify-center flex-col sm:flex-wrap gap-[40px] sm:flex-row sm:gap-[200px] py-[40px]">
                
            <div className="flex flex-col  items-center">
                <Image src="/icons/schedule.svg" width={40} height={40} alt="Image" />
                <h1 className="text-[#3554D1] text-[30px] leading-[39px] font-medium">75,000+</h1>
                <p className="text-[#707070] font-medium">Appointments</p>
            </div>
            <div className="flex flex-col  items-center">
                <Image src="/icons/satisfaction.svg"  width={40} height={40} alt="Image" />
                <h1 className="text-[#3554D1] text-[30px] leading-[39px] font-medium">27,000+</h1>
                <p className="text-[#707070] text-[14px] font-medium">Happy Customers</p>
            </div>
            <div className="flex flex-col  items-center">
                <Image src="/icons/hair-salon.svg"  width={40} height={40} alt="Image" />
                <h1 className="text-[#3554D1] text-[30px] leading-[39px] font-medium">700+</h1>
                <p className="text-[#707070] text-[14px] font-medium">Partners</p>
            </div>
            <div className="flex flex-col  items-center">
                <Image src="/icons/get-money.svg"  width={40} height={40} alt="Image" />
                <h1 className="text-[#3554D1] text-[30px] leading-[39px] font-medium">34,00,000+</h1>
                <p className="text-[#707070]  text-[14px] font-medium">Customer Savings</p>
            </div> 
        </div>
        
    </div>
  )
}

export default Trust