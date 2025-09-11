import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaBriefcase,
  FaGlobe,
  FaIdCard,
  FaMapMarkerAlt,
} from "react-icons/fa";

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    cust_phone: "",
    dob: "",
    profession: "",
    isnationality: "Native",
    pid: "",
    address: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.customerid) {
      alert("⚠️ Please login first!");
      window.location.href = "/login";
      return;
    }

    setFormData({
      firstname: user.firstname || "",
      lastname: user.lastname || "",
      email: user.email || "",
      cust_phone: user.cust_phone || "",
      dob: user.dob || "",
      profession: user.profession || "",
      isnationality: user.isnationality || "Native",
      pid: user.pid || "",
      address: user.address || "",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      const res = await axios.post("/api/updateprofile", {
        customerid: user.customerid,
        ...formData,
      });

      if (res.data.status) {
        alert("✅ Profile updated successfully!");
        localStorage.setItem("user", JSON.stringify({ ...user, ...formData }));
      } else {
        alert("❌ Failed to update profile");
      }
    } catch (err) {
      console.error("Update profile error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  const inputStyle = {
    background: "transparent",
    border: "1px solid #ccc",
    color: "#fff",
  };

  return (
    <div className="container" style={{ marginTop: "60px" }}>
      <h2 className="mb-4 text-center" style={{ color: "#f2f1efff" }}>
        Update Profile
      </h2>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* First Name */}
            <div className="col-md-6">
              <label className="form-label">
                <FaUser className="me-1 text-warning" /> First Name *
              </label>
              <input
                type="text"
                name="firstname"
                className="form-control"
                value={formData.firstname}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            {/* Last Name */}
            <div className="col-md-6">
              <label className="form-label">
                <FaUser className="me-1 text-warning" /> Last Name *
              </label>
              <input
                type="text"
                name="lastname"
                className="form-control"
                value={formData.lastname}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            {/* Email */}
            <div className="col-md-6">
              <label className="form-label">
                <FaEnvelope className="me-1 text-warning" /> Email *
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            {/* Phone */}
            <div className="col-md-6">
              <label className="form-label">
                <FaPhone className="me-1 text-warning" /> Phone *
              </label>
              <input
                type="text"
                name="cust_phone"
                className="form-control"
                value={formData.cust_phone}
                onChange={handleChange}
                placeholder="Example: 880180499***"
                required
                style={inputStyle}
              />
              <small className="form-text" style={{ color: "#ffffff" }}>
                Add prefix without + sign. Example: (88)0180499***
              </small>
            </div>

            {/* Date of Birth */}
            <div className="col-md-6">
              <label className="form-label">
                <FaBirthdayCake className="me-1 text-warning" /> Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                className="form-control"
                value={formData.dob}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            {/* Profession */}
            <div className="col-md-6">
              <label className="form-label">
                <FaBriefcase className="me-1 text-warning" /> Profession
              </label>
              <input
                type="text"
                name="profession"
                className="form-control"
                value={formData.profession}
                onChange={handleChange}
                placeholder="Your profession"
                style={inputStyle}
              />
            </div>

            {/* Nationality */}
            <div className="col-md-6">
              <label className="form-label d-block">
                <FaGlobe className="me-1 text-warning" /> Nationality
              </label>
              <div className="d-flex gap-3 mt-1">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="isnationality"
                    value="Native"
                    checked={formData.isnationality === "Native"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Native</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="isnationality"
                    value="Foreigner"
                    checked={formData.isnationality === "Foreigner"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Foreigner</label>
                </div>
              </div>
            </div>


            {/* National ID */}
            <div className="col-md-6">
              <label className="form-label">
                <FaIdCard className="me-1 text-warning" /> National ID
              </label>
              <input
                type="text"
                name="pid"
                className="form-control"
                value={formData.pid}
                onChange={handleChange}
                placeholder="Enter national ID"
                style={inputStyle}
              />
            </div>

            {/* Address */}
            <div className="col-12">
              <label className="form-label">
                <FaMapMarkerAlt className="me-1 text-warning" /> Address
              </label>
              <textarea
                name="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                placeholder="Enter address"
                style={inputStyle}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-12 text-end">
              <button
                type="submit"
                className="btn btn-success"
                style={{ width: "90px", height: "32px" }}
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
