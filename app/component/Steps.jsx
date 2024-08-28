import React from 'react';

const steps = [
  {
    number: 1,
    title: "Free In-home Estimate",
    description: "We tell you about your project and take necessary measurements"
  },
  {
    number: 2,
    title: "Select Your Stone",
    description: "You choose the stone and a comprehensive estimate is provided"
  },
  {
    number: 3,
    title: "Stone is Ordered",
    description: "The stone is ordered and sent to fabrication. Then we order necessary appliances"
  },
  {
    number: 4,
    title: "Install",
    description: "We demo and install. The result is a clean and beautiful space you will love"
  }
];

const ProcessSteps = () => {
  return (
    <div className="max-w-[1720px] mx-auto px-4 py-10 lg:absolute md:relative bottom-[-100px] text-[#1F1F1F]">
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4">
        {steps.map((step) => (
            <div key={step.number} className="bg-white shadow-md overflow-hidden border-b-[13px] border-black">
            <div className="px-4 py-10 sm:py-12 md:py-[36px] w-full h-full max-w-full md:max-w-[410px] max-h-[300px] flex flex-col items-center mx-auto">
                <div className="w-[48px] h-[48px] sm:w-[58px] sm:h-[58px] md:w-[68px] md:h-[68px] bg-gradient-to-b from-[#373737] to-[#000000] text-white flex items-center justify-center mb-4">
                <span className="font-poppins-b text-[20px] sm:text-[25px] md:text-[30px]">{step.number}</span>
                </div>
                <h3 className="font-poppins-m text-[18px] sm:text-[22px] md:text-[25px] mb-2 text-center">{step.title}</h3>
                <p className="font-barlow text-[14px] sm:text-[16px] md:text-[18px] text-center">{step.description}</p>
            </div>
            </div>
        ))}
        </div>
    </div>
  
  );
};

export default ProcessSteps;