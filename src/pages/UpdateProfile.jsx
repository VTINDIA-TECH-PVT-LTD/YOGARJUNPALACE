import React, { useState } from "react";

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    profession: "",
    nationality: "Native",
    nationalId: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", formData);
    // Here you can integrate the API call
    alert("Profile updated successfully!");
  };

  return (
    <div className="container ">
      <h2 className="mb-4  text-center" style={{ color: "#f2f1efff" }}>
        Update Customer
      </h2>
      {/* <div className="de-content-overlay"> */}
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* First Name */}
            <div className="col-md-6">
              <label className="form-label">First Name *</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
                required
                style={{
                  background: "transparent",
                  border: "1px solid #ccc",
                  color: "#fff",
                }}
              />
            </div>

            {/* Last Name */}
            <div className="col-md-6">
              <label className="form-label">Last Name *</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={handleChange}
                required
                style={{
                  background: "transparent",
                  border: "1px solid #ccc",
                  color: "#fff",
                }}
              />
            </div>

            {/* Email */}
            <div className="col-md-6">
              <label className="form-label">Email *</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  background: "transparent",
                  border: "1px solid #ccc",
                  color: "#fff",
                }}
              />
            </div>

            {/* Phone */}
            <div className="col-md-6">
              <label className="form-label">Phone *</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Example: 880180499***"
                required
                style={{
                  background: "transparent",
                  border: "1px solid #ccc",
                  color: "#fff",
                }}
              />
              <small className="form-text" style={{ color: "#ffffff" }}>
                Add prefix without + sign. Example: (88)0180499***
              </small>
            </div>

            {/* Date of Birth */}
            <div className="col-md-6">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                name="dob"
                className="form-control"
                value={formData.dob}
                onChange={handleChange}
                style={{
                  background: "transparent",
                  border: "1px solid #ccc",
                  color: "#fff",
                }}
              />
            </div>

            {/* Profession */}
            <div className="col-md-6">
              <label className="form-label">Profession</label>
              <input
                type="text"
                name="profession"
                className="form-control"
                value={formData.profession}
                onChange={handleChange}
                placeholder="Your profession"
                style={{
                  background: "transparent",
                  border: "1px solid #ccc",
                  color: "#fff",
                }}
              />
            </div>

            {/* Nationality */}
            <div className="col-md-6">
              <label className="form-label d-block">Nationality</label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="nationality"
                  value="Native"
                  checked={formData.nationality === "Native"}
                  onChange={handleChange}
                />
                <label className="form-check-label">Native</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="nationality"
                  value="Foreigner"
                  checked={formData.nationality === "Foreigner"}
                  onChange={handleChange}
                />
                <label className="form-check-label">Foreigner</label>
              </div>
            </div>

            {/* National ID */}
            <div className="col-md-6">
              <label className="form-label">National ID</label>
              <input
                type="text"
                name="nationalId"
                className="form-control"
                value={formData.nationalId}
                onChange={handleChange}
                placeholder="Enter national ID"
                style={{
                  background: "transparent",
                  border: "1px solid #ccc",
                  color: "#fff",
                }}
              />
            </div>

            {/* Address */}
            <div className="col-12">
              <label className="form-label">Address</label>
              <textarea
                name="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                placeholder="Enter address"
                style={{
                  background: "transparent",
                  border: "1px solid #ccc",
                  color: "#fff",
                }}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-12 text-end">
              <button type="submit" className="btn btn-success" style={{
                              width: "90px", // fixed width
                              height: "32px", // fixed height
                            //   padding: "4px 8px",
                            //   boxShadow: "none",
                            }}>
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* </div> */}
    </div>
  );
};

export default UpdateProfile;
