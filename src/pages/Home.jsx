import React, { useState } from "react";
import { Link } from "react-router-dom";
import YogarjunLogo from "../assets/YogarjunLogo.png";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Timing from "../components/Timing";
import Room from "../components/Room";
import Testimonial from "../components/Testimonial";
import WhyChooseUs from "../components/WhyChooseUs";
import Rooms from "./Rooms";
import TouristAttractions from "../components/TouristAttractions";


const Home = () => {
 

  return (
    <>
    

      {/* Banner section */}
       <Banner />
       <Timing  />
       <Room />
       <WhyChooseUs />
       <TouristAttractions />
       
       <Testimonial />
       

       <Footer />
     

    </>
  );
};

export default Home;
