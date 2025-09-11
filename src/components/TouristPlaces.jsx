// src/components/TouristPlaces.jsx
import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

// ✅ Lucide icons
import {
  Waves,
  TowerControl,
  Church,
  TreePalm,
  Landmark,
  Sun,
} from "lucide-react";

const touristPlaces = [
  {
    title: "Puri Beach",
    desc: "Accessible to Puri Beach in just 5 minutes – relax and enjoy the golden sands and soothing waves.",
    img: "/uploads/puri_beach.jpg",
    icon: <Waves size={28} color="#fff" />,
  },
  {
    title: "Puri Beach Lighthouse",
    desc: "Walkable access to the iconic Puri Beach Lighthouse with stunning views of the coastline.",
    img: "/uploads/light_house.jpg",
    icon: <TowerControl size={28} color="#fff" />,
    
  },
  {
    title: "Jagannath Temple",
    desc: "Jagannath Temple is within walkable distance – experience the divine aura of this holy site.",
    img: "/uploads/Jagannath-Temple.jpg",
    icon: <Church size={28} color="#fff" />,
  },
  {
    title: "Marine Drive Road",
    desc: "Take a peaceful walk along Marine Drive Road, soaking in the beauty of the sea and nature.",
    img: "/uploads/marine-drive.jpg",
    icon: <TreePalm size={28} color="#fff" />,
  },
  {
    title: "Sakhi Gopal Temple",
    desc: "Visit the sacred Sakhi Gopal Temple, known for its spiritual significance and heritage.",
    img: "/uploads/Sakhigopala.jpg",
    icon: <Landmark size={28} color="#fff" />,
  },
  {
    title: "Golden Beach, Konark & Chandrabhaga",
    desc: "Explore Golden Beach in Puri, Konark’s Sun Temple, and the serene Chandrabhaga Beach nearby.",
    img: "/uploads/Konark.jpg",
    icon: <Sun size={28} color="#fff" />,
  },
];

const TouristPlaces = () => {
  return (
    <>
      <section
        id="tourist-places"
        style={{
          padding: "80px 0",
          backgroundImage: "url('/uploads/slider7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.4))",
            zIndex: -1,
          }}
        ></div>

        <div className="container">
          {/* Section Heading */}
          <motion.div
            className="row mb-5 text-center"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="col-lg-8 mx-auto">
              
              <h2
                className="fw-bold text-white"
                style={{
                  fontSize: "32px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Tourist Places Near Hotel Yogarjun Palace
              </h2>
              <div
                style={{
                  width: "80px",
                  height: "4px",
                  background: "linear-gradient(90deg, #ff9a9e, #fad0c4)",
                  margin: "12px auto",
                  borderRadius: "10px",
                }}
              ></div>
              <p className="text-light mt-3" style={{ fontSize: "16px" }}>
                Discover the most beautiful attractions around Puri
              </p>
            </div>
          </motion.div>

          {/* Places List */}
          {touristPlaces.map((place, index) => (
            <motion.div
              key={index}
              className="row align-items-center"
              style={{ marginBottom: "55px" }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Text */}
              <div
                className={`col-md-6 ${
                  index % 2 === 0 ? "order-md-1" : "order-md-2"
                }`}
                style={{ marginBottom: "20px" }}
              >
                <motion.div
                  style={{
                    padding: "25px",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "15px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                    fontSize: "15px",
                    lineHeight: "1.7",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "15px",
                  }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <div>{place.icon}</div>

                  {/* Text */}
                  <div>
                    <h4
                      className="fw-bold text-white"
                      style={{ fontSize: "20px" }}
                    >
                      {place.title}
                    </h4>
                    <p className="text-light mt-2 mb-0">{place.desc}</p>
                  </div>
                </motion.div>
              </div>

              {/* Image */}
              <div
                className={`col-md-6 ${
                  index % 2 === 0 ? "order-md-2" : "order-md-1"
                }`}
                style={{ marginBottom: "20px" }}
              >
                <motion.div
                  style={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                  }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    src={place.img}
                    alt={place.title}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
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
