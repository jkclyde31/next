import React from 'react';
import Image from 'next/image';
import PrimaryButton from '../PrimaryButton';

const ServicesSection = () => {
  return (
    <section className="bg-[url('/img/bgs/bg-services.png')] bg-no-repeat bg-cover bg-center py-5 md:py-16">
      <div className="container mx-auto px-4 max-w-[1720px] w-full">
        {/* Texts */}
        <div className="mb-12 text-[#1F1F1F]">
          <h2 className="lg:text-[16px] font-barlow-m mb-[14px] md:mb-[27px] text-center md:text-start">
            OUR SERVICE OFFERING
          </h2>
          <h1 className="text-[20px] sx:text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px] mb-4 lg:leading-[54px] text-center md:text-start">
            Explore Our Services & Discover How We<br />
            Can <span className="text-black font-poppins-b">Transform Your Dream Project Into Reality</span>
          </h1>
          <p className="text-[14px] lg:text-[16px] tracking-[1.6px] font-barlow  mb-[25px] md:mb-[41px] text-center md:text-start">
            We take great pride in providing the highest quality workmanship for our customers. With over 15 years<br />
            in the industry, we have the skills, knowledge, and experience.
          </p>

          {/* Button */}
        
          <div className="buttons flex flex-col sm:flex-row max-w-[100%] w-[90%] md:max-w-[432px] justify-between items-center mx-auto md:mx-0 space-y-4 sm:space-y-0 sm:space-x-4 pb-[15px]">
            <PrimaryButton text="FREE ESTIMATE" className="w-full sm:w-auto" />
            <div className="left flex justify-between items-center max-w-[190px] w-full">
              <Image src="/img/icons/phone.png" alt="Phone Icon" width={57} height={57} />
              <div>
                <p className='font-nunito text-[14px]'>Call Us Now</p>
                <p className='font-roboto text-[18px] whitespace-nowrap'>602-509-1242</p>
              </div>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sx:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-[1095px]">
          <div className="relative mx-auto lg:mx-0">
            <Image src="/img/services/image1.png" alt="Kitchen Remodeling" width={360} height={486} />
            <div className="absolute bottom-2 lg:bottom-[-35px] h-[69px] w-full max-w-[250px] left-1/2 transform -translate-x-1/2 bg-black text-white flex justify-center items-center">
              Kitchen Remodeling
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0">
            <Image src="/img/services/image2.png" alt="Bathroom Remodeling" width={360} height={486} />
            <div className="absolute bottom-2 lg:bottom-[-35px] h-[69px] w-full max-w-[250px] left-1/2 transform -translate-x-1/2 bg-black text-white flex justify-center items-center">
              Bathroom Remodeling
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0">
            <Image src="/img/services/image3.png" alt="Repair Needs" width={360} height={486} />
            <div className="absolute bottom-2 lg:bottom-[-35px] h-[69px] w-full max-w-[250px] left-1/2 transform -translate-x-1/2 bg-black text-white flex justify-center items-center">
              Repair Needs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
