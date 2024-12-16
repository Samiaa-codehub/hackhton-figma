import React from "react";
import whitechair from "../../public/whitechair.png";
import blackchair from "../../public/blackchair.png";
import Image from "next/image";
import whitw from "../../public/whitw.png";
import pinkchair from "../../public/pinkchair.png";
import orangechair from "../../public/orange.png";
import  wingchair from "../../public/wingchair.png";
import graychair from "../../public/graychair.png";
import { FiShoppingCart } from "react-icons/fi";

export const Ourproduct = () => {
  return (
    <div className=" w-auto md:max-w-[1320px]  md:h-[919px] md:top-[2455px] mx-9 md:ml-[90px] mt-[180px]">
      <h1 className="text-[32px] text-gray-700 text-center">Our Products</h1>
<div className="flex flex-col justify-center md:gap-8 md:px-[20px] mx-auto max-w-7xl  md:ml-[50px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8  md:space-x-8">
        <div className="w-full h-[377px]  mb-8 md:mb-0">
          <div className="w-auto items-center">
            <Image
              src={whitw}
              alt=" school-library-chair"
              objectFit="contain"
              height={312}
              className="px-4 md:px-0 "
            />
          </div>
          <div className="flex md:justify-between justify-evenly mt-2">
            <div className="w-auto  mt-2 text-start">
              <p className="md:text-lg font-semibold  text-[#007580]">
                school stool chair
              </p>
              <p className="max-w-auto">$20</p>
            </div>
            <div className="w-[44px] h-[44px] bg-[#029FAE] rounded-[10px] mt-2 ">
              <button className="px-2 py-2 text-[white]">
                {" "}
                <FiShoppingCart className="mt-2" size={22} />
              </button>
            </div>
          </div>
        </div>
        <div className="mb-8 md:mb-0 ">
          <div className="w-auto  h-[312px] items-center ">
            <Image
              src={pinkchair}
              alt="school-library-chair"
              objectFit="cover"
              className="w-[242px] h-[282px] md:w-[312px] md:h-[312px] px-4 md:px-0 rounded-[10px]"
            />
          </div>
          <div className="flex md:justify-between justify-evenly md:mt-2">
            <div className="w-auto md:mt-2 text-start">
              <p className="md:text-lg font-semibold text-gray-700">
                School stool chair
              </p>
              <p className="max-w-auto">$20</p>
            </div>
            <div className="w-[44px] h-[44px] bg-gray-200 rounded-[10px] mt-2 hover:bg-[#029FAE] hover:text-[white]">
              <button className="px-2 py-2">
                {" "}
                <FiShoppingCart
                  className="items-center text-center mt-2"
                  size={22}
                />
              </button>
            </div>
          </div>
        </div>
        <div className=" mb-8 md:mb-0">
          <div className="w-auto  lg:h-[312px] ">
            <Image
              src={orangechair}
              alt="school-library-chair"
              objectFit="cover"
              className=" w-[312px] h-[312px] px-4 md:px-0 "
            />
          </div>
          <div className="flex md:justify-between justify-evenly mt-2">
            <div className="w-auto mt-2 text-start">
              <p className="md:text-lg font-semibold text-gray-700">
                School stool chair
              </p>
              <p className="max-w-auto">$20</p>
            </div>
            <div className="w-[44px] h-[44px] bg-gray-200 rounded-[10px] mt-2 hover:bg-[#029FAE] hover:text-[white]">
              <button className="px-2 py-2">
                {" "}
                <FiShoppingCart
                  className="items-center text-center mt-2 "
                  size={22}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <div className="  w-auto  lg:h-[312px] items-center">
            <Image
              src={whitechair}
              alt="school-stool"
              objectFit="cover"
              className="  px-4 rounded-[10px]"
            />
          </div>
          <div className="flex md:justify-between justify-evenly mt-2">
            <div className="w-auto mt-2 text-start">
              <p className="md:text-lg font-semibold text-gray-700">
                School stool chair
              </p>
              <p className="max-w-auto">$20</p>
            </div>
            <div className="w-[44px] h-[44px] bg-gray-200 rounded-[10px] mt-2 hover:bg-[#029FAE] hover:text-[white]">
              <button className="px-2 py-2">
                {" "}
                <FiShoppingCart
                  className="items-center text-center mt-2"
                  size={22}
                />
              </button>
            </div>
          </div>
        </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8  md:space-x-8">

    
      <div className="w-full h-[377px]  mb-8 md:mb-0">
        <div className="w-auto items-center">
          <Image
          src={wingchair}
          alt=" school-library-chair"
          objectFit="contain"
          height={312}
          className="w-[312px] h-[312px] px-8 rounded-[10px] md:px-0 "
        
          />
        </div>
        <div className="flex md:justify-between justify-evenly mt-2">
        <div className="w-auto  mt-2 text-start">
        <p className="md:text-lg font-semibold  text-[#007580]">school stool chair</p>
        <p className="max-w-auto">$20</p>
        </div>
        <div className="w-[44px] h-[44px] bg-[#029FAE] rounded-[10px] mt-2 ">
          <button className="px-2 py-2 text-[white]">        <FiShoppingCart  className="mt-2" size={22}/>

         </button>
        </div>
        </div>

      </div>
      <div className="mb-8 md:mb-0 ">
      <div className="w-auto  h-[312px] items-center ">
        <Image
        src={graychair}
        alt="school-library-chair"
        objectFit="cover"
        className="w-[242px] h-[282px] md:w-[312px]  md:h-[312px] px-4 md:px-0 rounded-[10px]"
        />
</div>
<div className="flex md:justify-between justify-evenly mt-2">
  <div className="w-auto mt-2 text-start">
  <p className="md:text-lg font-semibold text-gray-700">School stool chair</p>
  <p className="max-w-auto">$20</p>
  </div>
  <div className="w-[44px] h-[44px] bg-gray-200 rounded-[10px] mt-2 hover:bg-[#029FAE] hover:text-[white]">
    <button className="px-2 py-2">        <FiShoppingCart   className="items-center text-center mt-2" size={22}/>
    </button>
  </div>
</div>

</div>
<div className=" mb-8 md:mb-0">

  <div className="w-auto  lg:h-[312px] ">
    <Image
    src={blackchair}
    alt="school-library-chair"
    objectFit="cover"
    className="px-4 md:px-0 md:w-[312px] md:h-[312px] w-[242px] h-[282px]rounded-[10px]"
    />
  </div>
  <div className="flex md:justify-between justify-evenly mt-2">
    <div className="w-auto mt-2 text-start">
      <p className="md:text-lg font-semibold text-gray-700">School stool chair</p>
      <p className="max-w-auto">$20</p>
    </div>
    <div className="w-[44px] h-[44px] bg-gray-200 rounded-[10px] mt-2 hover:bg-[#029FAE] hover:text-[white]">
    <button className="px-2 py-2">        <FiShoppingCart   className="items-center text-center mt-2 " size={22}/>
</button>

    </div>
  </div>

</div>
<div className="mb-8 md:mb-0" >
  <div className="  w-auto  lg:h-[312px] items-center">
    <Image
    src={whitw}
    alt="school-chair"
    objectFit="cover"
    className="md:w-[312px] md:h-[312px] w-[242px] h-[282px]"

    />
  </div>
  <div className="flex md:justify-between justify-evenly mt-2">
    <div className="w-auto mt-2 text-start">
      <p className="md:text-lg font-semibold text-gray-700">School stool chair</p>
      <p className="max-w-auto">$20</p>
    </div>
    <div className="w-[44px] h-[44px] bg-gray-200 rounded-[10px] mt-2 hover:bg-[#029FAE] hover:text-[white]">
    <button className="px-2 py-2">        <FiShoppingCart   className="items-center text-center mt-2" size={22}/>
</button>
    </div>
  </div>
</div>
    
</div>

      </div>
    </div>
  );
};
