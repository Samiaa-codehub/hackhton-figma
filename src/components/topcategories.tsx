import chairdesk from "../../public/chairdesk.png";
import Image from "next/image";
import React from "react";
import wingchair from "../../public/wingchair.png";
import woodenchair from "../../public/woodenchair.png";

 const Topcategories = () => {
  return (
    <div className=" mt-[200px]">
    
<div className="max-w-7xl h-[44px] mx-auto mt-8 md:mt-0 text-center md:text-start  ">
    <h1 className="w-[286px] text-[32px] text-[#272343] top-[1270px]">Top Categories</h1>
    
</div>
      <div className="flex md:flex-row  flex-col md:justify-evenly justify-between gap-8 mx-auto w-full items-center   mt-[50px]">
        <div className="relative bg-[white] rounded-lg overflow-hidden shadow-lg max-w-[312px] ">
          <Image
            src={wingchair}
            alt="wing-chair"
            width={424}
            height={424}
            className="rounded-[10px] md:w-[424px] md:h-[424px] w-[242px] h-[282px]"
          />
          <div className="absolute bottom-0 bg-[black] bg-opacity-50 text-[white]  w-[312px] rounded-[5px]">
            <h3 className="text-lg font-semibold px-2">Wing Chair</h3>
            <p className="text-[10px] px-2">3,584 Products</p>
          </div>
        </div>

        <div className="relative bg-[white] rounded-[10px] overflow-hidden shadow-lg max-w-[312px]  ">
          <Image
            src={woodenchair}
            alt="wooden-chair"
            width={424}
            height={424}
            className="rounded-[10px] md:h-[424px] md:w-[424px] w-[242px] h-[282px]"
          />
          <div className="absolute bottom-0 bg-[black] bg-opacity-50 text-[white] w-[312px] rounded-[5px]">
            <h3 className="text-lg font-semibold px-2">Wooden Chair</h3>
            <p className="text-[10px] px-2">150 Products</p>
          </div>
        </div>
        <div className="relative  bg-[white] rounded-[10px] overflow-hidden shadow-lg max-w-[312px]">
          <Image
            src={chairdesk}
            alt="desk-chair"
            className=" rounded-[10px] md:w-[424px] md:h-[424px] w-[242px] h-[282px]"
            height={424}
            width={424}
          />

          <div className="absolute bottom-0 bg-[black] bg-opacity-50 text-[white] w-[312px] rounded-[5px]">
            <h3 className="text-lg font-semibold px-2">Desk Chair</h3>
            <p className="text-[10px] px-2">150 Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Topcategories