import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import {
  FaUser,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaypal,
  FaQrcode,
} from "react-icons/fa";

const Checkout = () => {
  const location = useLocation();
  const {
    roomid,
    checkin,
    checkout,
    adults,
    children,
    rate,
    roomtype,
    totalPrice,
    formData,
  } = location.state || {};

  const [loading, setLoading] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("paypal"); // default

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFlashMessage("");

    try {
      const payload = {
        f_name: formData.firstname,
        l_name: formData.lastname,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        checkin,
        checkout,
        adult: adults,
        children,
        roomid,
        roomtype,
        roomrate: rate,
        amount: totalPrice,
        discount: 0,
        specialinstruction: formData.requests || "",
        t_room: 1,
        pmethod: paymentMethod === "paypal" ? 1 : paymentMethod === "qr" ? 2 : 3, // map dropdown
        finyear: new Date().getFullYear(),
      };

      const res = await axios.post(
        "/api/checkout",
        payload
      );

      if (res.data.status) {
        setFlashMessage("✅ Booking Successful! 🎉");
        window.location.href = `/`;
      } else {
        setFlashMessage("❌ Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      setFlashMessage("⚠️ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Background */}
      <div
        id="background"
        style={{
          backgroundImage: "url('/uploads/rooms.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></div>

      <div id="content-absolute">
        {/* Subheader */}
        <section id="subheader" className="no-bg">
          <div className="container text-center">
            <h4>Check</h4>
            <h1>Checkout</h1>
          </div>
        </section>

        <div id="check-details" className="mb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div
                  className="p-4 p-lg-5 rounded shadow"
                  style={{
                    background: "rgba(0, 0, 0, 0.65)",
                    color: "#fff",
                  }}
                >
                  <h3 className="mb-5 text-center" style={{ fontWeight: 700 }}>
                    Confirm Your Booking
                  </h3>

                  {flashMessage && (
                    <div className="alert alert-info text-center fw-bold">
                      {flashMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      {/* Left Box: User Details */}
                      <div className="col-lg-6">
                        <div
                          className="p-4 rounded h-100"
                          style={{ background: "rgba(255,255,255,0.1)" }}
                        >
                          <h5 className="mb-4" style={{ fontWeight: 600 }}>
                            Personal Information
                          </h5>

                          <div className="mb-3">
                            <div className="input-group">
                              <span className="input-group-text bg-dark text-white">
                                <FaUser />
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                value={`${formData.firstname} ${formData.lastname}`}
                                readOnly
                              />
                            </div>
                          </div>

                          <div className="mb-3">
                            <div className="input-group">
                              <span className="input-group-text bg-dark text-white">
                                <FaMapMarkerAlt />
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                value={formData.address}
                                readOnly
                              />
                            </div>
                          </div>

                          <div className="mb-3">
                            <div className="input-group">
                              <span className="input-group-text bg-dark text-white">
                                <FaPhoneAlt />
                              </span>
                              <input
                                type="tel"
                                className="form-control"
                                value={formData.phone}
                                readOnly
                              />
                            </div>
                          </div>

                          <div className="mb-3">
                            <div className="input-group">
                              <span className="input-group-text bg-dark text-white">
                                <FaEnvelope />
                              </span>
                              <input
                                type="email"
                                className="form-control"
                                value={formData.email}
                                readOnly
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Box: Booking Details + Payment */}
                      <div className="col-lg-6">
                        <div
                          className="p-4 rounded h-100"
                          style={{ background: "rgba(255,255,255,0.1)" }}
                        >
                          <h5 className="mb-4" style={{ fontWeight: 600 }}>
                            Booking Summary
                          </h5>
                          <p><strong>Room:</strong> {roomtype}</p>
                          <p><strong>Check-in:</strong> {checkin}</p>
                          <p><strong>Check-out:</strong> {checkout}</p>
                          <p>
                            <strong>Guests:</strong> {adults} Adults, {children} Children
                          </p>
                          <p><strong>Total Price:</strong> ₹{totalPrice}</p>

                          <div className="mb-3">
                            <label className="form-label text-white">
                              Payment Method
                            </label>
                            <div className="input-group">
                              <span className="input-group-text bg-dark text-white">
                                <FaPaypal />
                              </span>
                              <select
                                className="form-select"
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                style={{
                                  background: "rgba(255,255,255,0.1)",
                                  color: "#fff",
                                  border: "none",
                                  appearance: "none",
                                }}
                              >
                                <option value="paypal">PayPal</option>
                                <option value="qr">QR Code</option>
                                <option value="card">Credit/Debit Card</option>
                              </select>
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="w-100 mt-3 custom-submit-btn"
                            disabled={loading}
                          >
                            {loading ? "Processing..." : "Confirm Booking"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      {/* Extra Styles */}
      <style>{`
        .custom-submit-btn {
          background-color: #CA8E46 !important;
          color: black !important;
          border: none !important;
          padding: 10px 15px;
          font-weight: 600;
          border-radius: 6px;
          transition: background 0.3s ease;
        }
        .custom-submit-btn:hover {
          background-color: #b87c39 !important;
        }
      `}</style>
    </>
  );
};

export default Checkout;
