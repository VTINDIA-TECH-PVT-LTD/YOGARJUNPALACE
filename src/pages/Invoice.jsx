// Invoice.js
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const Invoice = () => {
  const location = useLocation();
  const booking = location.state || {}; // fallback to empty object
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: `Invoice_${booking.bookingNumber || "Unknown"}`,
  });

  return (
    <div className="container mt-4">
      {/* Action buttons */}
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary" onClick={handlePrint}>
          🖨️ Print Invoice
        </button>
      </div>

      {/* Invoice Content */}
      <div ref={printRef} style={{ padding: "20px", border: "1px solid #ccc" }}>
        {/* Hotel Header */}
        <div className="text-center mb-4">
          <h2>YOGARJUNA PALACE</h2>
          <h5>Resort & Spa</h5>
          <p>Odisha, India</p>
          <h4 className="mt-3">Guest Registration Card</h4>
        </div>

        {/* Guest Details */}
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td><strong>Name Of the Guest</strong></td>
              <td>{booking.guestName || "-"}</td>
            </tr>
            <tr>
              <td><strong>Booking Number</strong></td>
              <td>{booking.bookingNumber || "-"}</td>
            </tr>
            <tr>
              <td><strong>Address</strong></td>
              <td>{booking.address || "-"}</td>
            </tr>
            <tr>
              <td><strong>Passport No</strong></td>
              <td>{booking.passportNo || "-"}</td>
            </tr>
            <tr>
              <td><strong>Check In Date</strong></td>
              <td>{booking.checkIn || "-"}</td>
            </tr>
            <tr>
              <td><strong>Check Out Date</strong></td>
              <td>{booking.checkOut || "-"}</td>
            </tr>
          </tbody>
        </table>

        {/* Payment Section */}
        <table className="table table-bordered mt-4">
          <thead>
            <tr>
              <th>Room</th>
              <th>Adults</th>
              <th>Grand Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{booking.roomType || "-"}</td>
              <td>{booking.adults || "1"}</td>
              <td>₹{booking.totalAmount || "0.00"}</td>
            </tr>
          </tbody>
        </table>

        {/* Footer */}
        <div className="d-flex justify-content-between mt-5">
          <p><strong>Front Desk Office Signature</strong></p>
          <p><strong>Guest Signature</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
