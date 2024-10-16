import React from 'react'
import DownloadLinks from '../../components/DownloadLinks'

const Header = () => {
    return (
        <div className='flex flex-col items-center  justify-center sm:min-h-[50vh] min-h-[45vh] bg-[url("/partner-bg.png")]  bg-cover bg-center bg-no-repeat relative'>
            <div className='w-full h-full absolute left-0 top-0 overlay'></div>
            <div className='flex flex-col gap-5 items-center z-10 max-w-[80%]'>
                <p className='text-[white] text-[26px] font-bold text-center sm:max-w-[80%]'>Increase your customers & sales by 25%</p>
                {/* <button className='bg-[#72B5EC] text-white font-semibold text-[16px] px-[50px] py-[15px] rounded-lg'>Register your salon</button> */}
            </div>
        </div>
    )
}


export default Header