import React from 'react'
import AboutSection from '@/app/component/sections/About-section'
import FAQKitchenSection from '@/app/component/sections/Faqs-section'
import ServicesSection from '@/app/component/sections/Services-section'

const page = () => {
  return (
    <div className=''>
        <AboutSection/>
        <FAQKitchenSection/>
        <ServicesSection/>
    </div>
  )
}

export default page