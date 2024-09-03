"use client";
import Link from 'next/link';
import Image from 'next/image';
import PrimaryButton from '../PrimaryButton';
import Navbar from '../Navbar';
import ProcessSteps from '../Steps';
import { useSiteConfig } from '@/app/siteConfigContext';

export default function Header() {
  const config = useSiteConfig();

  return (
    <header className="bg-[url('/img/bgs/bg-banner.png')] bg-no-repeat bg-cover bg-left md:bg-center text-[#222] min-h-[900px] relative">
      <div className='max-w-[1720px] w-full mx-auto'>
        {/* NAVBAR ==========================================================================================================*/}
        <Navbar />

        {/* BANNER ===================================================================================================*/}
        {/* logo */}
        <div id="banner" className='px-2'>
          <Link href="/" className="block tablet:hidden pt-[25px] pb-[25px]">
            <Image src="/img/logo.png" alt="Logo" width={213} height={134} className='mx-auto' />
          </Link>
          
          {/* Text */}
          <div className="max-w-[728px] text-center mx-auto lg:text-left lg:mx-0">
            <p className='font-nunito text-[14px] xs:text-[16px] text-[#444] pb-[5px] sm:pb-[15px] md:pb-[25px] leading-[120%] '>
              AT ARIZONA INTERIOR CONSTRUCTION
            </p>
            <h1 className='font-poppins-l text-[20px] xs:text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] pb-[18px] text-[#1F1F1F] leading-[120%]'>
              We Take Great Pride in Providing
              <span className='block font-poppins-m'>The Highest Quality Workmanship</span>
            </h1>
            <p className='font-nunito text-[14px] xs:text-[16px] pb-[30px] text-[#444] leading-[120%]'>
              With over 15 years in the industry, we have the skills, knowledge, and experience to transform the countertops and cabinets in your kitchen, bathrooms, laundry room, office, workshop, and outdoor living space.
            </p>
            
            <div className="buttons flex flex-col sm:flex-row max-w-[432px] justify-between items-center mx-auto lg:mx-0 space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-full max-w-[260px]">
                <PrimaryButton text="FREE ESTIMATE" className="w-full max-w-full" width='266px'  href="/contact#content"/>
              </div>

              {/* left button */}
              <a href={`tel:${config.phone}`} className="left flex justify-between items-center max-w-[190px] w-full hover:scale-105 transition duration-300 ease-in-out ">
                  <Image src="/img/icons/phone.png" alt="Phone Icon" width={57} height={57} />
                  <div>
                      <p className='font-nunito text-[14px]'>Call Us Now</p>
                      <p className='font-roboto text-[18px]'>602-509-1242</p>
                  </div>
                </a>
           

            </div>

          </div>
        </div>

        {/* Steps */}
        <ProcessSteps />
      </div>
    </header>
  );
}
