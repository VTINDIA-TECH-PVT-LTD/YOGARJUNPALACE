import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import FloatingSocials from './components/FloatingSocials';

import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";

import Booking from "./components/Booking";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";


function App() {
  return (
    <>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />

        <Route path="/booking" element={<Booking />} />     
        <Route path="/gallery" element={<Gallery/> }/>
        <Route path="/contact" element={<Contact />} />

      </Routes>


      <FloatingSocials />


    </>
  );
}

export default App;

