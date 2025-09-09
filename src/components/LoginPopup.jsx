import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false); // 🔹 for signout popup
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ check login state
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!user;

  const handleClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      if (isLoggedIn) {
        // 🔹 Show confirmation popup instead of logout directly
        setShowConfirm(true);
      } else {
        navigate("/Profile");
      }
    }, 200);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setShowConfirm(false);
    navigate("/"); // redirect home
  };

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => setIsOpen(false), 300);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // ✅ Hide on some pages
  // if (
  //   location.pathname === "/Profile" ||
  //   location.pathname === "/UserProfile" ||
  //   location.pathname === "/BookingDetails" ||
  //   location.pathname === "/myprofile" ||
  //   location.pathname.startsWith("/invoice/")
  // ) {
  //   return null;
  // }

  return (
    <>
      {/* 🔹 Sign in / Sign out button */}
      <div
        onClick={handleClick}
        style={{
          position: "absolute",
          top: "15px",
          right: "100px",
          backgroundColor: isLoggedIn ? "#e63946" : "#f1a014", // 🔴 red for sign out
          color: "#fff",
          width: "120px",
          height: "50px",
          borderRadius: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          cursor: "pointer",
          fontSize: "1.1rem",
          fontWeight: "bold",
          zIndex: 1000,
          transform: isOpen ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.3s ease, background 0.3s ease",
        }}
        title={isLoggedIn ? "Sign out" : "Sign in"}
      >
        {isLoggedIn ? "Sign out" : "Sign in"}
      </div>

      {/* 🔹 Sign out Confirmation Modal */}
      {showConfirm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "25px 30px",
              borderRadius: "12px",
              width: "320px",
              textAlign: "center",
              boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
              animation: "fadeIn 0.3s ease",
            }}
          >
            <h3 style={{ marginBottom: "15px", color: "#333" }}>
              Confirm Sign Out
            </h3>
            <p style={{ marginBottom: "20px", fontSize: "0.95rem", color: "#555" }}>
              Are you sure you want to sign out?
            </p>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button
                onClick={() => setShowConfirm(false)}
                style={{
                  padding: "10px 18px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  background: "#f1f1f1",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                style={{
                  padding: "10px 18px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#e63946",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopup;
