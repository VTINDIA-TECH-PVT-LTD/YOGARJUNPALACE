import React, { useState } from "react";
import Footer from "./Footer";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState(""); // success | error | ""

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // simple validation
        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            setStatus("error");
            return;
        }

        console.log("Form Submitted:", formData);

        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" }); // reset
    };

    return (
          <div
  id="backgroundll"
  style={{
    backgroundImage: "url(/uploads/slider7.jpg)",   // ✅ actual background
    backgroundAttachment: "fixed",                  // ✅ behaves like "fixed"
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    height: "auto",
    overflowX: "hidden",
    overflowY: "auto",
  }}
>
            {/* Subheader */}
            <section
                id="subheader"
                className="no-bg"
                style={{
                    padding: "60px 0",
                    textAlign: "center",
                }}
            >
                <div className="container">
                    <h4>Make a</h4>
                    <h1>Contact</h1>
                </div>
            </section>

            {/* Main Section */}
            <section
                id="section-main"
                className="no-bg no-top"
                aria-label="section-menu"
                style={{
                    padding: "60px 0",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="de-content-overlay"
                                style={{
                                    background: "rgba(0,0,0,0.5)",
                                    padding: "30px",
                                    borderRadius: "12px",
                                }}
                            >
                                <div className="row" style={{ alignItems: "flex-start" }}>
                                    {/* Contact Info + Form */}
                                    <div className="col-lg-8" style={{ marginBottom: "30px" }}>
                                        <h3>Hotel Yogarjun Palace</h3>
                                        <address style={{ lineHeight: "1.8" }}>
                                            <span>
                                                <strong>Address:</strong> Sipasarubali Baliapanda,
                                                Ps- Baliapanda, Ward 7, PURI MUNICIPALITY, Orissa,
                                                752001
                                            </span>
                                            <br />
                                            <span>
                                                <strong>Phone:</strong>{" "}
                                                <a href="tel:+919777774302">+91 9777774302</a>
                                            </span>
                                            <br />
                                            <span>
                                                <strong>Email:</strong>{" "}
                                                <a href="mailto:reservationaonelagoon@mk3sp.com">
                                                    reservationaonelagoon@mk3sp.com
                                                </a>
                                            </span>
                                        </address>

                                        <div className="spacer-single"></div>

                                        {/* Contact Form */}
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-12 mb10">
                                                    <h3>Send Us a Message</h3>
                                                </div>

                                                <div className="col-md-6">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className="form-control mb-3"
                                                        placeholder="Your Name"
                                                        required
                                                        style={{
                                                            background: "transparent",
                                                            border: "1px solid #ccc",
                                                            color: "#fff",
                                                        }}
                                                    />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="form-control mb-3"
                                                        placeholder="Your Email"
                                                        required
                                                        style={{
                                                            background: "transparent",
                                                            border: "1px solid #ccc",
                                                            color: "#fff",
                                                        }}
                                                    />
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="form-control mb-3"
                                                        placeholder="Your Phone"
                                                        required
                                                        style={{
                                                            background: "transparent",
                                                            border: "1px solid #ccc",
                                                            color: "#fff",
                                                        }}
                                                    />
                                                </div>

                                                <div className="col-md-6">
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                        placeholder="Your Message"
                                                        rows="5"
                                                        required
                                                        style={{
                                                            background: "transparent",
                                                            border: "1px solid #ccc",
                                                            color: "#fff",
                                                        }}
                                                    ></textarea>
                                                </div>

                                                <div className="col-md-12">
                                                    <p id="submit" className="mt20">
                                                        <input
                                                            type="submit"
                                                            value="Submit Form"
                                                            className="btn btn-line"
                                                        />
                                                    </p>

                                                    {status === "success" && (
                                                        <div className="success alert alert-success">
                                                            ✅ Your message has been sent successfully.
                                                        </div>
                                                    )}
                                                    {status === "error" && (
                                                        <div className="error alert alert-danger">
                                                            ⚠️ Please fill in all fields correctly.
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </form>

                                    </div>

                                    {/* Google Map */}
                                    <div className="col-lg-4">
                                        <div className="map-container map-fullwidth">
                                            <iframe
                                                title="Hotel A One Lagoon"
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.188758165047!2d85.79657357375793!3d19.789592629186252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c5000c9b1d7b%3A0x5a6f4e9c3c12dbe0!2sA%20One%20Lagoon!5e0!3m2!1sen!2sin!4v1756381617879!5m2!1sen!2sin"
                                                width="100%"
                                                height="350"
                                                style={{
                                                    border: 0,
                                                    borderRadius: "10px",
                                                    width: "100%",
                                                    minHeight: "350px",
                                                }}
                                                allowFullScreen
                                                loading="lazy"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;
