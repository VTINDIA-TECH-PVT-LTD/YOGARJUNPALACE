
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {
  FaUtensils,
  FaSwimmingPool,
  FaDumbbell,
  FaGlassMartiniAlt,
  FaChalkboardTeacher,
  FaUmbrellaBeach,
  FaWifi,
  FaLock,
  FaCar,
} from "react-icons/fa";


const About = () => {
  return (

    <>

    {/* Fixed Background */}
      <div
        id="background"
        style={{
          backgroundImage:
            "url('/uploads/slider7.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "260%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></div>


    <div id="content-absolute">
      {/* Subheader */}
      <section id="subheader" className="no-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h4>We Are</h4>
              <h1>Hotel Yogarjun Palace</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section
        id="section-main"
        className="no-bg no-top"
        aria-label="section-menu"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-6">
              <div className="spacer-double sm-hide"></div>
              <img
                src="/uploads/img2.jpg"
                alt=""
                className="img-responsive wow fadeInUp"
                data-wow-duration="1s"
              />
            </div>

            <div className="col-lg-3 col-6">
              <img
                src="/uploads/7.jpg"
                alt=""
                className="img-responsive wow fadeInUp"
                data-wow-duration="1.5s"
              />
            </div>

            <div className="col-lg-6 wow fadeIn">
              <div className="padding20">
                <h2 className="title mb10">
                  The Luxury Experience
                  <br />
                  Unwind at Puri Beach Hotel
                  <span className="small-border"></span>
                </h2>

                <p>
                   Welcome to Yogarjun, your exquisite escape in the heart of Puri, the best hotel near the sea beach. Discover modern elegance, impeccable service, and breathtaking views that perfectly complement the serene beauty at Puri Beach Hotel. Indulge in luxury, savor exquisite dining, and make every moment memorable with us. Your tranquil retreat by the sea awaits at Hotel Yogarjun Palace, the best hotel in Puri near the sea beach.
                </p>

                <a href="room-2-cols.html" className="btn-line">
                  <span>Choose Room</span>
                </a>
              </div>
            </div>

            <div className="clearfix"></div>
          </div>

          <div className="spacer-double"></div>

          {/* Facilities Section */}
          <div className="row gx-4">
            <div className="col-lg-12 text-center">
              <h2 className="title center">
                Hotel Facilities
                <span className="small-border"></span>
              </h2>
            </div>
          </div>

          <div className="row">
  {/* Restaurant */}
  <div className="col-md-4 mb-3">
    <div className="box-icon">
      <span className="icon bg-color" style={{ padding: "15px" }}>
        <FaUtensils size={40} />
      </span>
      <div className="text">
        <h3 className="style-1">Restaurant</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
        </p>
      </div>
    </div>
  </div>

  {/* Swimming Pool */}
  <div className="col-md-4 mb-3">
    <div className="box-icon">
      <span className="icon bg-color" style={{ padding: "15px" }}>
        <FaSwimmingPool size={40} />
      </span>
      <div className="text">
        <h3 className="style-1">Swimming Pool</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
        </p>
      </div>
    </div>
  </div>

  {/* Fitness Area */}
  <div className="col-md-4 mb-3">
    <div className="box-icon">
      <span className="icon bg-color" style={{ padding: "15px" }}>
        <FaDumbbell size={40} />
      </span>
      <div className="text">
        <h3 className="style-1">Fitness Area</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
        </p>
      </div>
    </div>
  </div>

  {/* Mini Bar */}
  <div className="col-md-4 mb-3">
    <div className="box-icon">
      <span className="icon bg-color" style={{ padding: "15px" }}>
        <FaGlassMartiniAlt size={40} />
      </span>
      <div className="text">
        <h3 className="style-1">Mini Bar</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
        </p>
      </div>
    </div>
  </div>

  {/* Meeting Room */}
  <div className="col-md-4 mb-3">
    <div className="box-icon">
      <span className="icon bg-color" style={{ padding: "15px" }}>
        <FaChalkboardTeacher size={40} />
      </span>
      <div className="text">
        <h3 className="style-1">Meeting Room</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
        </p>
      </div>
    </div>
  </div>

  {/* Laundry Service */}
<div className="col-md-4 mb-3">
  <div className="box-icon">
    <span className="icon bg-color" style={{ padding: "15px" }}>
      <FaUmbrellaBeach size={40} />
    </span>
    <div className="text">
      <h3 className="style-1">Terrace</h3>
      <p>
        Relax and unwind at our open terrace, offering a peaceful ambiance
        with beautiful views for a refreshing experience.
      </p>
    </div>
  </div>
</div>

  {/* Satellite TV */}
  

<div className="col-md-4 mb-3">
  <div className="box-icon">
    <span className="icon bg-color" style={{ padding: "15px" }}>
      <FaWifi size={40} />
    </span>
    <div className="text">
      <h3 className="style-1">Free WiFi</h3>
      <p>
        Enjoy high-speed internet access throughout the hotel premises to stay
        connected with your loved ones or work on the go.
      </p>
    </div>
  </div>
</div>


  {/* Safe Box */}
  <div className="col-md-4 mb-3">
    <div className="box-icon">
      <span className="icon bg-color" style={{ padding: "15px" }}>
        <FaLock size={40} />
      </span>
      <div className="text">
        <h3 className="style-1">Safe Box</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
        </p>
      </div>
    </div>
  </div>

  {/* Parking Area */}
  <div className="col-md-4 mb-3">
    <div className="box-icon">
      <span className="icon bg-color" style={{ padding: "15px" }}>
        <FaCar size={40} />
      </span>
      <div className="text">
        <h3 className="style-1">Parking Area</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
        </p>
      </div>
    </div>
  </div>
</div>

        </div>
      </section>
      <Footer />
    </div>

    </>

  );
};

export default About;
