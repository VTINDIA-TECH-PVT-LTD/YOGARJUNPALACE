import React, { useState } from "react";
import Footer from "../components/Footer";
import { FaPercent, FaShieldAlt, FaWifi, FaGift } from "react-icons/fa";
import { FaUser, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaypal, FaQrcode } from "react-icons/fa";
const Checkout = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    alert(`Checking availability for ${guests} guest(s) from ${checkIn} to ${checkOut}`);
  };

  const cards = [
    { title: "Save up to 10%", description: "Members get access to exclusive discounts on Radissonblu.com. Not a member yet? Hurry Up!", icon: <FaPercent size={40} /> },
    { title: "Best Rate Guarantee", description: "If you find a lower online rate, we will match it and give you an additional 25% off on your stay.", icon: <FaShieldAlt size={40} /> },
    { title: "Free Wi-Fi", description: "Stay connected with free high-speed Wi-Fi throughout your stay.", icon: <FaWifi size={40} /> },
    { title: "Enjoy Free Nights", description: "Book multiple nights and enjoy free nights as a reward for your loyalty.", icon: <FaGift size={40} /> },
  ];

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
            Check Your Details
          </h3>
          <form>
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
                      <span
                        className="input-group-text"
                        style={{
                          background: "rgba(255,255,255,0.2)",
                          color: "#fff",
                        }}
                      >
                        <FaUser />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        required
                        style={{
                          background: "rgba(255,255,255,0.1)",
                          color: "#fff",
                          border: "none",
                        }}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="input-group">
                      <span
                        className="input-group-text"
                        style={{
                          background: "rgba(255,255,255,0.2)",
                          color: "#fff",
                        }}
                      >
                        <FaMapMarkerAlt />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your address"
                        required
                        style={{
                          background: "rgba(255,255,255,0.1)",
                          color: "#fff",
                          border: "none",
                        }}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="input-group">
                      <span
                        className="input-group-text"
                        style={{
                          background: "rgba(255,255,255,0.2)",
                          color: "#fff",
                        }}
                      >
                        <FaPhoneAlt />
                      </span>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter your phone number"
                        required
                        style={{
                          background: "rgba(255,255,255,0.1)",
                          color: "#fff",
                          border: "none",
                        }}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="input-group">
                      <span
                        className="input-group-text"
                        style={{
                          background: "rgba(255,255,255,0.2)",
                          color: "#fff",
                        }}
                      >
                        <FaEnvelope />
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        required
                        style={{
                          background: "rgba(255,255,255,0.1)",
                          color: "#fff",
                          border: "none",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Box: Payment Details */}
              <div className="col-lg-6">
                <div
                  className="p-4 rounded h-100"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <h5 className="mb-4" style={{ fontWeight: 600 }}>
                    Payment Details
                  </h5>
                  <div className="mb-3">
  <div className="input-group">
    <span
      className="input-group-text"
      style={{
        background: "rgba(255,255,255,0.2)",
        color: "#fff",
      }}
    >
      <FaPaypal />
    </span>
    <select
      className="form-select"
      required
      style={{
        background: "rgba(255,255,255,0.1)",
        color: "#fff",
        border: "none",
        appearance: "none", // remove default arrow style
      }}
    >
      <option value="" style={{ background: "#1f1f1f", color: "#fff" }}>
        Select Payment Method
      </option>
      <option value="paypal" style={{ background: "#1f1f1f", color: "#fff" }}>
        PayPal
      </option>
      <option value="qr" style={{ background: "#1f1f1f", color: "#fff" }}>
        QR Code
      </option>
    </select>
  </div>
</div>

                  <div className="mb-3">
                    <div className="input-group">
                      <span
                        className="input-group-text"
                        style={{
                          background: "rgba(255,255,255,0.2)",
                          color: "#fff",
                        }}
                      >
                        <FaQrcode />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Amount $0.00"
                        required
                        style={{
                          background: "rgba(255,255,255,0.1)",
                          color: "#fff",
                          border: "none",
                        }}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary w-100 mt-3">
                    Submit
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

      {/* Hover Effects and Input Styling */}
      <style>{`
        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }
        input.form-control {
          background: rgba(255,255,255,0.9);
        }
        label.form-label {
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default Checkout;
