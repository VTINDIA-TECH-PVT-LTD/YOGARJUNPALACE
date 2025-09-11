import React, { useState } from "react";
import BookingDetails from "../pages/BookingDetails";
import UpdateProfile from "../pages/UpdateProfile";
import MyProfile from "../pages/MyProfile";
import Footer from "./Footer";
import { FaBook, FaUser, FaEdit } from "react-icons/fa";

const UserProfile = () => {
  const [activePage, setActivePage] = useState("booking");

  // Page background
  const containerStyle = {
    backgroundImage: "url('/uploads/slider7.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100%",
    padding: "40px 0",
  };

  // Overlay box style
  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: "10px",
    padding: "25px",
    boxShadow: "0 6px 14px rgba(0, 0, 0, 0.3)",
  };

  const headerStyle = {
    color: "#eaae2a",
    textAlign: "center",
    marginBottom: "30px",
    fontWeight: "700",
    fontSize: "28px",
  };

  // Menu styles
  const menuItemBase = {
    cursor: "pointer",
    border: "none",
    borderRadius: "8px",
    padding: "12px 16px",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "500",
    fontSize: "15px",
    transition: "all 0.3s ease",
  };

  const activeItemStyle = {
    ...menuItemBase,
    backgroundColor: "#eaae2a",
    color: "#fff",
    boxShadow: "0 4px 10px rgba(234, 174, 42, 0.4)",
    borderLeft: "5px solid #fff",
  };

  const inactiveItemStyle = {
    ...menuItemBase,
    backgroundColor: "rgba(255,255,255,0.05)",
    color: "#ddd",
  };

  return (
    <>
      <div style={containerStyle}>
        <div className="container">
          <h1 style={headerStyle}>User Dashboard</h1>
          <div className="row">
            {/* Sidebar Menu */}
            <div className="col-md-3 mb-3">
              <div style={overlayStyle}>
                <ul className="list-unstyled m-0 p-0">
                  <li
                    style={activePage === "booking" ? activeItemStyle : inactiveItemStyle}
                    onClick={() => setActivePage("booking")}
                  >
                    <FaBook /> Booking Details
                  </li>
                  <li
                    style={activePage === "profile" ? activeItemStyle : inactiveItemStyle}
                    onClick={() => setActivePage("profile")}
                  >
                    <FaUser /> My Profile
                  </li>
                  <li
                    style={activePage === "update" ? activeItemStyle : inactiveItemStyle}
                    onClick={() => setActivePage("update")}
                  >
                    <FaEdit /> Update Profile
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-md-9">
              <div style={overlayStyle}>
                {activePage === "booking" && <BookingDetails />}
                {activePage === "profile" && <MyProfile />}
                {activePage === "update" && <UpdateProfile />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
