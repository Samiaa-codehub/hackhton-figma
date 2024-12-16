import React from 'react'
import companylogo from "../../public/companylogo.png"
import companylogo2 from "../../public/companylogo2.png";
import companylogo3 from "../../public/companylogo3.png";
import companylogo4 from "../../public/companylogo4.png";
import companylogo5 from "../../public/companylogo5.png";
import companylogo6 from "../../public/companylogo6.png";
import companylogo7 from "../../public/comp[anylogo7.png";

import Image from 'next/image'
const Logo = () => {
  return (
    <div>
    <div className="max-w-7xl mx-auto flex  flex-col lg:flex-row  justify-center items-center gap-8 px-4 mt-8 md:mt-0">
      <Image
      src={companylogo}
      alt="company-logo"
      width={85}
      height={87}
      />
      <Image src={companylogo2} alt='company-logo' height={107} width={109}/>
      <Image src={companylogo3} alt='company-logo' height={139} width={135}/>
      <Image src={companylogo4} alt='company-logo' height={65} width={63}/>
      <Image src={ companylogo5} alt='company-logo' height={101} width={98}/>
      <Image src={companylogo6} alt='company-logo' height={115} width={113}/>
      <Image src={companylogo7} alt='company-logo' height={87} width={84}/>

    </div>
    </div>
  )
}

export default Logo