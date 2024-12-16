import whitechair from "../../public/whitechair.png"
import Image from "next/image";
import whitw from "../../public/whitw.png"
import pinkchair from "../../public/pinkchair.png"
import orangechair from "../../public/orange.png"
import { FiShoppingCart } from "react-icons/fi";

export const Productsection = () => {
  return (
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
        src={pinkchair}
        alt="school-library-chair"
        objectFit="cover"
        className=" px-4 md:px-0 rounded-[10px]"
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
    src={orangechair}
    alt="school-library-chair"
    objectFit="cover"
    className=" w-[312px] h-[312px] px-4 md:px-0 "
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
    src={whitechair}
    alt="school-stool"
    objectFit="cover"
    className="  px-4 rounded-[10px]"

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
  );
};
