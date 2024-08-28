

import React from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronLeft, ChevronRight, Star, Phone } from 'lucide-react';
import PrimaryButton from '../PrimaryButton';


const FAQKitchenSection = () => {
  return (
    <section className="text-[#444444] bg-[#F0F0F1]" id="about">
      <div className="md:grid md:grid-cols-2 gap-2  ">

      {/* LEFT */}
       <div className="w-full max-w-[842px] mx-auto text=[#444444] mb-[18px] flex flex-col  justify-center px-[15px] py-[15px]">
        <p className='font-barlow-m text-[16px] mb-[25px] mx-auto lg:mx-0'>FAQ's</p>
        <h2 className="font-poppins-m text-[20px] md:text-[25px] lg:text-[45px]  mb-[18px] mx-auto lg:mx-0">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-[42px]">
          {[
            "How much does it cost to install a kitchen countertop?",
            "What are the most popular materials for kitchen countertops?",
            "How long does it typically take to install a kitchen countertop?",
            "What factors should I consider when choosing a countertop material?",
            "Do I need to hire a professional for countertop installation or can I do it myself?"
          ].map((question, index) => (
            <div key={index} className="flex justify-between items-center border-b ">
              <p className="text-[18px] font-barlow leading-[45px]">{question}</p>
              <ChevronDown size={20} />
            </div>
          ))}
        </div>

        <div className="buttons flex flex-col sm:flex-row max-w-[432px] justify-between items-center tablet:mx-auto space-y-4 sm:space-y-0 sm:space-x-4 pb-[15px]">
              <PrimaryButton text="FREE ESTIMATE" className="w-full sm:w-auto" />
              <div className="left flex justify-between items-center max-w-[190px] w-full">
                <Image src="/img/icons/phone.png" alt="Phone Icon" width={57} height={57}/>
                <div>
                  <p className='font-nunito text-[14px]'>Call Us Now</p>
                  <p className='font-roboto text-[18px] whitespace-nowrap'>602-509-1242</p>
                </div>
              </div>
           
        </div>
       
      
        </div>
        {/* RIGHT */}
        <div className='flex justify-end'>
          <Image src="/img/faqs/image.png" width={600} height={984} className="w-full max-w-[864px] object-cover " />
        </div>
        
      </div>
    </section>
  );
};

export default FAQKitchenSection;