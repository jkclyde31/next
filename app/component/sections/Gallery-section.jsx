import Image from 'next/image'
import Link from 'next/link'

export default function GallerySection() {
  return (
   <div className='bg-[#F0F0F1]'>
     <div className="container mx-auto px-4 lg:pt-[134px] pt-[25px] ">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8 w-full max-w-[1172px] mx-auto text-[#1F1F1F]">
        <div className="flex items-center mb-4 md:mb-0 mx-auto lg:mx-0">
          <Image src="/img/logo.png" alt="Arizona Interior Construction Logo" width={422} height={288} className="mr-4" />
        </div>
        <div className="txt">
             <p className="text-[16px]  font-barlow-m mb-[18px]  text-center lg:text-left">SOME RECENT WORKS</p>
             <h1 className="lg:text-[50px] md:text-[30px] text-[25px] font-poppins-l mb-[18px] lg:leading-[60px]  lg:text-left md:text-left text-center max-w-[557px] w-full">Ideas And Visions Turn Into Reality</h1>
             <p className="text-[16px]  font-barlow mb-[18px] text-center  md:text-left lg:text-left  tracking-[1.6px] leading-[32px]">Our experience and skills together with your ideas and vision will turn any space into your REAL HOME.</p>
        </div>
      </header>




      {/* Main content */}
      <main>
        
      </main>
    </div>
   </div>
  )
}