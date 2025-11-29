import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Navbar";
import Image from "next/image";
import ScrollVelocity from "./component/ScrollVelocity";

export default function Page() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Footer />
    </>
  );
}
