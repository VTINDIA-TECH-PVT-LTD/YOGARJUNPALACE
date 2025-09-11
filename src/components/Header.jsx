import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaBed,
  FaCalendarAlt,
  FaImages,
  FaEnvelope,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined" && storedUser !== "null") {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.warn("Failed to parse user from localStorage", err);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div id="wrapper">
        {/* header begin */}
        <header className="header-fullwidth menu-expand transparent header-mobile">
          <div className="container-fluid">
            <div className="row-fluid">
              <div className="col-md-12 d-flex justify-between items-center">
                {/* Logo */}
                <div id="logo">
                  <Link to="/" className="logo-text" id="setlogo">
                    Hotel Yogarjun Palace
                  </Link>
                </div>

                {/* Burger button */}
                <div
                  id="mo-button-open"
                  className="mo-bo-s1"
                  onClick={handleMenuToggle}
                  style={{ cursor: "pointer" }}
                >
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* header close */}

        {/* menu overlay begin */}
        <div id="menu-overlay" className={`menu-overlay ${menuOpen ? "open" : ""}`}>
          <div className="container-fluid h-100 d-flex flex-column justify-content-center align-items-center">
            <div className="row-fluid w-100">
              <div className="col-md-12 text-center">
                {/* Close button */}
                <div
                  id="mo-button-close"
                  onClick={handleMenuToggle}
                  style={{ cursor: "pointer", marginBottom: "20px" }}
                >
                  <div className="line-1"></div>
                  <div className="line-2"></div>
                </div>

                {/* Drawer Logo */}
                <div id="logo" style={{ marginBottom: "30px" }}>
                  <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="logo-text"
                    style={{ fontSize: "22px", fontWeight: "bold", color: "#f9d342" }}
                  >
                    Hotel Yogarjun Palace
                  </Link>
                </div>

                {/* Menu grid */}
                <ul
                  id="mo-menu"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                    listStyle: "none",
                    padding: 0,
                    margin: "0 auto",
                    maxWidth: "600px",
                  }}
                >
                  <li>
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                      <FaHome /> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>
                      <FaInfoCircle /> About
                    </Link>
                  </li>
                  <li>
                    <Link to="/rooms" onClick={() => setMenuOpen(false)}>
                      <FaBed /> Rooms
                    </Link>
                  </li>
                  <li>
                    <Link to="/booking" onClick={() => setMenuOpen(false)}>
                      <FaCalendarAlt /> Booking
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery" onClick={() => setMenuOpen(false)}>
                      <FaImages /> Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>
                      <FaEnvelope /> Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/Profile" onClick={() => setMenuOpen(false)}>
                      <FaUser /> My Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/UserProfile" onClick={() => setMenuOpen(false)}>
                      <FaUserCircle /> User Profile
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* menu overlay close */}
      </div>

      {/* Extra CSS for centering & styling */}
      <style>{`
        .menu-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          color: white;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.3s ease, visibility 0.3s ease;
          z-index: 9999;
        }
        .menu-overlay.open {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }
        #mo-menu li a {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px;
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          color: #fff;
          font-size: 18px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        #mo-menu li a:hover {
          background: #f9d342;
          color: #111;
        }
        /* Burger Button */
        #mo-button-open div {
          width: 30px;
          height: 3px;
          background: white;
          margin: 6px 0;
          border-radius: 2px;
        }
        /* Close Button */
        .line-1, .line-2 {
          width: 30px;
          height: 3px;
          background: white;
          margin: 5px auto;
        }
      `}</style>
    </>
  );
};

export default Header;
