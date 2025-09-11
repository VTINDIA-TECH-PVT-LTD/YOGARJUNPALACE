// BookingDetails.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";

const BookingDetails = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user || !user.customerid) {
          alert("⚠️ Please login first!");
          navigate("/login");
          return;
        }

        const response = await axios.post("/api/report", {
          customerid: user.customerid,
        });

        if (response.data.status) {
          setBookings(response.data.data.bookings || []);
        } else {
          setBookings([]);
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setBookings([]);
      }
    };

    fetchBookings();
  }, [navigate]);

  const headerStyle = {
    textAlign: "center",
    color: "#b6862c",
    fontWeight: "bold",
    marginBottom: "25px",
  };

  const getBookingStatus = (status) => {
    switch (status) {
      case "0":
        return "Pending";
      case "1":
        return "Confirmed";
      case "5":
        return "Cancelled";
      default:
        return "Unknown";
    }
  };

  const getPaymentStatus = (paid, total) => {
    if (parseFloat(paid) >= parseFloat(total)) return "Complete";
    if (parseFloat(paid) > 0) return "Partial";
    return "Pending";
  };

  return (
    <div className="container py-5">
      <h2 style={headerStyle}>Booking Details</h2>

      <div
        className="p-4 rounded shadow-sm bg-white"
        style={{ overflowX: "auto" }}
      >
        <table className="table align-middle text-center">
          <thead style={{ background: "#fff7e6" }}>
            <tr>
              <th style={{ color: "#b6862c" }}>SL</th>
              <th style={{ color: "#b6862c" }}>Booking Number</th>
              <th style={{ color: "#b6862c" }}>Room Type</th>
              <th style={{ color: "#b6862c" }}>Check In</th>
              <th style={{ color: "#b6862c" }}>Check Out</th>
              <th style={{ color: "#b6862c" }}>Booking Date</th>
              <th style={{ color: "#b6862c" }}>Booking Status</th>
              <th style={{ color: "#b6862c" }}>Payment Status</th>
              <th style={{ color: "#b6862c" }}>Total Amount</th>
              <th style={{ color: "#b6862c" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <tr key={booking.bookedid || index} className="table-row-custom">
                  <td>{index + 1}</td>
                  <td>{booking.booking_number || "N/A"}</td>
                  <td>{booking.roomtype || "N/A"}</td>
                  <td>{booking.checkindate?.split(" ")[0]}</td>
                  <td>{booking.checkoutdate?.split(" ")[0]}</td>
                  <td>{booking.date_time?.split(" ")[0]}</td>
                  <td>
                    <span
                      className={`badge px-3 py-2 ${
                        getBookingStatus(booking.bookingstatus) === "Confirmed"
                          ? "bg-success"
                          : getBookingStatus(booking.bookingstatus) ===
                            "Cancelled"
                          ? "bg-danger"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {getBookingStatus(booking.bookingstatus)}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge px-3 py-2 ${
                        getPaymentStatus(
                          booking.paid_amount,
                          booking.total_price
                        ) === "Complete"
                          ? "bg-success"
                          : getPaymentStatus(
                              booking.paid_amount,
                              booking.total_price
                            ) === "Partial"
                          ? "bg-info text-dark"
                          : "bg-secondary"
                      }`}
                    >
                      {getPaymentStatus(
                        booking.paid_amount,
                        booking.total_price
                      )}
                    </span>
                  </td>
                  <td>₹{booking.total_price}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-golden"
                      onClick={() =>
                        navigate(`/invoice/${booking.bookedid}`, {
                          state: booking,
                        })
                      }
                    >
                      <FaCheckCircle className="me-1" /> Invoice
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center">
                  <div className="alert alert-warning fw-bold mb-0">
                    🚫 No bookings available.
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <style>
        {`
          .table-row-custom:hover {
            background-color: #fffbea !important;
            transition: 0.3s ease;
          }
          .btn-golden {
            background: #b6862c;
            color: #fff;
            border-radius: 20px;
            padding: 5px 14px;
            border: none;
            transition: 0.3s ease;
          }
          .btn-golden:hover {
            background: #8a631f;
          }
        `}
      </style>
    </div>
  );
};

export default BookingDetails;
