// src/pages/TouristPlaces.jsx
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const places = [
  {
    name: "Puri Beach",
    desc: "Just 5 minutes from our hotel, perfect for sunrise walks and evening strolls.",
    img: "https://www.adotrip.com/public/images/city/master_images/5e412e419339f-Puri_Sightseeing.jpg",
  },
  {
    name: "Puri Lighthouse",
    desc: "Walkable distance to the iconic Lighthouse with panoramic views.",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/94/Puri_Lighthouse.jpg",
  },
  {
    name: "Jagannath Temple",
    desc: "The sacred Jagannath Temple is just a short walk away.",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Shree_Jagannath_Temple%2C_Puri.jpg",
  },
  {
    name: "Marine Drive Road",
    desc: "A peaceful seaside drive, walkable from the hotel.",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/72/Marine_drive_puri.jpg",
  },
  {
    name: "Sakhi Gopal Temple",
    desc: "A historic temple dedicated to Lord Krishna nearby.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Sakhigopal_Temple.jpg",
  },
  {
    name: "Golden Beach, Konark & Chandrabhaga",
    desc: "UNESCO awarded Golden Beach, Sun Temple, and Chandrabhaga close to Puri.",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Konark_Sun_Temple_01.jpg",
  },
];

const TouristPlaces = () => {
  return (
    <section
      className="py-16 bg-gradient-to-b from-gray-50 to-gray-100"
      id="tourist-places"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h4 className="text-blue-600 font-semibold uppercase tracking-wider">
            Tourist Attractions
          </h4>
          <h2 className="text-4xl font-bold text-gray-800">
            Explore Near{" "}
            <span className="text-blue-600">Hotel Yogarjuna, Puri</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Stay at Hotel Yogarjuna and explore the iconic landmarks of Puri.
            From temples to beaches, experience a perfect blend of spirituality
            and nature.
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((place, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Fixed Aspect Ratio Box */}
              <div className="aspect-[16/9] w-full">
                <img
                  src={place.img}
                  alt={place.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

              {/* Text */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FaMapMarkerAlt className="text-yellow-400" />
                  {place.name}
                </h3>
                <p className="text-sm text-gray-200 mt-1">{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TouristPlaces;
