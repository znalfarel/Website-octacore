
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Navbar";
import Testimoni from "./components/Testimoni";
// import Portfolio from "./components/Portfolio";

export default function Page() {
  return (
    <>
      <Nav />
      <HeroSection />
      {/* <Portfolio /> */}
      <Testimoni />
      <Footer />
    </>
  );
}
