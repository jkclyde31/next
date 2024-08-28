import React from 'react'
import AboutSection from '@/app/component/sections/About-section'
import FAQKitchenSection from '@/app/component/sections/Faqs-section'
import ServicesSection from '@/app/component/sections/Services-section'
import GallerySection from '@/app/component/sections/Gallery-section'


const page = () => {
  return (
    <div className=''>
        <AboutSection/>
        <FAQKitchenSection/>
        <ServicesSection/>
        <GallerySection/>
    </div>
  )
}

export default page