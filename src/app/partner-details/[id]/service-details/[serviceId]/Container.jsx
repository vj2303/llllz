import Footer from '../../../../../components/Footer'
import Navbar from '../../../../../components/Navbar'
import React, {useState} from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'

import { serviceData } from './ServiceData'

const ServiceContainer = () => {
    const [selectedService, setSelectedService] = useState(null);
    return (
      <div className='pt-[100px]'>
          <Navbar/>
          <div className='flex sm:px-[100px]' >
                  <Sidebar onSelect={setSelectedService} />  
                  <MainContent selectedService={selectedService} serviceData={serviceData} />  
          </div>
          <Footer/>
      </div>
    )
}

export default ServiceContainer