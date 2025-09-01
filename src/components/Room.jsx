// src/components/Room.jsx
import React from "react";
import { Link } from "react-router-dom";
import { MdHotel } from "react-icons/md";
import { FaUserFriends, FaRulerCombined } from "react-icons/fa";

const Room = () => {
  return (
    <section
      className="jarallax"
      style={{
        backgroundImage:  "url(/uploads/rooms.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // for parallax-like effect
        padding: "60px 0",
      }}
    >
      <div className="container">
        <div className="row gx-4">
          <div className="col-lg-12 text-center">
            <h2 className="title center text-white">
              Our Rooms
              <span className="small-border"></span>
            </h2>
          </div>

          {/* Standard Room */}
          <div className="col-lg-4">
            <div className="de-room">
              <div className="d-image">
                <div className="d-label">only 2 room left</div>
                <div className="d-details">
                  <span className="d-meta-1">
                    <FaUserFriends className="me-1" /> 2 Guests
                  </span>
                  <span className="d-meta-2">
                    <FaRulerCombined className="me-1" /> 30 ft
                  </span>
                </div>
                <a href="room-single.html">
                  <img
                    src="/uploads/single_room.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div className="d-text">
                <h3>SINGLE ROOM</h3>
                <p>
                  The Single Room of Hotel Yogarjun Palace Puri Beach Hotel is a
                  comfortable and cozy space that offers a refreshing and
                  rejuvenating stay.
                </p>
                <Link to="/booking" className="btn-line">
                  <MdHotel className="me-2" />
                  <span>Book Now</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Deluxe Room */}
          <div className="col-lg-4">
            <div className="de-room">
              <div className="d-image">
                <div className="d-label">only 1 room left</div>
                <div className="d-details">
                  <span className="d-meta-1">
                    <FaUserFriends className="me-1" /> 2 Guests
                  </span>
                  <span className="d-meta-2">
                    <FaRulerCombined className="me-1" /> 35 ft
                  </span>
                </div>
                <a href="room-single.html">
                  <img
                    src="/uploads/deluxe.png"
                    style={{ width: "389px", height: "292px" }}
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div className="d-text">
                <h3>Deluxe Room</h3>
                <p>
                  The Deluxe Room at Hotel Yogarjun Palace Puri Beach Hotel
                  offers an exquisite experience with its spacious and
                  comfortable layout.
                </p>
                <Link to="/booking" className="btn-line">
                  <MdHotel className="me-2" />
                  <span>Book Now</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Premier Room */}
          <div className="col-lg-4">
            <div className="de-room">
              <div className="d-image">
                <div className="d-label">only 3 room left</div>
                <div className="d-details">
                  <span className="d-meta-1">
                    <FaUserFriends className="me-1" /> 2 Guests
                  </span>
                  <span className="d-meta-2">
                    <FaRulerCombined className="me-1" /> 40 ft
                  </span>
                </div>
                <a href="room-single.html">
                  <img
                    src="/uploads/super_deluxe.jpg"
                    style={{ width: "389px", height: "292px" }}
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div className="d-text">
                <h3>SUPER DELUXE ROOM</h3>
                <p>
                  The Super Deluxe Room of Hotel Yogarjun Palace is a perfect
                  blend of comfort. The room is equipped with modern amenities
                  to ensure a delightful stay.
                </p>
                <Link to="/booking" className="btn-line">
                  <MdHotel className="me-2" />
                  <span>Book Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Room;
