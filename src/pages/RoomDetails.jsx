import React, { useState } from "react";
import { Link } from "react-router-dom";

const RoomDetails = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="booking-page">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg border-0 rounded-3 p-4 booking-card">
              {/* Success Alert */}
              <div className="alert alert-success text-center mb-4 py-2">
                Awesome choice! You're getting a great deal with your rate.
              </div>

              <div className="row">
                {/* Left Summary */}
                <div className="col-md-4 mb-4">
                  <div className="summary-box shadow-sm p-3">
                    <p>
                      <strong>Check In</strong>
                      <br />
                      Wednesday, Sep 10 2025
                      <br />
                      From 12:00 PM
                    </p>
                    <p>
                      <strong>Check Out</strong>
                      <br />
                      Thursday, Sep 11 2025
                      <br />
                      Until 10:00 AM
                    </p>

                    <p>
                      <strong>SUPPER DELUX</strong>
                      <br />
                      Adults: 2
                      <br />
                      Room Size: 2
                      <br />
                      No of Room: 1
                    </p>

                    <p>
                      18% Tax: ₹18
                      <br />
                      7% Service Charge: ₹7
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <button className="btn btn-sm btn-warning">Apply</button>
                      <h6 className="text-success fw-bold mb-0">₹125</h6>
                    </div>
                  </div>

                  <div className="mt-3 small-box">
                    <p>
                      <strong>It's almost yours</strong>
                      <br />
                      Just a few more details to confirm.
                    </p>
                  </div>
                  <div className="mt-2 small-box">
                    <p>
                      <strong>No surprises</strong>
                      <br />
                      Pay the price you see.
                    </p>
                  </div>
                  <div className="mt-2 small-box">
                    <p>
                      <strong>Your booking is secure</strong>
                      <br />
                      Details protected by a secure connection.
                    </p>
                  </div>
                </div>

                {/* Right Form */}
                <div className="col-md-8">
                  <h5 className="fw-bold mb-3 setheading">
                    ENTER YOUR DETAILS
                  </h5>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">First Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter first name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Last Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter last name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email *</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="example@email.com"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Phone *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="9876543210"
                        />
                        <small className="text-muted">
                          No + sign. Example: 9876543210
                        </small>
                      </div>
                      <div className="col-12">
                        <label className="form-label">Address</label>
                        <textarea
                          className="form-control"
                          rows="2"
                          placeholder="Enter your address"
                        ></textarea>
                      </div>
                    </div>

                    {/* Room Details */}
                    <div className="mt-4 p-3 border rounded bg-light">
                      <h6 className="fw-bold">Room</h6>
                      <div className="d-flex align-items-center">
                        <div className="room-img bg-secondary me-3"></div>
                        <div>
                          <p className="mb-1 fw-bold">SUPPER DELUX</p>
                          <p
                            className="mb-0 text-primary"
                            style={{ cursor: "pointer" }}
                            onClick={() => setShowModal(true)}
                          >
                            Booking Conditions
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <label className="form-label">Full Guest Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter guest full name"
                      />
                    </div>

                    <div className="mt-3">
                      <label className="form-label">Special Requests</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Write requests in English"
                      ></textarea>
                    </div>

                    <div className="text-end mt-4">
                      <Link to="/checkout">
                        <button type="button" className="btn btn-success px-4">
                          Next: Final details
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Modal */}
      {showModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <h5 className="fw-bold mb-3 modalheading">Booking Conditions</h5>
            <p className="modalheading">
              ✅ Free cancellation within 24 hours.
              <br />
              ✅ ID proof required at check-in.
              <br />
              ✅ Taxes included in the final price.
              <br />✅ No hidden charges.
            </p>
            <div className="text-end">
              <button
                className="btn btn-secondary me-2"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="btn btn-success"
                onClick={() => setShowModal(false)}
              >
                Agree
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inline Styles */}
      <style jsx>{`
        .setheading {
          color: black;
        }

        .modalheading {
          color: black;
        }

        .booking-page {
          background: url("/uploads/slider7.jpg") no-repeat center center fixed;
          background-size: cover;
          min-height: 100vh;
          padding-top: 40px;
        }
        .booking-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 14px;
        }
        .room-img {
          width: 80px;
          height: 80px;
          border-radius: 8px;
        }
        .small-box {
          background: rgba(255, 255, 255, 0.8);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 0.85rem;
        }
        .summary-box {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 10px;
          font-size: 0.9rem;
          color: #333;
        }
        .custom-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
        }
        .custom-modal {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          max-width: 500px;
          width: 90%;
        }
      `}</style>
    </div>
  );
};

export default RoomDetails;
