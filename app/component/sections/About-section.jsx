"use client";
import React from "react";
import Image from "next/image";
import PrimaryButton from "../PrimaryButton";
import { useSiteConfig } from '@/app/siteConfigContext';


const AboutSection = () => {
  const config = useSiteConfig();

  return (
    <section className="text-[#444444]" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className=" flex flex-col justify-center mx-auto lg:mx-0 h-full w-full  max-w-[90%] md:max-w-[693px] px-4 pt-[2%] md:pt-[20%] text-center md:text-start order-1 md:order-2">
          <p className="text-[14px] md:text-[16px] font-barlow-m mb-[20px] md:mb-[25px] animate-bounce">
            KNOW ABOUT US
          </p>
          <h2 className="text-[20px] sx:text-[25px] sm:text-[30px] tablet:text-[35px] lg:text-[40px]  font-poppins-l leading-tight md:leading-[1] mb-[15px] md:mb-[21px]">
            West Valley Phoenix <span className="block md:inline">Custom Cabinet & Countertop Installation</span>
          </h2>
          <p className="text-[16px] md:text-[18px] font-barlow leading-[28px] md:leading-[36px] pb-[15px] md:pb-[53px]">
            At Arizona Interior Construction, we take great pride in providing the highest quality workmanship for our customers. With over 15 years in the industry, we have the skills, knowledge, and experience to transform the countertops and cabinets in your kitchen, bathrooms, laundry room, office, workshop, and outdoor living space. Contact us today to receive your free in-home estimate. We&apos;re proudly serving the entire Phoenix Metro area and all of Arizona!
          </p>

          <div className="buttons flex flex-col sm:flex-row max-w-full sm:max-w-[432px] w-full justify-between items-center mx-auto lg:mx-0 space-y-4 sm:space-y-0 sm:space-x-4 mb-[15px]">
              <div className="w-full max-w-[260px]">
                <PrimaryButton text="GET A QUOTE" className="w-full " width='266px'  href="/contact#content"/>
              </div>
              <a href={`tel: ${config.phone}`} className="left flex  justify-between items-center max-w-[190px] w-full  hover:scale-105 transition duration-300 ease-in-out ">
                <Image src="/img/icons/phone.png" alt="Phone Icon" width={57} height={57} />
                <div>
                  <p className='font-nunito text-[14px]'>Call Us Now</p>
                  <p className='font-roboto text-[18px] whitespace-nowrap'>602-509-1242</p>
                </div>
              </a>
            </div>


        </div>

        {/* Image */}
        <Image src="/img/about/image.png" width={600} height={600} className="w-[90%] md:w-full h-full object-cover mx-auto order-2 md:order-1 pb-[15px] md:pb-0 lg:pb-0" alt="About Us" />
      </div>
    </section>
  );
};

export default AboutSection;
