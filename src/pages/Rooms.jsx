import React from "react";
import { Link } from "react-router-dom";   // ✅ import Link
import Footer from "../components/Footer";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "SINGLE ROOM",
      price: 2800,
      img: "https://www.madebydesignesia.com/themes/seaside/images/room/1.jpg",
      hoverImg: "https://www.madebydesignesia.com/themes/seaside/images/room/1-alt.jpg",
      label: "only 2 room left",
      guests: 2,
      size: "30 ft",
      link: "/single-room",   // ✅ clean path
      description:
        "The Single Room at our Best Hotels Near Baliapanda Puri is cozy and comfortable, perfect for a relaxing stay. It includes free Wi-Fi, a mini fridge, and 24/7 room service for your convenience.",
    },
    {
      id: 2,
      name: "DELUXE ROOM",
      price: 3000,
      img: "https://www.madebydesignesia.com/themes/seaside/images/room/1.jpg",
      hoverImg: "https://www.madebydesignesia.com/themes/seaside/images/room/1-alt.jpg",
      label: "only 2 room left",
      guests: 2,
      size: "30 ft",
      link: "/deluxe-room",   // ✅ clean path
      description:
        "The Deluxe Room at Hotel Yogarjun Palace offers an exquisite experience with its spacious and comfortable layout,and 24/7 room service for your convenience.",
    },
    {
      id: 3,
      name: "SUPER DELUXE ROOM",
      price: 3500,
      img: "https://www.madebydesignesia.com/themes/seaside/images/room/1.jpg",
      hoverImg: "https://www.madebydesignesia.com/themes/seaside/images/room/1-alt.jpg",
      label: "only 2 room left",
      guests: 2,
      size: "30 ft",
      link: "/super-deluxe-room",   // ✅ clean path
      description:
        "The Super Deluxe Room of Hotel Yogarjun Palace is a perfect blend of comfort. The room is equipped with modern amenities to ensure a delightful stay,and 24/7 room service for your convenience.",
    }
    // ... other rooms
  ];

  return (
    <>
      {/* Background */}
      <div
        id="background"
        style={{
          backgroundImage: "url('/uploads/rooms.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></div>

      <div id="content-absolute">
        {/* Subheader */}
        <section id="subheader" className="no-bg">
          <div className="container text-center">
            <h4>Select</h4>
            <h1>Rooms</h1>
          </div>
        </section>

        {/* Rooms Section */}
        <section id="section-main" className="no-bg no-top" aria-label="section-menu">
          <div className="container">
            <div className="row g-4">
              {rooms.map((room) => (
                <div className="col-lg-4" key={room.id}>
                  <div className="de-room">
                    <div className="d-image">
                      <div className="d-label">{room.label}</div>
                      <div className="d-details">
                        <span className="d-meta-1">
                          <img src="/assets/images/ui/user.svg" alt="Guests" /> {room.guests} Guests
                        </span>
                        <span className="d-meta-2">
                          <img src="/assets/images/ui/floorplan.svg" alt="Size" /> {room.size}
                        </span>
                      </div>

                      {/* ✅ Replace <a> with <Link> */}
                      <Link to={room.link}>
                        <img src={room.img} className="img-fluid" alt={room.name} />
                        <img src={room.hoverImg} className="d-img-hover img-fluid" alt={room.name} />
                      </Link>
                    </div>

                    <div className="d-text">
                      <h3>{room.name}</h3>
                      <p className="justify">{room.description}</p>

                      {/* ✅ Book Now button uses Link */}
                      <Link to={room.link} className="btn-line">
                        <span>Book Now For ₹{room.price}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Rooms;
