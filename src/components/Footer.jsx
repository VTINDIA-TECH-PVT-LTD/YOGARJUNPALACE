// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiX } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="no-top pl20 pr20">
      <div className="subfooter">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Left Side: Copyright */}
            <div className="col-12 col-md-6 text-center text-md-left mb-2 mb-md-0" id="footer-copyright">
              &copy; 2025 Hotel Yogarjun Palace. All Rights Reserved{" "}
              <span className="id-color"></span>
            </div>

            {/* Right Side: Social Icons */}
            <div className="col-12 col-md-6 text-center text-md-right" id="footer-socials">
              <div className="social-icons d-inline-flex justify-content-center justify-content-md-end">
                <a
                  href="https://www.facebook.com"
                  className="fa-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com"
                  className="fa-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://x.com"
                  className="fa-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiX />
                </a>
                <a
                  href="https://www.youtube.com"
                  className="fa-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <a href="#" id="back-to-top"></a>
    </footer>
  );
};

export default Footer;
