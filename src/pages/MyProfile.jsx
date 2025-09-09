import React, { useEffect, useState } from "react";
import axios from "axios";

const MyProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.customerid) {
      alert("⚠️ Please login first!");
      window.location.href = "/login";
      return;
    }

    axios
      .post("https://yogarjunpalace.com/api/profile", {
        customerid: user.customerid,
      })
      .then((res) => {
        if (res.data.status) {
          setProfile(res.data.data);
          console.log("Profile data:", res.data.data);
          
        } else {
          alert("Failed to fetch profile");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Profile fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading profile...</p>;

  if (!profile) return <p style={{ textAlign: "center" }}>No profile found</p>;

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
    color: "#eaae2aff",
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
          <div style={labelStyle}>Name</div>
          <div style={valueStyle}>
            {profile.firstname} {profile.lastname}
          </div>
        </div>

        <div style={rowStyle}>
          <div style={labelStyle}>Email</div>
          <div style={valueStyle}>{profile.email}</div>
        </div>

        <div style={rowStyle}>
          <div style={labelStyle}>Phone</div>
          <div style={valueStyle}>{profile.cust_phone || "Not provided"}</div>
        </div>

        <div style={rowStyle}>
          <div style={labelStyle}>Date of Birth</div>
          <div style={valueStyle}>{profile.dob || "Not provided"}</div>
        </div>

        <div style={rowStyle}>
          <div style={labelStyle}>Profession</div>
          <div style={valueStyle}>{profile.profession || "Not provided"}</div>
        </div>

        <div style={rowStyle}>
          <div style={labelStyle}>Nationality</div>
          <div style={valueStyle}>{profile.isnationality || "Not provided"}</div>
        </div>

        <div style={rowStyle}>
          <div style={labelStyle}>PID</div>
          <div style={valueStyle}>{profile.pid || "Not provided"}</div>
        </div>

        <div style={rowStyle}>
          <div style={labelStyle}>Address</div>
          <div style={valueStyle}>{profile.address || "Not provided"}</div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
