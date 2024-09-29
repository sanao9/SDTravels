import Card from "@/components/Card";
import Header from "@/components/common/Header";
import Form from "@/components/Form";
import PackagesGrid from "@/components/PackagesGrid";
import SlideShow from "@/components/SlideShow";
import Image from "next/image";
import Gallery from "@/components/gallery";
import Banner2 from "@/components/Banner2";
import SlideShow2 from "@/components/SlideShow2";
import Review from "@/components/Review";
import Footer from "@/components/common/Footer";
import Carousel from "@/components/Carousel";


export default function Home() {
  return (
    <div>
      <Header/>
      <SlideShow/>
      <Carousel/>
     <PackagesGrid/>
     <Gallery/>
     <Banner2/>
     <SlideShow2/>
     <Review/>
     <Footer/>
    </div>

  );
}
