import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaUserFriends,
  FaRulerCombined,
  FaBed,
  FaStar,
  FaPlus,
  FaChild,
  FaMoneyBillWave,
  FaInfoCircle,
} from "react-icons/fa";
import { MdHotel } from "react-icons/md";
import Footer from "../components/Footer";

const SingleRoom = () => {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [roomData, setRoomData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setTimestamp(Date.now());
  }, [location.pathname]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.$ &&
      window.$.fn &&
      typeof window.$.fn.magnificPopup === "function"
    ) {
      window.$(".image-popup-gallery").magnificPopup({
        type: "image",
        gallery: { enabled: true },
        mainClass: "mfp-fade",
        removalDelay: 300,
      });
    }

    const interval = setInterval(() => {
      setTimestamp(Date.now());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchRoom = async () => {
      const data = {
        roomtype: "Single Room",
        roomsize: "100",
        roomsizemesurement: "13",
        roomactive: "1",
        bedsno: "1",
        bedstype: "12",
        number_of_star: "5",
        roomdescription:
          "Keep it simple. Talk about colors, patterns, decor, and unique architectural details, if they're relevant. Talk about furnishings and props, especially if characters use them. Talk about anything in the room if it reveals something about the characters within.",
        reservecondition:
          "Keep it simple. Talk about colors, patterns, decor, and unique architectural details, if they're relevant. Talk about furnishings and props, especially if characters use them. Talk about anything in the room if it reveals something about the characters within.",
        roomstatus: "0",
        capacity: "2",
        exbedcapability: "1",
        child_limit: null,
        rate: "2000.00",
        bedcharge: "500",
        personcharge: "500",
        room_images: [
          "https://yogarjunpalace.com/application/modules/room_setting/assets/images/2025-09-08/F.jpg",
          "https://yogarjunpalace.com/application/modules/room_setting/assets/images/2025-09-08/S.jpg",
          "https://yogarjunpalace.com/application/modules/room_setting/assets/images/2025-09-08/S.jpg",
          "https://yogarjunpalace.com/application/modules/room_setting/assets/images/2025-09-08/S.jpg",
          "https://yogarjunpalace.com/application/modules/room_setting/assets/images/2025-09-08/S.jpg",
        ],
      };
      setRoomData(data);
    };
    fetchRoom();
  }, []);

  const mainBg = {
    backgroundImage: "url(/uploads/single_room.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    padding: "40px 0",
  };

  const withCacheBust = (path) => `${path}?v=${timestamp}`;

  if (!roomData) return null;

  // base card style
  const cardStyle = {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "14px",
    boxShadow: "0 6px 24px rgba(0,0,0,0.45)",
    color: "#fff",
  };

  // smaller centered summary
  const summaryStyle = {
    ...cardStyle,
    maxWidth: 900,
    margin: "0 auto",
    padding: "24px",
  };

  // item style for summary rows
  const summaryItemStyle = {
    background: "rgba(26, 25, 25, 0.04)",
    border: "1px solid rgba(255,255,255,0.06)",
    padding: "12px",
    borderRadius: "10px",
    transition: "background 0.2s, transform 0.12s",
  };

  return (
    <>
      <section id="section-main" style={mainBg} aria-label="section-menu">
        {/* Header */}
        <div
          className="container p-0"
          id="subheader"
          style={{ backgroundColor: "transparent" }}
        >
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h4 style={{ color: "#fff", fontWeight: "500" }}>Luxury</h4>
              <h1
                style={{ color: "#fff", fontWeight: "700", fontSize: "48px" }}
              >
                Suite
              </h1><br />
              <h2 style={{ color: "#fff", fontWeight: "500" }}>
                {roomData.roomtype}
              </h2>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="de-content-overlay">
                {/* Carousel (full width card) */}
                <div className="mb-5 p-3" style={cardStyle}>
                  <h4
                    style={{
                      borderBottom: "2px solid rgba(255,255,255,0.12)",
                      paddingBottom: "10px",
                      marginBottom: "14px",
                    }}
                  >
                    📸 Room Images
                  </h4>
                  <div id="carousel-rooms" className="owl-carousel owl-theme">
                    {roomData.room_images.map((img, idx) => (
                      <div className="item" key={idx}>
                        <div
                          className="picframe rounded overflow-hidden"
                          style={{
                            boxShadow: "0 6px 18px rgba(0,0,0,0.45)",
                          }}
                        >
                          <a
                            className="image-popup-gallery"
                            href={withCacheBust(img)}
                          >
                            <span className="overlay">
                              <span className="pf_caption">
                                Room image {idx + 1}
                              </span>
                            </span>
                          </a>
                          <img
                            src={withCacheBust(img)}
                            alt={`Room image ${idx + 1}`}
                            className="img-fluid rounded"
                            style={{
                              width: "100%",
                              height: "auto",
                              display: "block",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ---- SQUEEZED Room Summary (3 per row) ---- */}
                <div className="mb-5" style={summaryStyle}>
                  <h4
                    style={{
                      borderBottom: "2px solid rgba(255,255,255,0.12)",
                      paddingBottom: "10px",
                      marginBottom: "16px",
                    }}
                  >
                    🏷️ Room Summary
                  </h4>

                  <div className="row g-3">
                    {[
                      { icon: <FaUserFriends />, label: `${roomData.capacity} Guests` },
                      { icon: <FaRulerCombined />, label: `${roomData.roomsize} ft² (${roomData.roomsizemesurement} m²)` },
                      { icon: <FaBed />, label: `${roomData.bedsno} Bed(s) (${roomData.bedstype})` },
                      { icon: <FaStar />, label: `${roomData.number_of_star} Stars` },
                      { icon: <FaChild />, label: `${roomData.child_limit !== null ? roomData.child_limit : "Not specified"} Child Limit` },
                      { icon: <FaMoneyBillWave />, label: `₹${roomData.rate} / Night` },
                      { icon: <FaMoneyBillWave />, label: `Bed Charge ₹${roomData.bedcharge}` },
                      { icon: <FaMoneyBillWave />, label: `Person Charge ₹${roomData.personcharge}` },
                      { icon: <FaInfoCircle />, label: `Status: ${roomData.roomstatus === "0" ? "✅ Available" : "❌ Not Available"}` },
                    ].map((item, idx) => (
                      <div className="col-lg-4 col-md-6 col-sm-12" key={idx}>
                        <div
                          className="d-flex align-items-center"
                          style={summaryItemStyle}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "rgba(255,255,255,0.08)";
                            e.currentTarget.style.transform =
                              "translateY(-3px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background =
                              "rgba(255,255,255,0.04)";
                            e.currentTarget.style.transform = "translateY(0)";
                          }}
                        >
                          <div
                            style={{
                              fontSize: 20,
                              marginRight: 12,
                              color: "#4ade80",
                              minWidth: 28,
                            }}
                          >
                            {item.icon}
                          </div>
                          <div style={{ color: "#f3f4f6", fontSize: 15 }}>
                            {item.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ---- Two-column: Left = Description + Reserve, Right = Facilities ---- */}
                <div className="row gx-4 gy-4">
                  {/* Left column (Description + Reserve Condition) */}
                  <div className="col-lg-7 col-md-12">
                    <div style={{ ...cardStyle, padding: 20 }}>
                      <h4
                        style={{
                          borderBottom: "2px solid rgba(255,255,255,0.12)",
                          paddingBottom: 10,
                          marginBottom: 12,
                        }}
                      >
                        📝 Description
                      </h4>
                      <p style={{ color: "#d1d5db", lineHeight: 1.6 }}>
                        {roomData.roomdescription}
                      </p>

                      <h4
                        style={{
                          borderBottom: "2px solid rgba(255,255,255,0.12)",
                          paddingBottom: 10,
                          marginTop: 18,
                          marginBottom: 12,
                        }}
                      >
                        📌 Reserve Condition
                      </h4>
                      <p style={{ color: "#d1d5db", lineHeight: 1.6 }}>
                        {roomData.reservecondition}
                      </p>
                    </div>
                  </div>

                  {/* Right column (Facilities) */}
                  <div className="col-lg-5 col-md-12">
                    <div style={{ ...cardStyle, padding: 20 }}>
                      <h4
                        style={{
                          borderBottom: "2px solid rgba(255,255,255,0.12)",
                          paddingBottom: 10,
                          marginBottom: 12,
                        }}
                      >
                        🛎️ Room Facilities
                      </h4>

                      <ul
                        className="list-unstyled"
                        style={{ color: "#d1d5db", lineHeight: 1.8 }}
                      >
                        <li>📺 48" HD TV with 60+ channels</li>
                        <li>☕ Coffee & tea makers</li>
                        <li>🚿 Hot & cold bathing</li>
                        <li>🛏️ Comfortable mattress bed</li>
                        <li>🛋️ High quality bed sheets</li>
                        <li>📶 Free WIFI internet</li>
                        <li>🔗 Connecting room (on request)</li>
                        {roomData.exbedcapability > 0 && (
                          <li style={{ display: "flex", alignItems: "center" }}>
                            <FaPlus
                              className="me-2"
                              style={{ color: "#4ade80" }}
                            />{" "}
                            Extra bed available
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Final centered Book Now button */}
                <div className="text-center mt-5 mb-5">
                  <Link
                    to="/booking"
                    className="btn-success shadow-lg d-inline-flex align-items-center justify-content-center"
                    style={{
                      borderRadius: 12,
                      fontWeight: 700,
                      fontSize: 18,
                      width: "220px",
                      height: "60px",
                      letterSpacing: 0.3,
                      backgroundColor: "#edac34ff",
                    }}
                  >
                    <MdHotel className="me-2" size={22} />
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SingleRoom;
