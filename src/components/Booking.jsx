// // src/pages/Booking.jsx
// import React, { useState } from "react";
// import Footer from "./Footer";

// export default function Booking() {
//   // State for counters
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [rooms, setRooms] = useState(1);

//   // State for form inputs
//   const [formData, setFormData] = useState({
//     checkInDate: "",
//     checkOutDate: "",
//     roomType: "Standard Room",
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   // Validation errors
//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     setErrors((prev) => {
//       const copy = { ...prev };
//       delete copy[name];
//       return copy;
//     });
//   };

//   // Increase/decrease counters
//   const increment = (setter, value) => setter(Number(value) + 1);
//   const decrement = (setter, value, min = 0) =>
//     setter(Number(value) > min ? Number(value) - 1 : min);

//   // Parse date helper
//   const parseDateLocal = (dateString) => {
//     if (!dateString) return null;
//     const parts = dateString.split("-");
//     if (parts.length !== 3) return null;
//     const [y, m, d] = parts.map(Number);
//     if (Number.isNaN(y) || Number.isNaN(m) || Number.isNaN(d)) return null;
//     return new Date(y, m - 1, d);
//   };

//   // Validation
//   const validateForm = () => {
//     const errs = {};
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     const checkIn = parseDateLocal(formData.checkInDate);
//     const checkOut = parseDateLocal(formData.checkOutDate);

//     if (!formData.checkInDate) {
//       errs.checkInDate = "Please select a check-in date.";
//     } else if (!checkIn) {
//       errs.checkInDate = "Invalid check-in date.";
//     } else if (checkIn < today) {
//       errs.checkInDate = "Check-in date cannot be in the past.";
//     }

//     if (!formData.checkOutDate) {
//       errs.checkOutDate = "Please select a check-out date.";
//     } else if (!checkOut) {
//       errs.checkOutDate = "Invalid check-out date.";
//     } else if (checkOut < today) {
//       errs.checkOutDate = "Check-out date cannot be in the past.";
//     } else if (checkIn && checkOut < checkIn) {
//       errs.checkOutDate = "Check-out date cannot be before check-in date.";
//     }

//     if (Number(adults) < 1) errs.adults = "At least one adult is required.";
//     if (Number(rooms) < 1) errs.rooms = "At least one room is required.";
//     if (Number(children) < 0) errs.children = "Children cannot be negative.";

//     if (
//       typeof window !== "undefined" &&
//       window.grecaptcha &&
//       typeof window.grecaptcha.getResponse === "function"
//     ) {
//       const rcResp = window.grecaptcha.getResponse();
//       if (!rcResp) errs.recaptcha = "Please complete the reCAPTCHA.";
//     }

//     return errs;
//   };

//   // New function to check availability
//   const handleCheckAvailability = async () => {
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setErrors({});

//     const payload = {
//       checkInDate: formData.checkInDate,
//       checkOutDate: formData.checkOutDate,
//       adults,
//       children,
//       rooms,
//       roomType: formData.roomType,
//     };

//     try {
//       console.log("🔎 Checking availability with payload:", payload);

//       // Replace with your real API endpoint
//       const res = await fetch(
//         "https://yogarjunpalace.com/api/check-availability",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         }
//       );

//       const data = await res.json();
//       console.log("✅ API response:", data);

//       if (data.status) {
//         alert(`✅ Rooms are available: ${data.availableRooms} left`);
//       } else {
//         alert("❌ No rooms available for the selected dates.");
//       }
//     } catch (err) {
//       console.error("❌ Availability check failed:", err);
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div
//       id="backgroundll"
//       style={{
//         backgroundImage: "url(/uploads/slider7.jpg)",
//         backgroundAttachment: "fixed",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//         height: "auto",
//         overflowX: "hidden",
//         overflowY: "auto",
//       }}
//     >
//       <section id="subheader" className="no-bg">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 text-center">
//               <h1>Booking</h1>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section
//         id="section-main"
//         className="no-bg no-top"
//         aria-label="section-menu"
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 offset-lg-3">
//               <div className="de-content-overlay">
//                 <form id="contact_form" noValidate>
//                   <div id="step-1" className="row">
//                     <div className="col-md-12 mb10">
//                       <h4>Choose Dates</h4>
//                       <h5 className="mt-3">Check-in date</h5>
//                       <input
//                         type="date"
//                         id="check-in"
//                         className="form-control"
//                         name="checkInDate"
//                         value={formData.checkInDate}
//                         onChange={handleInputChange}
//                       />
//                       {errors.checkInDate && (
//                         <small className="text-danger d-block">
//                           {errors.checkInDate}
//                         </small>
//                       )}

