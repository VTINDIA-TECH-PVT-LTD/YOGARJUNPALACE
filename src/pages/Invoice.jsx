// Invoice.js
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Footer from "../components/Footer";

const Invoice = () => {
  const [invoiceData, setInvoiceData] = useState(null);
  const { bookingid } = useParams();
  const location = useLocation();
  const invoiceRef = useRef(null);

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user || !user.customerid) {
          alert("⚠️ Please login first!");
          window.location.href = "/login";
          return;
        }

        const payload = {
          customerid: user.customerid,
          bookingid: bookingid || location.state?.bookedid,
        };

        const response = await axios.post("/api/details_report", payload);

        if (response.data.status) {
          setInvoiceData(response.data.data);
        } else {
          setInvoiceData(null);
        }
      } catch (error) {
        console.error("Error fetching invoice:", error);
        setInvoiceData(null);
      }
    };

    fetchInvoice();
  }, [bookingid, location.state]);

  const handleDownload = async () => {
    const element = invoiceRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Invoice_${invoiceData?.booking?.booking_number || "hotel"}.pdf`);
  };

  if (!invoiceData) {
    return <p style={{ textAlign: "center" }}>Loading Invoice...</p>;
  }

  const { booking, customerinfo, storeinfo } = invoiceData;

  return (
    <>
    {/* <h1 style={color}>Invoice</h1> */}
    <h1 style={{ color: "#606060" }}>Invoice</h1>
      <div
        ref={invoiceRef}
        style={{
          padding: "30px",
          fontFamily: "'Poppins', sans-serif",
          backgroundColor: "#fff",
          color: "#000",
          maxWidth: "900px",
          margin: "20px auto",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          position: "relative",
        }}
      >
        {/* ✅ Download Button */}
        <button
          onClick={handleDownload}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            padding: "8px 16px",
            backgroundColor: "#d97706",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          📄 Download
        </button>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <img
            src="https://vtdemo.in/hotelgrand/assets/img/2025-08-26/7.jpeg"
            alt="Hotel Logo"
            style={{
              maxHeight: "100px",
              marginBottom: "10px",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
          <h2 style={{ margin: "5px 0", fontWeight: "bold", color: "#1e293b" }}>
            {storeinfo?.storename || "Resort & Spa"}
          </h2>
          <p style={{ margin: "0", color: "#444" }}>{storeinfo?.address}</p>
          <p style={{ margin: "0", color: "#444" }}>{storeinfo?.phone}</p>
          <h3
            style={{
              marginTop: "20px",
              fontWeight: "bold",
              color: "#000",
              borderBottom: "2px solid #d97706",
              display: "inline-block",
              paddingBottom: "4px",
            }}
          >
            Guest Registration Card
          </h3>
        </div>

        {/* Guest Details */}
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td style={cellStyle}>
                <strong>Name Of the Guest:</strong> {booking?.full_guest_name}
              </td>
              <td style={cellStyle}>
                <strong>For Foreign Guest</strong>
                <br />
                Passport: {customerinfo?.passport || "N/A"} <br />
                Visa: {customerinfo?.visano || "N/A"}
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>
                <strong>Booking Number:</strong> {booking?.booking_number}
              </td>
              <td style={cellStyle}>
                <strong>Address:</strong> {customerinfo?.address}
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>
                <strong>Date of Birth:</strong> {customerinfo?.dob || "N/A"}
              </td>
              <td style={cellStyle}>
                <strong>Nationality:</strong> {customerinfo?.nationality || "N/A"}
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>
                <strong>Mobile:</strong> {customerinfo?.cust_phone}
              </td>
              <td style={cellStyle}>
                <strong>PID:</strong> {customerinfo?.pid || "N/A"}
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>
                <strong>Profession:</strong> {customerinfo?.profession || "N/A"}
              </td>
              <td style={cellStyle}>
                <strong>Purpose:</strong> {customerinfo?.purpose || "N/A"}
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>
                <strong>Check In Date:</strong>{" "}
                {booking?.checkindate?.split(" ")[0] || "N/A"}
              </td>
              <td style={cellStyle}>
                <strong>Check Out Date:</strong>{" "}
                {booking?.checkoutdate?.split(" ")[0] || "N/A"}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Room Info */}
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerCellStyle}>Room</th>
              <th style={headerCellStyle}>Adults</th>
              <th style={headerCellStyle}>Children</th>
              <th style={headerCellStyle}>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellStyle}>{booking?.room_no}</td>
              <td style={cellStyle}>{booking?.nuofpeople}</td>
              <td style={cellStyle}>{booking?.children}</td>
              <td style={cellStyle}>₹{booking?.total_price}</td>
            </tr>
          </tbody>
        </table>

        {/* Signatures */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "50px",
            color: "#000",
            fontSize: "0.95rem",
          }}
        >
          <div style={{ textAlign: "center", flex: 1 }}>
            <div
              style={{
                borderTop: "1px dashed #000",
                width: "80%",
                margin: "0 auto 8px",
              }}
            ></div>
            <strong>Front Desk Office Signature</strong>
          </div>
          <div style={{ textAlign: "center", flex: 1 }}>
            <div
              style={{
                borderTop: "1px dashed #000",
                width: "80%",
                margin: "0 auto 8px",
              }}
            ></div>
            <strong>Guest Signature</strong>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginBottom: "20px",
  backgroundColor: "#fff",
};

const headerCellStyle = {
  border: "1px solid #000",
  padding: "10px",
  fontSize: "1rem",
  fontWeight: "bold",
  backgroundColor: "#f1f5f9",
  textAlign: "center",
};

const cellStyle = {
  border: "1px solid #000",
  padding: "10px",
  fontSize: "0.95rem",
  backgroundColor: "#fff",
  color: "#000",
};

export default Invoice;
