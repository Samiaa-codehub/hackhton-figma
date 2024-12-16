import Banner from "@/components/banner";
import Cardheader from "@/components/cardheader";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Logo from "@/components/logo";
import MiddleHeader from "@/components/middleheader";
import Productsection  from "@/components/productsection";
import  Topcategories  from "@/components/topcategories";
import { Ourproduct } from "@/components/ourproduct";

export default function Home() {
  return (
    <div className="h-screen">
      <Banner/>
      <MiddleHeader/>
      <Header/>
      <Hero/>
      <Logo/>
      <Cardheader/>
      <Productsection />
      <Topcategories/>
      <Ourproduct/>
      { <Footer/> }
    </div>
  );
}
