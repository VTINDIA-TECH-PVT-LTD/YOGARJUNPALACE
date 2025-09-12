import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccessPopup = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "linear-gradient(135deg, #ffffff 0%, #eafaf1 100%)", // slightly darker overlay
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: visible ? 1 : 0,
    transition: "opacity 0.4s ease",
  };

  const popupStyle = {
    backgroundColor: "#ffffff",
    padding: "35px 25px",
    width: "440px",
    textAlign: "center",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    position: "relative",
    transform: visible ? "scale(1)" : "scale(0.8)",
    transition: "transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  };

  const checkmarkCircleStyle = {
    width: "90px",
    height: "90px",
    backgroundColor: "#6ecf37",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "-70px auto 25px auto",
    boxShadow: "0 0 0 rgba(110, 207, 55, 0.7)",
    animation: "pulse 1.5s infinite",
  };

  const checkmarkStyle = {
    color: "white",
    fontSize: "45px",
    fontWeight: "bold",
  };

  const headingStyle = {
    margin: "10px 0",
    fontSize: "26px",
    color: "#333333",
    fontWeight: "600",
  };

  const subheadingStyle = {
    margin: "10px 0",
    fontSize: "20px",
    color: "#555555",
  };

  const paragraphStyle = {
    margin: "20px 0",
    fontSize: "16px",
    color: "#666666",
    lineHeight: "1.6",
  };

  const buttonStyle = {
    backgroundColor: "#6ecf37",
    border: "none",
    color: "white",
    padding: "14px 30px",
    fontSize: "16px",
    fontWeight: "500",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease",
    boxShadow: "0 4px 10px rgba(110, 207, 55, 0.4)",
  };

  const buttonHover = (e) => {
    e.target.style.backgroundColor = "#5cbf30";
    e.target.style.transform = "scale(1.05)";
    e.target.style.boxShadow = "0 6px 15px rgba(92, 191, 48, 0.5)";
  };

  const buttonLeave = (e) => {
    e.target.style.backgroundColor = "#6ecf37";
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "0 4px 10px rgba(110, 207, 55, 0.4)";
  };

  const handleOkClick = () => {
    navigate("/userprofile");
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(110, 207, 55, 0.7);
            }
            70% {
              box-shadow: 0 0 0 15px rgba(110, 207, 55, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(110, 207, 55, 0);
            }
          }
        `}
      </style>
      <div style={overlayStyle}>
        <div style={popupStyle}>
          <div style={checkmarkCircleStyle}>
            <div style={checkmarkStyle}>✔</div>
          </div>
          <h2 style={headingStyle}>🎉 Thank You!</h2>
          <h3 style={subheadingStyle}>Your Payment Was Successful!</h3>
          <p style={paragraphStyle}>
            Your booking is now confirmed. We look forward to hosting you!
            Enjoy your stay with us and feel free to reach out for any assistance.
          </p>
          <button
            style={buttonStyle}
            onMouseEnter={buttonHover}
            onMouseLeave={buttonLeave}
            onClick={handleOkClick}
          >
            OK
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccessPopup;
