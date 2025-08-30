// src/components/Timing.jsx
import React from "react";

const Timing = () => {
  return (
    <div className="no-top no-bottom bg-color text-light">
      <div className="container-fluid">
        <div className="row g-0">
          <div
            className="col-md-4 p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <div className="info-box padding20">
              <i className="icon_clock_alt"></i>
              <div className="info-box_text">
                <div className="info-box_title">Opening Times</div>
                <div className="info-box_subtite">
                  Monday - Friday: 09:00 - 18:00
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-4 p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          >
            <div className="info-box padding20">
              <i className="icon_house_alt"></i>
              <div className="info-box_text">
                <div className="info-box_title">Our Location</div>
                <div className="info-box_subtite">
                  Sipasarubali Baliapanda, Ps- Baliapanda, PURI
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-4 p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="info-box padding20">
              <i className="icon_headphones"></i>
              <div className="info-box_text">
                <div className="info-box_title">Customer Support</div>
                <div className="info-box_subtite">+91 9777774302</div>
              </div>
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default Timing;
