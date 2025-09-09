// BookingDetails.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

        // ✅ Call backend API
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

  // Inline styles
  const containerStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "65vh",
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "20px",
  };

  const overlayStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "10px",
    padding: "20px",
    width: "100%",
    maxWidth: "1400px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  };

  const headerStyle = {
    textAlign: "center",
    color: "#eaae2a",
    fontWeight: "bold",
    marginBottom: "25px",
  };

  // ✅ Map API fields to readable booking status/payment status
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
    <div style={containerStyle}>
      <div style={{ width: "100%" }}>
        <h2 style={headerStyle}>Booking Details</h2>
        <div style={overlayStyle}>
          <div style={{ overflowX: "auto" }}>
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>SL</th>
                  <th>Booking Number</th>
                  <th>Room Type</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Booking Date</th>
                  <th>Booking Status</th>
                  <th>Payment Status</th>
                  <th>Total Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length > 0 ? (
                  bookings.map((booking, index) => (
                    <tr key={booking.bookedid || index}>
                      <td>{index + 1}</td>
                      <td>{booking.booking_number || "N/A"}</td>
                      <td>{booking.roomtype || "N/A"}</td>
                      <td>{booking.checkindate?.split(" ")[0]}</td>
                      <td>{booking.checkoutdate?.split(" ")[0]}</td>
                      <td>{booking.date_time?.split(" ")[0]}</td>
                      <td>
                        <span
                          className={`badge ${
                            getBookingStatus(booking.bookingstatus) === "Confirmed"
                              ? "bg-success"
                              : getBookingStatus(booking.bookingstatus) === "Cancelled"
                              ? "bg-danger"
                              : "bg-warning text-dark"
                          }`}
                        >
                          {getBookingStatus(booking.bookingstatus)}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`badge ${
                            getPaymentStatus(booking.paid_amount, booking.total_price) ===
                            "Complete"
                              ? "bg-success"
                              : getPaymentStatus(
                                  booking.paid_amount,
                                  booking.total_price
                                ) === "Partial"
                              ? "bg-info text-dark"
                              : "bg-secondary"
                          }`}
                        >
                          {getPaymentStatus(booking.paid_amount, booking.total_price)}
                        </span>
                      </td>
                      <td>₹{booking.total_price}</td>
                      <td>
                        <button
                          className="btn btn-outline-success btn-sm"
                          style={{
                            width: "90px",
                            height: "32px",
                            padding: "4px 8px",
                            boxShadow: "none",
                          }}
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() =>
                            navigate(`/invoice/${booking.bookedid}`, {
                              state: booking,
                            })
                          }
                        >
                          Invoice
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" style={{ textAlign: "center" }}>
                      No bookings available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
