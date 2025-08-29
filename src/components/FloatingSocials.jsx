import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { Link } from "react-router-dom";

const FloatingSocials = () => {
    return (
        <div className="float-text">
            {/* Social Icons */}
            <div className="de_social-icons">
                <a className="fa-lg"
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebookF />
                </a>


                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon x fa-lg">
                    <SiX />
                </a>


                <a className="fa-lg"
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>
            </div>

            {/* Book Now Button */}
            <span>
                <Link to="/booking">Book Now</Link>
            </span>
        </div>
    );
};

export default FloatingSocials;
