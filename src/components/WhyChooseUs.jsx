import React from "react";
import { FaUtensils, FaBed, FaGlassCheers, FaTree, FaParking,FaMapMarkerAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-4 bg-light" >
      <div className="container">
        {/* Section Title */}
        <div className="row mb-4 text-center">
          <div className="col-lg-8 mx-auto">
            <h2 className="display-6 fw-bold text-dark">Why Choose Us</h2>
            <span className="small-border"></span>
            <p className="text-muted mt-2">
              Discover the Best Hotel in Puri Near Sea Beach –{" "}
              <span className="fw-semibold">Hotel Yogarjun Palace</span>
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="row g-3">
          {/* ✅ Great Location */}
          <div className="col-md-6">
            <div className="d-flex p-3 bg-white shadow-sm rounded-3 h-100">
              <span className="me-2 text-info fs-2">
                <FaMapMarkerAlt />
              </span>
              <div>
                <h5 className="fw-bold text-dark">Great Location</h5>
                <p className="text-muted mb-0 small">
                  We are located in Baliapanda, just minutes away from Puri Beach, the Jagannath Temple, 
                  and other famous attractions, making it easy to explore the best of Puri.
                </p>
              </div>
            </div>
          </div>
          {/* Rooftop Restaurant */}
          <div className="col-md-6">
            <div className="d-flex p-3 bg-white shadow-sm rounded-3 h-100">
              <span className="me-2 text-primary fs-2">
                <FaUtensils />
              </span>
              <div>
                <h5 className="fw-bold text-dark">Rooftop Restaurant</h5>
                <p className="text-muted mb-0 small">
                  Enjoy exquisite dining at our rooftop restaurant with a stunning sea-facing view in Puri.
                  Experience the ambiance, feel the soothing sound of beach waves at the Best Hotel in Puri Near Sea Beach.
                </p>
              </div>
            </div>
          </div>

          {/* Luxurious Room */}
          <div className="col-md-6">
            <div className="d-flex p-3 bg-white shadow-sm rounded-3 h-100">
              <span className="me-2 text-warning fs-2">
                <FaBed />
              </span>
              <div>
                <h5 className="fw-bold text-dark">Luxurious Room</h5>
                <p className="text-muted mb-0 small">
                  Relax in our luxurious rooms offering modern amenities and unparalleled comfort.
                  Experience the finest stay, ensuring a memorable visit.
                </p>
              </div>
            </div>
          </div>

          {/* Banquet Hall */}
          <div className="col-md-6">
            <div className="d-flex p-3 bg-white shadow-sm rounded-3 h-100">
              <span className="me-2 text-danger fs-2">
                <FaGlassCheers />
              </span>
              <div>
                <h5 className="fw-bold text-dark">Banquet Hall</h5>
                <p className="text-muted mb-0 small">
                  Celebrate your special occasions in our elegant banquet hall.
                  Choose the Best Hotel Near Puri Beach for unforgettable events and gatherings with a touch of sophistication.
                </p>
              </div>
            </div>
          </div>

          {/* Open Garden */}
          <div className="col-md-6">
            <div className="d-flex p-3 bg-white shadow-sm rounded-3 h-100">
              <span className="me-2 text-success fs-2">
                <FaTree />
              </span>
              <div>
                <h5 className="fw-bold text-dark">Open Garden</h5>
                <p className="text-muted mb-0 small">
                  Stroll through our serene open garden, a tranquil haven amidst nature.
                  Stay at A One Lagoon Puri Beach Hotel for a peaceful and rejuvenating experience.
                </p>
              </div>
            </div>
          </div>

          {/* In-House Parking */}
<div className="col-md-6 mx-auto">
  <div className="d-flex p-3 bg-white shadow-sm rounded-3 h-100">
    <span className="me-2 text-dark fs-2">
      <FaParking />
    </span>
    <div>
      <h5 className="fw-bold text-dark">In-House Parking</h5>
      <p className="text-muted mb-0 small">
        Ensure a hassle-free stay with our in-house parking facilities.
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
