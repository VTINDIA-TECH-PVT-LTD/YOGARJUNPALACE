// src/components/TouristPlaces.jsx
import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

const touristPlaces = [
  {
    title: "Puri Beach",
    desc: "Accessible to Puri Beach in just 5 minutes – relax and enjoy the golden sands and soothing waves.",
    img: "/uploads/puri_beach.jpg",
  },
  {
    title: "Puri Beach Lighthouse",
    desc: "Walkable access to the iconic Puri Beach Lighthouse with stunning views of the coastline.",
    img: "/uploads/light_house.jpg",
  },
  {
    title: "Jagannath Temple",
    desc: "Jagannath Temple is within walkable distance – experience the divine aura of this holy site.",
    img: "/uploads/Jagannath-Temple.jpg",
  },
  {
    title: "Marine Drive Road",
    desc: "Take a peaceful walk along Marine Drive Road, soaking in the beauty of the sea and nature.",
    img: "/uploads/marine-drive.jpg",
  },
  {
    title: "Sakhi Gopal Temple",
    desc: "Visit the sacred Sakhi Gopal Temple, known for its spiritual significance and heritage.",
    img: "/uploads/Sakhigopala.jpg",
  },
  {
    title: "Golden Beach, Konark & Chandrabhaga",
    desc: "Explore Golden Beach in Puri, Konark’s Sun Temple, and the serene Chandrabhaga Beach nearby.",
    img: "/uploads/Konark.jpg",
  },
];

const TouristPlaces = () => {
  return (
    <>
    <section
      id="tourist-places"
      style={{
        padding: "60px 0",
        // backgroundImage: "url('/uploads/slider7.jpg')", // 🔥 change with your bg image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Overlay for better readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(244, 242, 242, 1)",
          zIndex: -1,
        }}
      ></div>

      <div className="container">
        {/* Section Heading */}
        <div className="row mb-4 text-center">
          <div className="col-lg-8 mx-auto">
            <h2 className="fw-bold text-dark" style={{ fontSize: "28px" }}>
              Tourist Places Near Hotel Yogarjun Palace
            </h2>
            <span className="small-border"></span>
            <p className="text-muted mt-2" style={{ fontSize: "15px" }}>
              Discover the nearby attractions around Puri Beach Hotel
            </p>
          </div>
        </div>

        {/* Places List */}
        {touristPlaces.map((place, index) => (
          <motion.div
            key={index}
            className="row align-items-center"
            style={{ marginBottom: "35px" }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Text */}
            <div
              className={`col-md-6 ${
                index % 2 === 0 ? "order-md-1" : "order-md-2"
              }`}
              style={{ marginBottom: "15px" }}
            >
              <div
                style={{
                  padding: "20px",
                  background: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                <h4 className="fw-bold text-dark" style={{ fontSize: "18px" }}>
                  {place.title}
                </h4>
                <p className="text-muted mt-2 mb-0">{place.desc}</p>
              </div>
            </div>

            {/* Image */}
            <div
              className={`col-md-6 ${
                index % 2 === 0 ? "order-md-2" : "order-md-1"
              }`}
              style={{ marginBottom: "15px" }}
            >
              <motion.img
                src={place.img}
                alt={place.title}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
      <Footer />
    </>
  );
};

export default TouristPlaces;
