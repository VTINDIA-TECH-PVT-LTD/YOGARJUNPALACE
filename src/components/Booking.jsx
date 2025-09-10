// src/pages/Booking.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ for navigation
import axios from "axios"; // ✅ for API requests
import Footer from "./Footer";
// import "../pages/Booking.css"; // ✅ custom CSS if needed

export default function Booking() {
  // State for counters
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  // State for form inputs
  const [formData, setFormData] = useState({
    checkInDate: "",
    checkOutDate: "",
  });

  // State for validation and results
  const [errors, setErrors] = useState({});
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[name];
      return copy;
    });
  };

  // Increment / Decrement counters
  const increment = (setter, value) => setter(Number(value) + 1);
  const decrement = (setter, value, min = 0) =>
    setter(Number(value) > min ? Number(value) - 1 : min);

  // Parse date helper
  const parseDateLocal = (dateString) => {
    if (!dateString) return null;
    const [y, m, d] = dateString.split("-").map(Number);
    if (Number.isNaN(y) || Number.isNaN(m) || Number.isNaN(d)) return null;
    return new Date(y, m - 1, d);
  };

  // Form validation
  const validateForm = () => {
    const errs = {};
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const checkIn = parseDateLocal(formData.checkInDate);
    const checkOut = parseDateLocal(formData.checkOutDate);

    if (!formData.checkInDate) {
      errs.checkInDate = "Please select a check-in date.";
    } else if (!checkIn || checkIn < today) {
      errs.checkInDate = "Invalid check-in date.";
    }

    if (!formData.checkOutDate) {
      errs.checkOutDate = "Please select a check-out date.";
    } else if (!checkOut || checkOut < today) {
      errs.checkOutDate = "Invalid check-out date.";
    } else if (checkIn && checkOut <= checkIn) {
      errs.checkOutDate = "Check-out must be after check-in.";
    }

    if (Number(adults) < 1) errs.adults = "At least one adult is required.";
    if (Number(children) < 0) errs.children = "Children cannot be negative.";

    return errs;
  };

  // Handle availability check
  const handleCheckAvailability = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    setRooms([]);

    const payload = {
      checkin: formData.checkInDate,
      checkout: formData.checkOutDate,
      adults,
      children,
    };

    try {
      const res = await axios.post("/api/roomlist", payload, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("✅ API response:", res.data);

      if (res.data.status && Array.isArray(res.data.data)) {
        setRooms(res.data.data);
      } else {
        alert("❌ No rooms available for the selected dates.");
      }
    } catch (err) {
      console.error("❌ Availability check failed:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="backgroundll"
      style={{
        backgroundImage: "url(/uploads/slider7.jpg)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <section id="subheader" className="no-bg">
        <div className="container text-center">
          <h1>Booking</h1>
        </div>
      </section>

      <section id="section-main" className="no-bg no-top">
        <div className="container">
          <div className="row">
            {/* Booking Form */}
            <div className="col-lg-6 offset-lg-3">
              <div className="de-content-overlay">
                <form id="contact_form" noValidate>
                  <h4>Choose Dates</h4>

                  <h5 className="mt-3">Check-in date</h5>
                  <input
                    type="date"
                    name="checkInDate"
                    className="form-control"
                    value={formData.checkInDate}
                    onChange={handleInputChange}
                  />
                  {errors.checkInDate && (
                    <small className="text-danger d-block">
                      {errors.checkInDate}
                    </small>
                  )}

                  <h5 className="mt-3">Check-out date</h5>
                  <input
                    type="date"
                    name="checkOutDate"
                    className="form-control mt-2"
                    value={formData.checkOutDate}
                    onChange={handleInputChange}
                  />
                  {errors.checkOutDate && (
                    <small className="text-danger d-block">
                      {errors.checkOutDate}
                    </small>
                  )}

                  {/* Counters */}
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <h4>Adults</h4>
                      <div className="de-number">
                        <span
                          className="d-minus"
                          onClick={() => decrement(setAdults, adults, 1)}
                        >
                          -
                        </span>
                        <input type="text" readOnly value={adults} />
                        <span
                          className="d-plus"
                          onClick={() => increment(setAdults, adults)}
                        >
                          +
                        </span>
                      </div>
                      {errors.adults && (
                        <small className="text-danger">{errors.adults}</small>
                      )}
                    </div>

                    <div className="col-md-6">
                      <h4>Children</h4>
                      <div className="de-number">
                        <span
                          className="d-minus"
                          onClick={() => decrement(setChildren, children, 0)}
                        >
                          -
                        </span>
                        <input type="text" readOnly value={children} />
                        <span
                          className="d-plus"
                          onClick={() => increment(setChildren, children)}
                        >
                          +
                        </span>
                      </div>
                      {errors.children && (
                        <small className="text-danger">{errors.children}</small>
                      )}
                    </div>
                  </div>

                  <p className="mt20 text-center">
                    <button
                      type="button"
                      className="btn btn-line"
                      style={{ width: "220px", height: "55px" }}
                      onClick={handleCheckAvailability}
                      disabled={loading}
                    >
                      {loading ? "Checking..." : "Check Availability"}
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Available Rooms Section */}
          {rooms.length > 0 && (
            <div className="row g-4 mt-5">
              {rooms.map((room, idx) => (
                <div className="col-lg-4" key={idx}>
                  <div className="de-room">
                    <div
                      className="d-image"
                      style={{
                        position: "relative",
                        width: "100%",
                        paddingTop: "56.25%", // 16:9 aspect ratio
                        overflow: "hidden",
                        borderRadius: "8px",
                        backgroundColor: "#f8f8f8",
                      }}
                    >
                      <div
                        className="d-label"
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          background: "rgba(0, 128, 0, 0.8)",
                          color: "#fff",
                          padding: "4px 8px",
                          fontSize: "0.9rem",
                          borderRadius: "4px",
                        }}
                      >
                        {room.roomstatus === "0"
                          ? "Available"
                          : "Not Available"}
                      </div>

                      <div
                        className="d-details"
                        style={{
                          position: "absolute",
                          bottom: "10px",
                          left: "10px",
                          background: "rgba(0,0,0,0.5)",
                          color: "#fff",
                          padding: "6px 8px",
                          borderRadius: "4px",
                          fontSize: "0.85rem",
                          display: "flex",
                          flexDirection: "column",
                          gap: "4px",
                        }}
                      >
                        <span className="d-meta-1">
                          <img
                            src="/assets/images/ui/user.svg"
                            alt="Guests"
                            style={{ width: "16px", marginRight: "4px" }}
                          />
                          {room.capacity} Guests
                        </span>
                        <span className="d-meta-2">
                          <img
                            src="/assets/images/ui/floorplan.svg"
                            alt="Size"
                            style={{ width: "16px", marginRight: "4px" }}
                          />
                          {room.roomsize} {room.roomsizemesurement}²
                        </span>
                      </div>

                      <Link to={`/room/${room.roomid}`}>
                        <img
                          src={room.room_imagename}
                          className="img-fluid"
                          alt={room.roomtype}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Link>
                    </div>

                    <div className="d-text">
                      <h3>{room.roomtype}</h3>
                      <p>{room.roomdescription || "Comfortable stay."}</p>
                      <Link to={`/room/${room.roomid}`} className="btn-line">
                        <span>Book Now For ₹{room.rate}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
