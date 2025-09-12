import React, { useEffect, useState } from "react";
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
  FaUserCircle,
  FaEdit,
} from "react-icons/fa";

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
      .post("/api/profile", { customerid: user.customerid })
      .then((res) => {
        if (res.data.status) {
          setProfile(res.data.data);
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

  if (loading)
    return <p style={{ textAlign: "center", marginTop: "40px" }}>⏳ Loading profile...</p>;

  if (!profile)
    return (
      <p style={{ textAlign: "center", marginTop: "40px", fontWeight: "bold", color: "#b6862c" }}>
        🚫 No profile found
      </p>
    );

  const fields = [
    { label: "Name", value: `${profile.firstname} ${profile.lastname}`, icon: <FaUser /> },
    { label: "Email", value: profile.email, icon: <FaEnvelope /> },
    { label: "Phone", value: profile.cust_phone || "Not provided", icon: <FaPhone /> },
    { label: "Date of Birth", value: profile.dob || "Not provided", icon: <FaBirthdayCake /> },
    { label: "Profession", value: profile.profession || "Not provided", icon: <FaBriefcase /> },
    { label: "Nationality", value: profile.isnationality || "Not provided", icon: <FaGlobe /> },
    { label: "PID", value: profile.pid || "Not provided", icon: <FaIdCard /> },
    { label: "Address", value: profile.address || "Not provided", icon: <FaMapMarkerAlt /> },
  ];

  return (
    <div>
      <div className="profile-card shadow-sm  rounded">
        <div className="text-center ">
          <FaUserCircle size={70} color="#b6862c" />
          <h2 className="mt-2 profile-title">My Profile</h2>
        </div>

        <div className="profile-grid">
          {fields.map((field, idx) => (
            <div key={idx} className="profile-item">
              <div className="label">
                <span className="icon">{field.icon}</span>
                {field.label}
              </div>
              <div className="value">{field.value}</div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .profile-card {
            background: #fff;
            border-radius: 12px;
            border: 1px solid #eee;
            max-width: 800px;
            margin: auto;
            padding: 25px;
            animation: fadeIn 0.5s ease-in-out;
          }

          .profile-title {
            color: #b6862c;
            font-weight: 600;
            font-size: 22px;
          }

          .profile-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px 24px;
          }

          .profile-item {
            background: #fafafa;
            border: 1px solid #f1f1f1;
            padding: 16px 20px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            transition: all 0.3s ease;
          }

          .profile-item:hover {
            background: #fff;
            box-shadow: 0 3px 8px rgba(0,0,0,0.08);
            transform: translateY(-2px);
          }

          .label {
            font-size: 14px;
            font-weight: 500;
            color: #555;
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 6px;
          }

          .label .icon {
            color: #b6862c;
            font-size: 14px;
          }

          .value {
            color: #333;
            font-weight: 600;
            font-size: 15px;
          }

          .edit-btn {
            background: #b6862c;
            border: none;
            padding: 8px 20px;
            border-radius: 20px;
            color: #fff;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .edit-btn:hover {
            background: #a6741a;
            transform: translateY(-2px);
          }

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(15px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          /* Tablet view */
          @media (max-width: 992px) {
            .profile-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 18px 20px;
            }
          }

          /* Mobile view */
          @media (max-width: 576px) {
            .profile-grid {
              grid-template-columns: 1fr;
              gap: 12px 0;
            }

            .profile-item {
              padding: 14px 18px;
            }

            .label {
              font-size: 13px;
              gap: 6px;
              margin-bottom: 5px;
            }

            .label .icon {
              font-size: 13px;
            }

            .value {
              font-size: 14px;
            }

            .profile-title {
              font-size: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MyProfile;
