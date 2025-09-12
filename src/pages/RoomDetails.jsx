import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaBed,
  FaUser,
  FaRulerCombined,
  FaDoorOpen,
  FaPercentage,
  FaUserAlt,
  FaEnvelope,
  FaPhone,
  FaHome,
  FaRegAddressCard,
  FaCommentDots,
} from "react-icons/fa";

const RoomDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [roomData, setRoomData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Promo code
  const [promoCode, setPromoCode] = useState("");
  const [promoStatus, setPromoStatus] = useState(null);

  // Form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    guestname: "",
    requests: "",
  });
  const [errors, setErrors] = useState({});

  const { roomid } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { checkin, checkout, adults, children } = location.state || {};

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const res = await axios.post("/api/roomdetails", {
          roomid,
          checkin,
          checkout,
          adults,
          children,
        });

        if (res.data.status) {
          setRoomData(res.data.data);
        }
      } catch (error) {
        console.error("❌ Error fetching room details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (roomid) {
      fetchRoomDetails();
    }
  }, [roomid, checkin, checkout, adults, children]);

  if (loading) {
    return <div className="text-center py-5">
      <span className="setloading">Loading room details...</span>
    </div>
      ;
  }

  if (!roomData) {
    return <div className="text-center py-5 text-danger">Room not found!</div>;
  }

  const { roominfo, condition } = roomData;

  // ✅ Promo Code check
  const applyPromoCode = () => {
    if (promoCode.trim().toLowerCase() === "hotel123") {
      setPromoStatus("success");
    } else {
      setPromoStatus("error");
    }
  };

  // ✅ Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // ✅ Validate before next
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.firstname) tempErrors.firstname = "First Name is required";
    if (!formData.lastname) tempErrors.lastname = "Last Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phone) tempErrors.phone = "Phone is required";
    if (!formData.address) tempErrors.address = "Address is required";
    if (!formData.guestname) tempErrors.guestname = "Guest Name is required";
    if (!formData.requests) tempErrors.requests = "Special Requests are required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // ✅ Check if form is valid dynamically
  const isFormValid = () =>
    formData.firstname &&
    formData.lastname &&
    formData.email &&
    formData.phone &&
    formData.address &&
    formData.guestname &&
    formData.requests;

  // const handleNext = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     navigate("/checkout", {
  //       state: {
  //         roomid,
  //         checkin,
  //         checkout,
  //         adults,
  //         children,
  //         rate: roominfo.rate,
  //         roomtype: roominfo.roomtype,
  //       },
  //     });
  //   }
  // };
  const handleNext = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/checkout", {
        state: {
          roomid,
          checkin,
          checkout,
          adults,
          children,
          rate: roominfo.rate,
          roomtype: roominfo.roomtype,
          totalPrice,
          formData, // ✅ pass user data
        },
      });
    }
  };
  
  const rate = Number(roominfo.rate) || 0;   // fallback to 0 if undefined
  const gst = rate * 0.18;
  const serviceCharge = rate * 0.07;
  let totalPrice = rate + gst + serviceCharge;

  // Apply promo discount
  if (promoStatus === "success") {
    totalPrice = totalPrice * 0.9;
  }



  return (
    <div className="booking-page">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg border-0 rounded-3 p-4 booking-card">
              {/* Success Alert */}
              <div className="alert alert-success text-center mb-4 py-2">
                Awesome choice! You're getting a great deal with your rate.
              </div>

              <div className="row">
                {/* Left Summary */}
                <div className="col-md-4 mb-4">
                  <div className="summary-box shadow-sm p-3">
                    {/* Check-in */}
                    <div className="check-card">
                      <FaDoorOpen className="check-icon" />
                      <div className="check-info">
                        <strong>Check In</strong>
                        <div>{checkin}</div>
                        <small>From 12:00 PM</small>
                      </div>
                    </div>

                    {/* Check-out */}
                    <div className="check-card">
                      <FaDoorOpen className="checkout-icon" />
                      <div className="check-info">
                        <strong>Check Out</strong>
                        <div>{checkout}</div>
                        <small>Until 10:00 AM</small>
                      </div>
                    </div>

                    <ul className="list-unstyled price-details mt-3">
                      <li>
                        <FaBed className="me-2 text-warning" />
                        <span className="fw-bold">{roominfo.roomtype}</span>
                        <span className="float-end">₹{roominfo.rate}</span>
                      </li>
                      <li>
                        <FaUser className="me-2 text-primary" />
                        Adults <span className="float-end">{adults}</span>
                      </li>
                      <li>
                        <FaRulerCombined className="me-2 text-success" />
                        Room Size <span className="float-end">{roominfo.roomsize}</span>
                      </li>
                      <li>
                        <FaDoorOpen className="me-2 text-info" />
                        No of Room <span className="float-end">1</span>
                      </li>
                      <li>
                        <FaPercentage className="me-2 text-danger" />
                        18% Tax <span className="float-end">₹{(roominfo.rate * 0.18).toFixed(0)}</span>
                      </li>
                      <li>
                        <FaPercentage className="me-2 text-danger" />
                        7% Service Charge <span className="float-end">₹{(roominfo.rate * 0.07).toFixed(0)}</span>
                      </li>
                    </ul>

                    {/* ✅ Promo Code */}
                    <div className="d-flex align-items-center mt-3">
                      <input
                        type="text"
                        className="form-control me-2"
                        placeholder="Enter Promo Code"
                        value={promoCode}
                        onChange={(e) => {
                          setPromoCode(e.target.value);
                          setPromoStatus(null);
                        }}
                      />
                      <button
                        type="button"
                        className="applybutton"
                        onClick={applyPromoCode}
                      >
                        Apply
                      </button>
                    </div>

                    {promoStatus === "success" && (
                      <p className="text-success mt-2">
                        <FaCheckCircle /> Promo Code Applied!
                      </p>
                    )}
                    {promoStatus === "error" && (
                      <p className="text-danger mt-2">
                        <FaTimesCircle /> Promo Code is not Available
                      </p>
                    )}
                    <div className="mt-3 d-flex justify-content-between align-items-center border-top pt-2">
                      <strong>Total Price</strong>
                      <span className="text-success fw-bold">
                        ₹{totalPrice.toFixed(0)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Form */}
                <div className="col-md-8">
                  <h5 className="fw-bold mb-3 setheading">ENTER YOUR DETAILS</h5>
                  <form onSubmit={handleNext}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">First Name *</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FaUserAlt />
                          </span>
                          <input
                            type="text"
                            name="firstname"
                            className="form-control"
                            value={formData.firstname}
                            onChange={handleChange}
                          />
                        </div>
                        <small className="text-danger">{errors.firstname}</small>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Last Name *</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FaUserAlt />
                          </span>
                          <input
                            type="text"
                            name="lastname"
                            className="form-control"
                            value={formData.lastname}
                            onChange={handleChange}
                          />
                        </div>
                        <small className="text-danger">{errors.lastname}</small>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email *</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FaEnvelope />
                          </span>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                        <small className="text-danger">{errors.email}</small>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Phone *</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FaPhone />
                          </span>
                          <input
                            type="text"
                            name="phone"
                            className="form-control"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <small className="text-danger">{errors.phone}</small>
                      </div>
                      <div className="col-12">
                        <label className="form-label">Address *</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FaHome />
                          </span>
                          <textarea
                            name="address"
                            className="form-control"
                            rows="2"
                            value={formData.address}
                            onChange={handleChange}
                          />
                        </div>
                        <small className="text-danger">{errors.address}</small>
                      </div>
                    </div>

                    {/* Room Details */}
                    <div className="mt-4 p-3 border rounded bg-light">
                      <h6 className="fw-bold">Room</h6>
                      <div className="d-flex align-items-center">
                        {roominfo.room_images && (
                          <img
                            src={roominfo.room_images[0]}
                            alt={roominfo.roomtype}
                            className="room-img me-3"
                          />
                        )}
                        <div>
                          <p className="mb-1 fw-bold">{roominfo.roomtype}</p>
                          <p
                            className="mb-0 text-primary"
                            style={{ cursor: "pointer" }}
                            onClick={() => setShowModal(true)}
                          >
                            Booking Conditions
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <label className="form-label">Full Guest Name *</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaRegAddressCard />
                        </span>
                        <input
                          type="text"
                          name="guestname"
                          className="form-control"
                          value={formData.guestname}
                          onChange={handleChange}
                        />
                      </div>
                      <small className="text-danger">{errors.guestname}</small>
                    </div>

                    <div className="mt-3">
                      <label className="form-label">Special Requests *</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaCommentDots />
                        </span>
                        <textarea
                          name="requests"
                          className="form-control"
                          rows="3"
                          value={formData.requests}
                          onChange={handleChange}
                        />
                      </div>
                      <small className="text-danger">{errors.requests}</small>
                    </div>

                    <div className="text-end mt-4">
                      <button
                        type="submit"
                        className={`nextbtn px-4 ${isFormValid() ? "nextbtn-success" : "nextbtn-secondary"
                          }`}
                      >
                        Next: Final details
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Modal */}
      {showModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <h5 className="fw-bold mb-3 modalheading">Booking Conditions</h5>
            {condition && condition.length > 0 ? (
              <ul className="modal-condition-list">
                {condition.map((c) => (
                  <li key={c.slid}>
                    <strong className="modalheading">{c.title}</strong>: {c.subtitle}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted">No conditions available</p>
            )}
            <div className="text-end mt-3">
              <button
                type="button"
                className="closebutton"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>

          {/* Modal styles */}
          <style jsx>{`
      .custom-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1050;
      }
      .custom-modal {
        background: #fff;
        padding: 25px;
        border-radius: 12px;
        max-width: 520px;
        width: 90%;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        animation: fadeIn 0.3s ease;
      }
      .modalheading {
        color: #222;
      }
      .modal-condition-list {
        list-style: none;
        padding-left: 0;
        margin-bottom: 15px;
      }
      .modal-condition-list li {
        position: relative;
        padding-left: 25px;
        margin-bottom: 10px;
        font-size: 0.95rem;
        line-height: 1.4;
        color: #555;
      }
      .modal-condition-list li::before {
        content: "•";
        position: absolute;
        left: 0;
        color: #007bff;
        font-size: 1.2rem;
        line-height: 1;
      }
      .closebutton {
        background: #dc3545;
        color: #fff;
        border: none;
        padding: 6px 18px;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.2s;
      }
      .closebutton:hover {
        background: #c82333;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}</style>
        </div>
      )}


      {/* ✅ Custom Styles */}
      <style jsx>{`

      


      .setloading {
  font-size: 1.1rem;
  font-weight: 500;
  color: #1d3557;                 /* Dark blue professional color */
  letter-spacing: 0.5px;
  display: inline-flex;
  align-items: center;
  gap: 10px;                      /* Space between spinner and text */
  padding: 12px 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9); /* Subtle background */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.6s ease-in-out;
}

/* Spinner animation */
.setloading::before {
  content: "";
  width: 18px;
  height: 18px;
  border: 3px solid #06d6a0;
  border-top: 3px solid transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 1s linear infinite;
}

/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Spin animation */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}


         .setheading {
  font-size: 1.25rem;        /* Slightly bigger than normal */
  font-weight: 700;          /* Bold */
  text-transform: uppercase; /* Makes it look formal */
  color: #1d3557;            /* Professional dark blue */
  letter-spacing: 1px;       /* Adds spacing between letters */
  border-left: 4px solid #06d6a0; /* Accent line */
  padding-left: 10px;        /* Space after line */
  margin-bottom: 1rem;       /* Spacing below */
  position: relative;
}

.setheading::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 60px;
  height: 3px;
  // background: #06d6a0; 
  /* Accent underline */
  border-radius: 2px;
}


        /* Buttons */
        .closebutton {
          background: #e63946;
          color: #fff;
          border: none;
          padding: 6px 16px;
          border-radius: 8px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        .closebutton:hover {
          background: #d62828;
        }

        .applybutton {
          background: #457b9d;
          color: #fff;
          border: none;
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        .applybutton:hover {
          background: #1d3557;
        }

        .nextbtn {
          border: none;
          padding: 10px 20px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        .nextbtn-success {
          background: #06d6a0;
          color: #fff;
        }
        .nextbtn-success:hover {
          background: #04b384;
        }
        .nextbtn-secondary {
          background: #adb5bd;
          color: #fff;
          cursor: not-allowed;
        }

        /* Summary Enhancements */
        .summary-box {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          padding: 16px;
          font-size: 0.95rem;
          color: #333;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        /* Check-in / Check-out Card */
        .check-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f8f9fa;
          border-radius: 10px;
          padding: 12px 16px;
          margin-bottom: 12px;
          transition: all 0.3s ease;
        }
        .check-card:hover {
          background: #e9ecef;
        }
        .check-icon {
          font-size: 1.6rem;
          color: #06d6a0;
          margin-right: 10px;
        }
        .checkout-icon {
          font-size: 1.6rem;
          color: #e63946;
          margin-right: 10px;
        }
        .check-info {
          flex: 1;
        }
        .check-info strong {
          display: block;
          font-size: 0.95rem;
          color: #222;
        }
        .check-info small {
          color: #6c757d;
          font-size: 0.8rem;
        }

        /* Form Input Group */
        .input-group-text {
          background: #f8f9fa;
          border-right: none;
        }
        .form-control {
          border-left: none;
        }

        /* Booking Page */
        .booking-page {
          background: url("/uploads/slider7.jpg") no-repeat center center fixed;
          background-size: cover;
          min-height: 100vh;
          padding-top: 40px;
        }
        .booking-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 14px;
        }
        .room-img {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          object-fit: cover;
        }
        .modalheading {
          color: black;
        }
        .custom-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
        }
        .custom-modal {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          max-width: 500px;
          width: 90%;
        }
      `}</style>

    </div>
  );
};

export default RoomDetails;


