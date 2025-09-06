import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine if we are on the Profile page
  const isProfilePage = location.pathname === "/Profile";

  const handleClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      if (isProfilePage) {
        navigate("/");
      } else {
        navigate("/Profile");
      }
    }, 200); // animation delay
  };

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => setIsOpen(false), 300); // reset after animation
    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <div
      onClick={handleClick}
      style={{
        position:  "absolute ",
        top: "15px",
        right: "100px",
        backgroundColor: "#f1a014ff",
        color: "#fff",
        width: "100px",
        height: "50px",
        borderRadius: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        cursor: "pointer",
        fontSize: "1.2rem",
        zIndex: 1000,
        transform: isOpen ? "scale(1.1)" : "scale(1)",
        transition: "transform 0.3s ease",
      }}
      title={isProfilePage ? "Go to Home" : "Login"}
    >
      {isProfilePage ? "Home" : "Login"}
    </div>
  );
};

export default LoginPopup;