//                       <h5 className="mt-3">Check-out date</h5>
//                       <input
//                         type="date"
//                         id="check-out"
//                         className="form-control mt-2"
//                         name="checkOutDate"
//                         value={formData.checkOutDate}
//                         onChange={handleInputChange}
//                       />
//                       {errors.checkOutDate && (
//                         <small className="text-danger d-block">
//                           {errors.checkOutDate}
//                         </small>
//                       )}

//                       <div className="guests-n-rooms mt-3">
//                         <div className="row">
//                           <div className="col-md-4">
//                             <h4>Adult</h4>
//                             <div className="de-number">
//                               <span
//                                 className="d-minus"
//                                 onClick={() => decrement(setAdults, adults, 1)}
//                               >
//                                 -
//                               </span>
//                               <input
//                                 id="adults"
//                                 type="text"
//                                 readOnly
//                                 value={adults}
//                               />
//                               <span
//                                 className="d-plus"
//                                 onClick={() => increment(setAdults, adults)}
//                               >
//                                 +
//                               </span>
//                             </div>
//                             {errors.adults && (
//                               <small className="text-danger d-block">
//                                 {errors.adults}
//                               </small>
//                             )}
//                           </div>

//                           <div className="col-md-4">
//                             <h4>Children</h4>
//                             <div className="de-number">
//                               <span
//                                 className="d-minus"
//                                 onClick={() =>
//                                   decrement(setChildren, children, 0)
//                                 }
//                               >
//                                 -
//                               </span>
//                               <input
//                                 id="children"
//                                 type="text"
//                                 readOnly
//                                 value={children}
//                               />
//                               <span
//                                 className="d-plus"
//                                 onClick={() => increment(setChildren, children)}
//                               >
//                                 +
//                               </span>
//                             </div>
//                             {errors.children && (
//                               <small className="text-danger d-block">
//                                 {errors.children}
//                               </small>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-md-12">
//                     <div
//                       className="g-recaptcha"
//                       data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"
//                     ></div>
//                     {errors.recaptcha && (
//                       <small className="text-danger d-block">
//                         {errors.recaptcha}
//                       </small>
//                     )}

//                     <p
//                       id="submit"
//                       className="mt20"
//                       style={{ textAlign: "center" }}
//                     >
//                       <button
//                         type="button"
//                         id="check_availability"
//                         className="btn btn-line"
//                         style={{
//                           width: "220px", // fixed width
//                           height: "55px", // fixed height
//                           fontSize: "16px",
//                         }}
//                         onClick={handleCheckAvailability}
//                       >
//                         Check Availability
//                       </button>
//                     </p>
//                   </div>
//                 </form>

//                 <div id="success_message" className="success">
//                   Your reservation has been sent successfully.
//                 </div>
//                 <div id="error_message" className="error">
//                   Sorry, error occurred this time sending your message.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }
// src/pages/Booking.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ needed for navigation
import axios from "axios"; // ✅ import axios
import Footer from "./Footer";
import "../pages/Booking.css"; // ✅ import custom CSS

export default function Booking() {
  // State for counters
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  // State for form inputs
  const [formData, setFormData] = useState({
    checkInDate: "",
    checkOutDate: "",
  });

  // State for validation & results
  const [errors, setErrors] = useState({});
  const [rooms, setRooms] = useState([]); // ✅ available rooms from API
  const [loading, setLoading] = useState(false);

  // Input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[name];
      return copy;
    });
  };

  // Increment/decrement counters
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

  // Validation
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

  // 🔎 Check availability with axios
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
      children,
      adults,
    };

    try {
      const res = await axios.post(
        "/api/roomlist",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

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

          {/* ✅ Available Rooms Section */}
          {rooms.length > 0 && (
            <div className="row g-4 mt-5">
              {rooms.map((room, idx) => (
                <div className="col-lg-4" key={idx}>
                  <div className="de-room">
                    <div className="d-image">
                      <div className="d-label">
                        {room.roomstatus === "0"
                          ? "Available"
                          : "Not Available"}
                      </div>
                      <div className="d-details">
                        <span className="d-meta-1">
                          <img src="/assets/images/ui/user.svg" alt="Guests" />{" "}
                          {room.capacity} Guests
                        </span>
                        <span className="d-meta-2">
                          <img
                            src="/assets/images/ui/floorplan.svg"
                            alt="Size"
                          />{" "}
                          {room.roomsize} {room.roomsizemesurement}²
                        </span>
                      </div>

                      <Link to={`/room/${room.roomid}`}>
                        <img
                          src={room.room_imagename}
                          className="img-fluid"
                          alt={room.roomtype}
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
