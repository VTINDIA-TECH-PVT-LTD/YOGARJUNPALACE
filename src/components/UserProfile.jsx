import React, { useState } from "react";
import BookingDetails from "../pages/BookingDetails";
import UpdateProfile from "../pages/UpdateProfile";
import MyProfile from "../pages/MyProfile";
import Footer from "./Footer";

const UserProfile = () => {
  const [activePage, setActivePage] = useState("booking");

  // Style for the entire page background
  const containerStyle = {
    backgroundImage: "url('/uploads/slider7.jpg')", // Replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100%",
    padding: "20px 0",
  };

  // Style for content overlay
  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle = {
    color: "#eaae2aff",
    textAlign: "center",
    marginBottom: "20px",
    fontWeight: "bold",
  };

  const activeItemStyle = {
    backgroundColor: "#eaae2aff",
    color: "white",
    cursor: "pointer",
  };

  const inactiveItemStyle = {
    cursor: "pointer",
  };

  return (
    <>
    <div style={containerStyle}>
      <div className="container">
        <h1 style={headerStyle}>User Profile</h1>
        <div className="row">
          <div className="col-md-3 mb-3">
            <div style={overlayStyle}>
              <ul className="list-group">
                <li
                  className="list-group-item"
                  style={activePage === "booking" ? activeItemStyle : inactiveItemStyle}
                  onClick={() => setActivePage("booking")}
                >
                  Booking Details
                </li>
                <li
                  className="list-group-item"
                  style={activePage === "profile" ? activeItemStyle : inactiveItemStyle}
                  onClick={() => setActivePage("profile")}
                >
                  My Profile
                </li>
                <li
                  className="list-group-item"
                  style={activePage === "update" ? activeItemStyle : inactiveItemStyle}
                  onClick={() => setActivePage("update")}
                >
                  Update Profile
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <div style={overlayStyle}>
              {activePage === "booking" && <BookingDetails />}
              {activePage === "profile" &&  <MyProfile />}
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
