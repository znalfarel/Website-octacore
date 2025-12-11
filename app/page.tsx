
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import Nav from "@/app/components/Navbar";
import Testimoni from "@/app/components/Testimoni";
import Portfolio from "@/app/components/Portfolio";
import TeamSection from "./components/TeamSection";

export default function Page() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Portfolio />
      <TeamSection />
      <Testimoni />
      <Footer />
    </>
  );
}
