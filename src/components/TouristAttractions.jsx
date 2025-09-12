import { i } from "framer-motion/client";
import React from "react";
import { Link } from "react-router-dom";
import { FaUmbrellaBeach, FaLightbulb, FaHome, FaRoad } from "react-icons/fa";

const TouristAttractions = () => {
  return (
    <section id="tourist-attractions" className="py-5 bg-light">
      <div className="container">
        {/* Section Title - Centered */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="fw-bold text-dark mb-0">Nearby Attractions</h2>
            <span className="small-border"></span>
          </div>
        </div>

        {/* Content Row */}
        <div className="row align-items-center g-4">
          {/* Left Column - Attractions */}
          <div className="col-lg-6">
            <ul className="list-unstyled m-0">
              <li className="d-flex mb-3">
                <span className="me-3 text-primary fs-3">
                  <FaUmbrellaBeach />
                </span>
                <div>
                  <h6 className="fw-bold text-dark mb-1">
                    Accessible to Puri Beach
                  </h6>
                  <p className="text-muted small mb-0">
                    Just 5 minutes from our hotel.
                  </p>
                </div>
              </li>

              <li className="d-flex mb-3">
                <span className="me-3 text-success fs-3">
                  <FaLightbulb />
                </span>
                <div>
                  <h6 className="fw-bold text-dark mb-1">
                    Puri Beach Lighthouse
                  </h6>
                  <p className="text-muted small mb-0">
                    Walkable access to the iconic lighthouse.
                  </p>
                </div>
              </li>

              <li className="d-flex mb-3">
                <span className="me-3 text-danger fs-3">
                  <FaHome />
                </span>
                <div>
                  <h6 className="fw-bold text-dark mb-1">Jagannath Temple</h6>
                  <p className="text-muted small mb-0">
                    Walkable distance to the famous temple.
                  </p>
                </div>
              </li>

              <li className="d-flex mb-3">
                <span className="me-3 text-warning fs-3">
                  <FaRoad />
                </span>
                <div>
                  <h6 className="fw-bold text-dark mb-1">Marine Drive Road</h6>
                  <p className="text-muted small mb-0">
                    Easily accessible, just a short walk away.
                  </p>
                </div>
              </li>
            </ul>

            {/* Button under list */}
            <div className="mt-4 ">
              <Link
                to="/touristplaces"
                className="px-3 py-3 rounded-pill fw-bold text-white shadow-lg"
                style={{
                  background:
                    " #fb9936ff", // gradient colors
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 6px 20px rgba(255, 118, 136, 0.5)",
                  display: "inline-block",
                  fontSize: "15px",
                  letterSpacing: "0.5px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.07)";
                  e.target.style.boxShadow =
                    "0 8px 25px rgba(255, 118, 136, 0.7)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow =
                    "0 6px 20px rgba(255, 118, 136, 0.5)";
                }}
              >
                🚀 View More
              </Link>
            </div>
          </div>

          {/* Right Column - Hotel Image */}
          <div className="col-lg-6 text-center">
            <img
              src="/uploads/img2.jpg"
              alt="Hotel Yogarjun Palace"
              className="img-fluid rounded-3 shadow"
              style={{
                maxHeight: "350px",
                objectFit: "cover",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TouristAttractions;
