import React from 'react' 
import { FaArrowRight } from "react-icons/fa6";


import herosection from "../../public/herosection.png";
import Image from 'next/image';
const Hero = () => {
  return (
    <div className='flex flex-cols md:flex-row'>
      <div className='flex justify-center items-center mx-auto  flex flex-col md:flex-row bg-[#F0F2F3]'>
        <div className='md:w-[1321px] h-Hug-[850px] bg-[#F0F2F3] flex justify-between flex-cols   items-center md:px-[70px] '>
          <div className="flex flex-col md:justify-center items-start md:w-1/2 md:space-y-4">
            <h1 className='text-[14px] pt-[100px] font-normal text-[#272324] text-center'>
              WELCOME TO CHAIRY
              
            </h1>
            <p className=" text-[30px] md:text-[60px] font-[700] text-[#272343] mx-auto md:mx-0 w-full md:w-[557px]">
            Best Furniture
Collection for your
interior
            </p>
            <button className='bg-[#029FAE] md:w-[171px] text-[white] py-3 px-6 rounded-[8px] flex flex-items-center gap-[20px]'>
              <span className='text-center'>Shop Now</span>
              <FaArrowRight  className='mt-1'/>

            </button>
          </div>
          
        </div>
          <div>
          <Image src={herosection} alt='hero'
          
          className='top-[115px] left-[777px] md:py-9 md:w-[434px] mt-8 md:h-[584px]'/>
          </div>
      
      </div>
    </div>


  )
}

export default Hero