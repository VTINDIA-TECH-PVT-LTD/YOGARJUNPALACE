import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (


        <div id="content" className="no-bottom no-top">
            <section
                className="no-top no-bottom jarallax vertical-center"
                style={{ position: "relative", overflow: "hidden" }}
            >
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 1,
                    }}
                >
                    <source src="/uploads/YogarjunPalace.mp4" type="video/mp4" />
                </video>

                {/* Overlay with text */}
                <div className="de-overlay v-center t2" style={{ zIndex: 2 }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3 text-center">
                                <h1 id="bannertitle">
                                    Welcome to <br />
                                    Hotel Yogarjun Palace
                                </h1>
                                <p className="lead banertext">
                                    Discover a perfect blend of comfort and peace at
                                    Hotel Yogarjun Palace.<span id="hidemob"> Whether you're traveling for leisure or business, our hotel offers the perfect blend of comfort and convenience for an unforgettable stay.</span>

                                </p>
                                <Link className="btn-main" to="/rooms">
                                    <span>Explore Our Rooms</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Banner;
