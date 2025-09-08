// BookingDetails.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // ✅ import useNavigate

const BookingDetails = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();  // ✅ initialize navigate

  useEffect(() => {
    const fetchBookings = () => {
      const data = [
        {
          id: 1,
          bookingNumber: "00000006",
          roomType: "Delux",
          checkIn: "2025-09-07 00:00:00",
          checkOut: "2025-09-08 00:00:00",
          bookingDate: "2025-09-07 18:11:31",
          bookingStatus: "Pending",
          paymentStatus: "Pending",
          totalAmount: "2500.00",
          guestName: "John Doe",   
          address: "Bhubaneswar, Odisha",
          passportNo: "AB123456",
          room: "Delux Room",
          adults: 2,
        },
        {
          id: 2,
          bookingNumber: "00000004",
          roomType: "Delux",
          checkIn: "2025-08-23 00:00:00",
          checkOut: "2025-08-24 00:00:00",
          bookingDate: "2025-08-23 12:05:55",
          bookingStatus: "Pending",
          paymentStatus: "Pending",
          totalAmount: "2500.00",
          guestName: "Alice Smith",
          address: "Cuttack, Odisha",
          passportNo: "XY987654",
          room: "Delux Room",
          adults: 3,
        },
        {
          id: 3,
          bookingNumber: "00000003",
          roomType: "SUPPER DELUX",
          checkIn: "2025-08-19 00:00:00",
          checkOut: "2025-08-20 00:00:00",
          bookingDate: "2025-08-19 12:47:14",
          bookingStatus: "Complete",
          paymentStatus: "Complete",
          totalAmount: "118.00",
          guestName: "Rahul Kumar",
          address: "Puri, Odisha",
          passportNo: "CD456789",
          room: "Super Delux Room",
          adults: 1,
        },
      ];
      setBookings(data);
    };

    fetchBookings();
  }, []);

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
    color: "#f8f3f3ff",
    fontWeight: "bold",
    marginBottom: "25px",
  };

  return (
    <>
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
                      <tr key={booking.id}>
                        <td>{index + 1}</td>
                        <td>{booking.bookingNumber}</td>
                        <td>{booking.roomType}</td>
                        <td>{booking.checkIn}</td>
                        <td>{booking.checkOut}</td>
                        <td>{booking.bookingDate}</td>
                        <td>
                          <span
                            className={`badge ${
                              booking.bookingStatus === "Complete"
                                ? "bg-success"
                                : "bg-warning text-dark"
                            }`}
                          >
                            {booking.bookingStatus}
                          </span>
                        </td>
                        <td>
                          <span
                            className={`badge ${
                              booking.paymentStatus === "Complete"
                                ? "bg-success"
                                : "bg-secondary"
                            }`}
                          >
                            {booking.paymentStatus}
                          </span>
                        </td>
                        <td>₹{booking.totalAmount}</td>
                        <td>
                          <button
                            className="btn btn-outline-success btn-sm"
                            style={{
                              width: "90px", // fixed width
                              height: "32px", // fixed height
                              padding: "4px 8px",
                              boxShadow: "none",
                            }}
                            onMouseDown={(e) => e.preventDefault()} // prevents active zoom
                            onClick={() =>
                              navigate(`/invoice/${booking.id}`, {
                                state: booking, // ✅ send booking data
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
    </>
  );
};

export default BookingDetails;
