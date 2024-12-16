import React from "react";
import { TiTick } from "react-icons/ti";
import { FaAngleDown } from "react-icons/fa6";
import { CiCircleAlert } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="max-w-[1960px] bg-[#272343] pr-[300px] pl-[150px] flex justify-between gap-8    items-center hidden lg:flex">
      <div className="  flex  justify-between space-x-2  ">
        <TiTick className="text-[#FFFFFF] mt-2 " />

        <p className="text-[#FFFFFF] text-[13px] font-[400]  mt-2">
          Free shipping on all orders over $50
        </p>
      </div>
      <div className="w-[202px] gap-[24px] opacity-[70%] text-[#FFFFFF] flex  justify-between">
        <span className="flex  mt-2">
          <p className="text-center text-[13px] font-[400] ">Eng</p>
          <FaAngleDown  />
        </span>
        <span className="mt-2">
          <p className="text-center text-[13px] font-[400] "> Faqs</p>
        </span>
        <span className="flex  space-x-1 mt-2">
          <CiCircleAlert className="text-[#FFFFFF]" />

          <p className="text-[13px] font-[600] text-center">Need Help</p>
        </span>
      </div>
    </div>
  );
};

export default Banner;
