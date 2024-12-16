import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center items-center hidden md:block">
    <div className="flex flex-row justify-between items-center sm:px-16 md:px-[150px] gap-6 sm:gap-12 w-full h-[43px] bg-white shadow-[0px_1px_0px_#E1E3E]">
      <nav className="w-[339px] gap-[32px] flex">
        <Link href={"/"} className="text-[#007580] font-medium text-[14px]">
          Home
        </Link>
        <Link
          href={"/"}
          className="text-[#636270] font-medium text-[14px] hover:text-[#007580]"
        >
          Shop
        </Link>
        <Link
          href={"/"}
          className="text-[#636270] font-medium text-[14px] hover:text-[#007580]"
        >
          Product
        </Link>
        <Link
          href={"/"}
          className="text-[#636270] font-medium text-[14px] hover:text-[#007580]"
        >
          About
        </Link>
      </nav>
      <div className="w-Hug-[168px] gap-[8px] flex text-[#272343]">
        <p className="text-[14px] font-medium">Contact:</p>
        <span className="text-[14px] font-medium">(808) 555-0111</span>
      </div>
    </div>
    </div>
  );
};

export default Header;
