import { FiShoppingCart } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import Image from 'next/image'
import React from 'react'
import logoicon from "../../public/Logo Icon.png"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";

const MiddleHeader = () => {
  return(
    <div className="flex  flex-row justify-between items-center py-5 px-2  md:px-[50px] lg:px-[150px] gap-[20px]  w-full  bg-[#F0F2F3]">
  

        <div className='md:w-[166px] gap-[8px]  flex'>
           <Image
           src={logoicon}
           alt='logoicon'
           width={40}
           height={40}
           className="text-center items-center lg:w-[40px] lg:h-[40px] w-[20px] h-[20px] "
           />
            <h1 className=' text-[18px] lg:text-[26px] font-[500] text-[#272343]'>Comforty</h1>
        </div>
        <div className='hidden sm:flex w-full lg:w-[120px] lg:gap-[12px] rounded-[8px] bg-[#FFFFFF]  py-1 px-2'>
        <FiShoppingCart  className="mt-2"/>
         <h2 className="font-[500] text-[#272343] text-[12px] text-center items-center py-2 w-[26px]">Cart</h2>
         <p className="h-[20px] w-[20px] rounded-[50%] bg-[#007580] text-[#FFFFFF] px-1 mt-2 ">2</p>
        </div>
        <Sheet>
  <SheetTrigger><button className="text-[26px] rounded-md md:hidden lg:hidden"><IoMdMenu/></button></SheetTrigger>
  <SheetContent className="bg-[white]">
    <SheetHeader>
      <SheetTitle className="text-[20px] flex  justify-center gap-2 text-center"><Image
      src={logoicon} alt="logo-icon" width={30} height={20} />Comforty</SheetTitle>
      <SheetDescription>
        </SheetDescription>
      
    
      <nav className=" gap-[60px] flex flex-col py-2 mt-8">
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
    

  

      
    </SheetHeader>
  </SheetContent>
</Sheet>

    </div>
  )
}

export default MiddleHeader