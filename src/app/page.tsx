// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from '@/components/Portfolio'
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FlowerBanner from "@/components/FlowerBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <FlowerBanner imageSrc={"/flower-banner.png"} altText={"test"} />
      <Footer />
    </>
  );
}
