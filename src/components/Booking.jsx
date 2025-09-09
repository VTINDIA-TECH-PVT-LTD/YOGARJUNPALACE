// src/pages/Booking.jsx
import React, { useState } from "react";
import Footer from "./Footer";

export default function Booking() {
  // State for counters
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  // State for form inputs
  const [formData, setFormData] = useState({
    checkInDate: "",
    checkOutDate: "",
    roomType: "Standard Room",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Validation errors
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // live/inline validation for this field (optional but helpful)
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[name];
      return copy;
    });
  };

  // Increase/decrease counters (min enforced when used)
  const increment = (setter, value) => setter(Number(value) + 1);
  const decrement = (setter, value, min = 0) => setter(Number(value) > min ? Number(value) - 1 : min);

  // Helper: parse YYYY-MM-DD into a local-midnight Date to avoid timezone issues
  const parseDateLocal = (dateString) => {
    if (!dateString) return null;
    const parts = dateString.split("-");
    if (parts.length !== 3) return null;
    const [y, m, d] = parts.map(Number);
    if (Number.isNaN(y) || Number.isNaN(m) || Number.isNaN(d)) return null;
    return new Date(y, m - 1, d); // local midnight
  };

  // Form validation
  const validateForm = () => {
    const errs = {};

    // Prepare dates (local-midnight)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const checkIn = parseDateLocal(formData.checkInDate);
    const checkOut = parseDateLocal(formData.checkOutDate);

    // Check-in Date (required and not in the past)
    if (!formData.checkInDate) {
      errs.checkInDate = "Please select a check-in date.";
    } else if (!checkIn) {
      errs.checkInDate = "Invalid check-in date.";
    } else if (checkIn < today) {
      errs.checkInDate = "Check-in date cannot be in the past. Please choose today or a future date.";
    }

    // Check-out Date (required, not in the past, and not before check-in)
    if (!formData.checkOutDate) {
      errs.checkOutDate = "Please select a check-out date.";
    } else if (!checkOut) {
      errs.checkOutDate = "Invalid check-out date.";
    } else if (checkOut < today) {
      errs.checkOutDate = "Check-out date cannot be in the past.";
    } else if (checkIn && checkOut < checkIn) {
      errs.checkOutDate = "Check-out date cannot be before check-in date.";
    }

    // Name
    if (!formData.name || !formData.name.trim()) {
      errs.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !formData.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    // Phone (10 digits)
    const phoneDigits = formData.phone ? formData.phone.replace(/\D/g, "") : "";
    if (!phoneDigits) {
      errs.phone = "Please enter your mobile number.";
    } else if (!/^\d{10}$/.test(phoneDigits)) {
      errs.phone = "Mobile number must contain exactly 10 digits.";
    }

    // Room type
    if (!formData.roomType) {
      errs.roomType = "Please select a room type.";
    }

    // Guests & rooms
    if (Number(adults) < 1) errs.adults = "At least one adult is required.";
    if (Number(rooms) < 1) errs.rooms = "At least one room is required.";
    if (Number(children) < 0) errs.children = "Children cannot be negative.";

    // Message length (optional limit)
    if (formData.message && formData.message.length > 1000) {
      errs.message = "Message is too long (max 1000 characters).";
    }

    // reCAPTCHA (best-effort — this form has a placeholder so this only runs if grecaptcha exists)
    if (typeof window !== "undefined" && window.grecaptcha && typeof window.grecaptcha.getResponse === "function") {
      const rcResp = window.grecaptcha.getResponse();
      if (!rcResp) errs.recaptcha = "Please complete the reCAPTCHA.";
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      const firstKey = Object.keys(validationErrors)[0];
      const selector = `[name="${firstKey}"]`;
      const elByName = document.querySelector(selector);
      const elById = document.getElementById(firstKey);
      const el = elByName || elById;
      if (el && typeof el.focus === "function") el.focus();

      return;
    }

    setErrors({});

    const payload = {
      ...formData,
      adults,
      children,
      rooms,
    };

    console.log("Form Submitted:", payload);
    alert("Your reservation has been sent successfully.");
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
        height: "auto",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <section id="subheader" className="no-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Booking</h1>
            </div>
          </div>
        </div>
      </section>

      <section id="section-main" className="no-bg no-top" aria-label="section-menu">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="de-content-overlay">
                <form id="contact_form" onSubmit={handleSubmit} noValidate>
                  <div id="step-1" className="row">
                    <div className="col-md-12 mb10">
                      <h4>Choose Dates</h4>
                      <h5 className="mt-3">Check-in date</h5>
                      <input
                        type="date"
                        id="check-in"
                        className="form-control"
                        name="checkInDate"
                        value={formData.checkInDate}
                        onChange={handleInputChange}
                        aria-invalid={errors.checkInDate ? "true" : "false"}
                      />
                      {errors.checkInDate && <small className="text-danger d-block">{errors.checkInDate}</small>}
                      <h5 className="mt-3">Check-out date</h5>
                      <input
                        type="date"
                        id="check-out"
                        className="form-control mt-2"
                        name="checkOutDate"
                        value={formData.checkOutDate}
                        onChange={handleInputChange}
                        aria-invalid={errors.checkOutDate ? "true" : "false"}
                      />
                      {errors.checkOutDate && <small className="text-danger d-block">{errors.checkOutDate}</small>}

                      <div className="guests-n-rooms mt-3">
                        <div className="row">
                          <div className="col-md-4">
                            <h4>Adult</h4>
                            <div className="de-number">
                              <span className="d-minus" onClick={() => decrement(setAdults, adults, 1)}>-</span>
                              <input id="adults" type="text" readOnly value={adults} />
                              <span className="d-plus" onClick={() => increment(setAdults, adults)}>+</span>
                            </div>
                            {errors.adults && <small className="text-danger d-block">{errors.adults}</small>}
                          </div>

                          <div className="col-md-4">
                            <h4>Children</h4>
                            <div className="de-number">
                              <span className="d-minus" onClick={() => decrement(setChildren, children, 0)}>-</span>
                              <input id="children" type="text" readOnly value={children} />
                              <span className="d-plus" onClick={() => increment(setChildren, children)}>+</span>
                            </div>
                            {errors.children && <small className="text-danger d-block">{errors.children}</small>}
                          </div>

                          <div className="col-md-4">
                            <h4>Room</h4>
                            <div className="de-number">
                              <span className="d-minus" onClick={() => decrement(setRooms, rooms, 1)}>-</span>
                              <input id="rooms" type="text" readOnly value={rooms} />
                              <span className="d-plus" onClick={() => increment(setRooms, rooms)}>+</span>
                            </div>
                            {errors.rooms && <small className="text-danger d-block">{errors.rooms}</small>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="select-room">
                    <h4>Select Room</h4>
                    <select
                      name="roomType"
                      id="room-type"
                      className="form-control"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      aria-invalid={errors.roomType ? "true" : "false"}
                    >
                      <option value="Standart Room">Single Room</option>
                      <option value="Deluxe Room">Deluxe Room</option>
                      <option value="Premier Room">Super Deluxe Room</option>
                    </select>
                    {errors.roomType && <small className="text-danger d-block">{errors.roomType}</small>}
                  </div>

                  <div id="step-2" className="row">
                    <h4>Enter your details</h4>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                      {errors.name && <small className="text-danger d-block">{errors.name}</small>}

                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email && <small className="text-danger d-block">{errors.email}</small>}

                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="form-control"
                        placeholder="Your Mobile Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        pattern="[0-9]{10}"
                        maxLength={10}
                        required
                        aria-invalid={errors.phone ? "true" : "false"}
                        style={{ backgroundColor: "transparent" }}
                      />
                      {errors.phone && <small className="text-danger d-block">{errors.phone}</small>}
                    </div>

                    <div className="col-md-6">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        aria-invalid={errors.message ? "true" : "false"}
                      ></textarea>
                      {errors.message && <small className="text-danger d-block">{errors.message}</small>}
                    </div>

                    <div className="col-md-12">
                      <div className="g-recaptcha" data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"></div>
                      {errors.recaptcha && <small className="text-danger d-block">{errors.recaptcha}</small>}

                      <p id="submit" className="mt20">
                        <input type="submit" id="send_message" value="Submit Form" className="btn btn-line" />
                      </p>
                    </div>
                  </div>
                </form>
                <div id="success_message" className="success">
                  Your reservation has been sent successfully.
                </div>
                <div id="error_message" className="error">
                  Sorry, error occurred this time sending your message.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
