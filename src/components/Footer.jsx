// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="no-top pl20 pr20">
      <div className="subfooter">
        <div className="container-fluid">
          <div className="row">
            {/* Left Side */}
            <div className="col-md-6">
              &copy; Copyright 2025 {" "}
              <span className="id-color"></span>
            </div>

            {/* Right Side */}
            <div className="col-md-6 text-right">
              <div className="social-icons">
                <a href="#">
                  <i className="fa fa-facebook fa-lg"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter fa-lg"></i>
                </a>
                <a href="#">
                  <i className="fa fa-rss fa-lg"></i>
                </a>
                <a href="#">
                  <i className="fa fa-google-plus fa-lg"></i>
                </a>
                <a href="#">
                  <i className="fa fa-skype fa-lg"></i>
                </a>
                <a href="#">
                  <i className="fa fa-dribbble fa-lg"></i>
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
