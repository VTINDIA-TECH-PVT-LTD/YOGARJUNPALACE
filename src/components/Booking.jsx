// src/pages/Booking.jsx
import React, { useState } from "react";
import Footer from "./Footer";


const Booking = () => {
  // State for counters
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  // State for form inputs
  const [formData, setFormData] = useState({
    date: "",
    roomType: "Standart Room",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Increase/decrease counters
  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => setter(value > 0 ? value - 1 : 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { ...formData, adults, children, rooms });
    alert("Your reservation has been sent successfully.");
  };

  return (
    <div
    id="backgroundll"
            data-bgimage="url(/uploads/slider7.jpg) fixed"
            style={{
                minHeight: "100vh",
                height: "auto",
                overflowX: "hidden",
                overflowY: "auto",
            }}
    >
      {/* New Subheader Section */}
      <section id="subheader" className="no-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Booking</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section
        id="section-main"
        className="no-bg no-top"
        aria-label="section-menu"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="de-content-overlay">
                <form id="contact_form" onSubmit={handleSubmit}>
                  {/* Step 1: Date + Guest Info */}
                  <div id="step-1" className="row">
                    <div className="col-md-12 mb10">
                      <h4>Choose Date</h4>
                      <input
                        type="date"
                        id="date-picker"
                        className="form-control"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                      />

                      {/* Guests & Rooms */}
                      <div className="guests-n-rooms">
                        <div className="row">
                          <div className="col-md-4">
                            <h4>Adult</h4>
                            <div className="de-number">
                              <span
                                className="d-minus"
                                onClick={() => decrement(setAdults, adults)}
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
                          </div>

                          <div className="col-md-4">
                            <h4>Children</h4>
                            <div className="de-number">
                              <span
                                className="d-minus"
                                onClick={() => decrement(setChildren, children)}
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
                          </div>

                          <div className="col-md-4">
                            <h4>Room</h4>
                            <div className="de-number">
                              <span
                                className="d-minus"
                                onClick={() => decrement(setRooms, rooms)}
                              >
                                -
                              </span>
                              <input type="text" readOnly value={rooms} />
                              <span
                                className="d-plus"
                                onClick={() => increment(setRooms, rooms)}
                              >
                                +
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Room Type */}
                  <div className="select-room">
                    <h4>Select Room</h4>
                    <select
                      name="roomType"
                      id="room-type"
                      className="form-control"
                      value={formData.roomType}
                      onChange={handleInputChange}
                    >
                      <option value="Standart Room">Standart Room</option>
                      <option value="Deluxe Room">Deluxe Room</option>
                      <option value="Premier Room">Premier Room</option>
                      <option value="Family Suite">Family Suite</option>
                      <option value="Luxury Suite">Luxury Suite</option>
                      <option value="President Suite">President Suite</option>
                    </select>
                  </div>

                  {/* Step 2: User Details */}
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
                      />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="form-control"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>

                    {/* reCAPTCHA (placeholder) */}
                    <div className="col-md-12">
                      <div
                        className="g-recaptcha"
                        data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"
                      ></div>
                      <p id="submit" className="mt20">
                        <input
                          type="submit"
                          id="send_message"
                          value="Submit Form"
                          className="btn btn-line"
                        />
                      </p>
                    </div>
                  </div>
                </form>

                {/* Messages */}
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
      <Footer/>
    </div>
  );
};

export default Booking;
