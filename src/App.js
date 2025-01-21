import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


// Component import
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Services from "./component/Services";
import AppStoreBanner from "./component/AppStoreBanner";
import Contact from "./component/Contact";
import Testimonial from "./component/Testimonials";
import Footer from "./component/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner2 from "./component/Banner2";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Banner2 />
      <About />
      <Contact />
      <Services />
      <AppStoreBanner />
      <Testimonial />
      <Footer />
    
    </div>
  );
};

export default App;