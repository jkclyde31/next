'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PrimaryButton from '../PrimaryButton';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border-b"
      initial={false}
      animate={{ backgroundColor: isOpen ? "#373737" : "#F0F0F1",  color: isOpen ? "white" : "" , paddingLeft : '10px'}}
      transition={{ duration: 0.3 }}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-[16px] md:text-[18px] font-barlow md:leading-[45px]">{question}</p>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-[14px] md:text-[16px] font-barlow py-2 px-4">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQKitchenSection = () => {
  const faqs = [
    {
      question: "How much does it cost to install a kitchen countertop?",
      answer: "The cost varies depending on material, size, and complexity. On average, it can range from $2,000 to $4,500."
    },
    {
      question: "What are the most popular materials for kitchen countertops?",
      answer: "Popular materials include granite, quartz, marble, butcher block, and laminate."
    },
    {
      question: "How long does it typically take to install a kitchen countertop?",
      answer: "Installation usually takes 1-3 days, depending on the size and complexity of the project."
    },
    {
      question: "What factors should I consider when choosing a countertop material?",
      answer: "Consider durability, maintenance, cost, aesthetics, and how it fits with your kitchen's overall design."
    },
    {
      question: "Do I need to hire a professional for countertop installation or can I do it myself?",
      answer: "While DIY is possible for some materials, professional installation is recommended for best results and to avoid costly mistakes."
    }
  ];

  return (
    <section className="text-[#444444] bg-[#F0F0F1]" id="about">
      <div className="md:grid md:grid-cols-2 gap-2">
        {/* LEFT */}
        <div className="w-full max-w-[842px] mx-auto text-[#444444] mb-[18px] flex flex-col justify-center px-[15px] py-[15px]">
          <p className='hidden font-barlow-m text-[16px] mb-[25px] mx-auto lg:mx-0 lg:block'>FAQ&apos;s </p>
          <h2 className="font-poppins-m text-[25px] md:text-[25px] lg:text-[45px] text-center lg:text-start mb-[18px] mx-auto lg:mx-0">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-[42px]">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="buttons flex flex-col sm:flex-row max-w-[100%] w-[90%] md:max-w-[432px] justify-between items-center mx-auto md:mx-0 space-y-4 sm:space-y-0 sm:space-x-4 pb-[15px]">
            <PrimaryButton text="VIEW ALL" className="w-full sm:w-auto" />
            <div className="left flex justify-between items-end max-w-[190px] w-full">
              <Image src="/img/icons/phone.png" alt="Phone Icon" width={57} height={57} />
              <div>
                <p className='font-nunito text-[14px]'>Call Us Now</p>
                <p className='font-roboto text-[18px] whitespace-nowrap'>602-509-1242</p>
              </div>
            </div>
          </div>


        </div>
        {/* RIGHT */}
        <div className='flex justify-end'>
          <Image src="/img/faqs/image.png" width={600} height={984} className="w-[90%] md:w-full max-w-[864px] object-cover mx-auto pb-[15px] md:pb-[0px] lg:pb-[0px]" alt="Kitchen countertop" />
        </div>
      </div>
    </section>
  );
};

export default FAQKitchenSection;