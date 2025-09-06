import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import FloatingSocials from './components/FloatingSocials';

import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import DeluxeRoom from "./pages/DeluxeRoom";
import SuperDeluxeRoom from "./pages/SuperDeluxeRoom";
import ProfileAuth from "./pages/ProfileAuth";

import Booking from "./components/Booking";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import TouristPlaces from "./components/TouristPlaces";
import ScrollToTopButton from "./components/ScrollToTopButton";
import LoginPopup from "./components/LoginPopup";



function App() {
  return (
    <>

      <Header />
     

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/single-room" element={<SingleRoom />} />
        <Route path="/deluxe-room" element={<DeluxeRoom />} />
        <Route path="/super-deluxe-room" element={<SuperDeluxeRoom />} />

        <Route path="/touristplaces" element={<TouristPlaces />} />

        <Route path="/booking" element={<Booking />} />    
        <Route path="/gallery" element={<Gallery/> }/>
        <Route path="/contact" element={<Contact />} />

        <Route path="/Profile" element={<ProfileAuth />} />

      </Routes>
      <ScrollToTopButton />
      <LoginPopup />


      <FloatingSocials />


    </>
  );
}

export default App;

