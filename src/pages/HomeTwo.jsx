import React from "react";
import Navbar2 from "../components/Navbar2";
import LandingPageTwo from "../components/LandingPageTwo";
import NeedItems2 from "../components/NeedItems2";
import PopularItems2 from "../components/PopularItems2";
import FeaturedItems2 from "../components/FeaturedItems2";
import AboutUs2 from "../components/AboutUs2";
import Journey2 from "../components/Journey2";
import Footer2 from "../components/Footer2";

const HomeTwo = () => {
  return (
    <div className="bg-black">
      <Navbar2 />
      <LandingPageTwo />
      <NeedItems2 />
      <PopularItems2 />
      <FeaturedItems2 />
      <AboutUs2 />
      <Journey2 />
      <Footer2 />
    </div>
  );
};

export default HomeTwo;
