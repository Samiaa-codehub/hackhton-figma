import image from "../../public/image.png";
import Image from "next/image";
import logoicon from "./../../public/Logo Icon.png";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Footer =()=>{
    return(
    
<footer className="text-gray-600 body-font mt-[80px]  ">
  <hr className="text-gray-600"/>
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex flex-col  gap-2 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex  gap-2 title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <Image
        src={logoicon}
        alt="logo-icon"/>
      
      <p className="mt-2 md:text-[22px] text-gray-500 font-bold">
    Comforty
      </p>
      </a>

    
    <p className="text-md text-gray-500">Vinamus tristique odio sit amet veil semper,eu posuere turpis interdum. cras egestas purus</p>
    <div className="flex  gap-4 ml-9">
    <button className="flex gap-4 border border-[#029FAE] rounded-[50px] h-8 w-8">
    <FaFacebook className="px-2" size={30}/>
    </button>
    <button>
    <FaTwitter/>
    </button>
    <button>
    <FaLinkedin/>
    </button>
    <button>
    <FaYoutube/>

    </button>
    </div>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 opacity-[50%]">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-[black] font-[400] text-[20px] hover:text-[#002FAE] hover:underline">Sofa</a>
          </li>
          <li>
            <a className="text-[black] font-[400] text-[20px] hover:text-[#002FAE] hover:underline">Armchair</a>
          </li>
          <li>
          <a className="text-[black] font-[400] text-[20px] hover:text-[#002FAE] hover:underline">Wing Chair</a>

          </li>
          <li>
          <a className="text-[black] font-[400] text-[20px] hover:text-[#002FAE] hover:underline">Wooden Chair</a>

          </li>
          <li>
          <a className="text-[black] font-[400] text-[20px] hover:text-[#002FAE] hover:underline">Park Bench</a>

          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 opacity-[50%]">
          SUPPORT
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-[black] text-[20px] font-[400] hover:text-[#002FAE] hover:underline">Helps & Support</a>
          </li>
          <li>
          <a className="text-[black] font-[400] text-[20px] hover:text-[#002FAE] hover:underline">Terms & Conditions</a>

          </li>
          <li>
          <a className="text-[black] font-[400] text-[20px] hover:text-[#002FAE] hover:underline">Privacy & Policy</a>

          </li>
          <li>
          <a className="text-[black] font-[400] text-[20px] hover:text-[#002FAE] hover:underline">Help</a>

          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full md:px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 opacity-[50%]">
          NEWSLETTER
        </h2>
        <div className="flex gap-2">
          <input placeholder=" your email" className="border md:w-[480px] rounded-[10px] text-[18px]  md:px-2"></input>
          <button className="bg-[#029FAE] text-[white] text-md rounded-[10px] px-2 py-2 md:w-[150px]">Subscribe</button>
        </div>
  
             <p className="text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">
      @ 2021 - Blogy - Designed & Develop by <span className="font-semibold text-[black]">Zakirsoft</span>
        
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="">
          <Image
          src={image}
          alt="footer-logo"
          className="text-[white] bg-[white]"
          />
        </a>
      </span>
    </div>
  </div>
</footer>)
}
export default Footer