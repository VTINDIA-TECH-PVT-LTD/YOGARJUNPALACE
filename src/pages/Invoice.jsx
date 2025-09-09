import React, { useEffect, useState } from "react";
import axios from "axios";

const Invoice = () => {
  const [invoiceData, setInvoiceData] = useState(null);

  useEffect(() => {
    axios.get("/api/invoice/00000006").then((res) => {
      setInvoiceData(res.data);
    });
  }, []);

  const handleDownload = () => {
    window.print(); // ✅ opens print dialog (can save as PDF)
  };

  if (!invoiceData) {
    return <p style={{ textAlign: "center" }}>Loading Invoice...</p>;
  }

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff",
        color: "#000",
        maxWidth: "800px",
        margin: "20px auto",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      {/* ✅ Download Button */}
      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <button
          onClick={handleDownload}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ed8b1bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          📄
        </button>
      </div>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h3 style={{ margin: 0, fontWeight: "bold", color: "#000" }}>
          Guest Registration Card
        </h3>
        <h2 style={{ margin: "5px 0", color: "#000" }}>Resort & Spa</h2>
        <p style={{ margin: 0, color: "#000" }}>Odisha, India</p>
      </div>

      {/* Guest Details */}
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td style={cellStyle}>
              <strong>Name Of the Guest</strong>
              <br />
              1. {invoiceData.guest1 || ""}
              <br />
              2. {invoiceData.guest2 || ""}
            </td>
            <td style={cellStyle}>
              <strong>For Foreign Guest</strong>
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Booking Number:</strong> {invoiceData.bookingNumber}
            </td>
            <td style={cellStyle}>
              <strong>Address:</strong> {invoiceData.address}
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Date of Birth:</strong> {invoiceData.dob}
            </td>
            <td style={cellStyle}>
              <strong>Nationality:</strong> {invoiceData.foreignNationality}
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Mobile:</strong> {invoiceData.mobile}
            </td>
            <td style={cellStyle}>
              <strong>Passport No:</strong> {invoiceData.foreignPassport}
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Passport No:</strong> {invoiceData.passportNo}
            </td>
            <td style={cellStyle}>
              <strong>Visa/Reg. No:</strong> {invoiceData.visaRegNo}
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Nationality:</strong> {invoiceData.nationality}
              {invoiceData.nationality === "USA" && " ✅ USA"}
              {invoiceData.isForeign && " ✅ Foreign"}
            </td>
            <td style={cellStyle}>
              <strong>Purpose:</strong>{" "}
              {invoiceData.purpose?.tourist && "✅ Tourist "}
              {invoiceData.purpose?.business && "✅ Business "}
              {invoiceData.purpose?.official && "✅ Official"}
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>National ID:</strong> {invoiceData.nationalId}
            </td>
            <td style={cellStyle}>
              <strong>Duration:</strong> {invoiceData.duration} Nights
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Check In Date:</strong> {invoiceData.checkInDate}
            </td>
            <td style={cellStyle}>
              <strong>Check Out Date:</strong> {invoiceData.checkOutDate}
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <strong>Check In Time:</strong> {invoiceData.checkInTime}
            </td>
            <td style={cellStyle}>
              <strong>Check Out Time:</strong> {invoiceData.checkOutTime}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Room Info */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle}>Room</th>
            <th style={cellStyle}>Adults</th>
            <th style={cellStyle}>Grand Total</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.rooms?.map((room, index) => (
            <tr key={index}>
              <td style={cellStyle}>{room.roomNumber}</td>
              <td style={cellStyle}>{room.adults}</td>
              <td style={cellStyle}>{room.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Signatures */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
          color: "#000",
        }}
      >
        <div style={{ textAlign: "center", flex: 1 }}>
          <strong>Front Desk Office Signature</strong>
        </div>
        <div style={{ textAlign: "center", flex: 1 }}>
          <strong>Guest Signature</strong>
        </div>
      </div>
    </div>
  );
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginBottom: "20px",
  backgroundColor: "#fff",
  color: "#000",
};

const cellStyle = {
  border: "1px solid #000",
  padding: "10px",
  fontSize: "0.95rem",
  backgroundColor: "#fff",
  color: "#000",
};

export default Invoice;
