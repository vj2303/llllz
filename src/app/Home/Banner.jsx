import Image from "next/image"

const Banner = () => {
  return (
    <div className='flex items-center justify-center gap-[10px] py-[100px]'>
       <p className='font-medium text-[30px]' > Backed by </p><Image src='/img/100x.svg' alt="100x" width={150} height={300} />
    </div>
  )
}

export default Banner


