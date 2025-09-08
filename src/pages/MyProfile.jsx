import React from "react";

const MyProfile = () => {
  // Dummy user data
  const user = {
    accountName: "Pralin Mohapatra",
    email: "pralinmohapatra@gmail.com",
    phone: "888888888",
    address: "dwbkdbkw",
  };

  // Inline styles
  const containerStyle = {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    maxWidth: "700px",
    margin: "auto",
  };

  const titleStyle = {
    color: "#f4f3f1ff",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  };

  const labelStyle = {
    fontWeight: "500",
    color: "#6c757d",
    width: "40%",
  };

  const valueStyle = {
    width: "60%",
    color: "#333333",
  };

  return (
    <div style={{ padding: "20px" }}>
        <h2 style={titleStyle}>Profile Details</h2>
      <div style={containerStyle}>
        
        <div style={rowStyle}>
          <div style={labelStyle}>Account Name</div>
          <div style={valueStyle}>{user.accountName}</div>
        </div>

        <div style={rowStyle}>
          <div style={labelStyle}>Email</div>
          <div style={valueStyle}>{user.email}</div>
        </div>

        <div style={rowStyle}>
          <div style={labelStyle}>Phone</div>
          <div style={valueStyle}>{user.phone || "Not provided"}</div>
        </div>

        <div style={rowStyle}>
          <div style={labelStyle}>Address</div>
          <div style={valueStyle}>{user.address || "Not provided"}</div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
