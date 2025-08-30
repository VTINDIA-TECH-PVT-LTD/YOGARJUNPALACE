// src/pages/SingleRoom.jsx
import React, { useEffect } from "react";
import { FaUserFriends, FaRulerCombined, FaBed } from "react-icons/fa";
import { MdHotel } from "react-icons/md";

const SingleRoom = () => {
  useEffect(() => {
    // Initialize Magnific Popup for gallery
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
  }, []);

  return (
    <>
      {/* Subheader */}
      <section id="subheader" className="no-bg">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h4>Luxury</h4>
              <h1>Suite</h1>
            </div>
            <h2 className="col-12 text-center">Single Room</h2>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section id="section-main" className="no-bg no-top" aria-label="section-menu">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="de-content-overlay">
                {/* Carousel */}
                <div className="d-carousel wow fadeInRight" data-wow-delay="2s">
                  <div id="carousel-rooms" className="owl-carousel owl-theme">
                    {/* Item 1 */}
                    <div className="item">
                      <div className="picframe">
                        <a className="image-popup-gallery" href="/uploads/Single Room.png">
                          <span className="overlay">
                            <span className="pf_title"><i className="icon_search"></i></span>
                            <span className="pf_caption">King size bed</span>
                          </span>
                        </a>
                        <img src="/uploads/Single Room.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                    {/* Item 2 */}
                    <div className="item">
                      <div className="picframe">
                        <a className="image-popup-gallery" href="/uploads/Room1.png">
                          <span className="overlay">
                            <span className="pf_title"><i className="icon_search"></i></span>
                            <span className="pf_caption">Balcony with ocean view</span>
                          </span>
                        </a>
                        <img src="/uploads/Room1.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                    {/* Item 3 */}
                    <div className="item">
                      <div className="picframe">
                        <a className="image-popup-gallery" href="/uploads/Room2.png">
                          <span className="overlay">
                            <span className="pf_title"><i className="icon_search"></i></span>
                            <span className="pf_caption">Large bathroom</span>
                          </span>
                        </a>
                        <img src="/uploads/Room2.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                    {/* Item 4 */}
                    <div className="item">
                      <div className="picframe">
                        <a className="image-popup-gallery" href="/uploads/Room3.png">
                          <span className="overlay">
                            <span className="pf_title"><i className="icon_search"></i></span>
                            <span className="pf_caption">Swimming pool</span>
                          </span>
                        </a>
                        <img src="/uploads/Room3.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                    {/* Item 5 */}
                    <div className="item">
                      <div className="picframe">
                        <a className="image-popup-gallery" href="/uploads/Room1.png">
                          <span className="overlay">
                            <span className="pf_title"><i className="icon_search"></i></span>
                            <span className="pf_caption">Swimming pool</span>
                          </span>
                        </a>
                        <img src="/uploads/Room1.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  {/* Carousel Arrows */}
                  <div className="d-arrow-left mod-a"><i className="fa fa-angle-left"></i></div>
                  <div className="d-arrow-right mod-a"><i className="fa fa-angle-right"></i></div>
                </div>

                {/* Room Details */}
                <div className="row align-items-start mt-4">
                  <div className="col-12 mb-3">
                    <div className="d-room-details d-flex flex-wrap justify-content-between gap-3">
                      <div className="d-flex align-items-center"><FaUserFriends className="me-2" />4 Guests</div>
                      <div className="d-flex align-items-center"><FaRulerCombined className="me-2" />70 ft</div>
                      <div className="d-flex align-items-center"><FaBed className="me-2" />2800 / Night</div>
                      <div>
                        <a href="booking.html" className="btn-main d-flex align-items-center">
                          <MdHotel className="me-2" /><span>Book Now</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Left Column */}
                  <div className="col-12 col-lg-8 mb-4">
                    <h3>SINGLE ROOM</h3>
                    <p>
                      The Single Room of Hotel Yogarjun Palace is a comfortable and cozy space that offers a refreshing and rejuvenating stay. 
                      The room is designed with modern amenities and features a comfortable bed, a work desk, and a seating area. 
                      The decor is simple yet elegant, with soothing colors and tasteful furnishings that create a relaxing ambiance. 
                      The room also includes a flat-screen TV, air conditioning, and free Wi-Fi to keep you connected and entertained during your stay. 
                      The bathroom is equipped with all the necessary toiletries and a shower to help you unwind after a long day. 
                      Overall, the Single Room of Hotel Yogarjun Palace is an ideal choice for solo travelers or business travelers looking for a comfortable and convenient stay.
                    </p>
                  </div>

                  {/* Right Column */}
                  <div className="col-12 col-lg-4">
                    <h3>Room Facilities</h3>
                    <ul className="ul-style-2">
                      <li>48" HD TV with more than 60 channels</li>
                      <li>Coffee and tea makers</li>
                      <li>Hot &amp; cold bathing</li>
                      <li>High comfortable mattress bed</li>
                      <li>High quality bed sheets</li>
                      <li>Free WIFI internet connection</li>
                      <li>Connecting room by request</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleRoom;
