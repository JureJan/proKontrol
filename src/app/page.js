// src/app/page.js
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";
import HeroSection1 from "./components/HeroSection1";
import HeroSection2 from "./components/HeroSection2";
import VideoSection from "./components/VideoSection";
import VideoSection2 from "./components/VideoSection2";
import References from "./components/References";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import CompanyInfo from "./components/CompanyInfo";
import ContactForm from "./components/ContactForm";
import MapSection from "./components/MapSection";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <BackgroundImage />
      <HeroSection1 />
      <VideoSection />
      <HeroSection2 />
      <References />
      <VideoSection2 />
      <CompanyInfo />
      <ContactForm />
      <MapSection />
      <Footer />
    </div>
  );
}