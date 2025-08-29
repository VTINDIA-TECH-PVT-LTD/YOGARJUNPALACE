import React, { useEffect, useRef } from "react";
import Footer from "../components/Footer";

const Rooms = () => {
  const backgroundRef = useRef(null);

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
      link: "/room-single",
      description:
        "The Single Room at our Best Hotels Near Baliapanda Puri is cozy and comfortable, perfect for a relaxing stay. It includes free Wi-Fi, a mini fridge, and 24/7 room service for your convenience.",
    },
    {
      id: 2,
      name: "Deluxe Room",
      price: 3000,
      img: "https://www.madebydesignesia.com/themes/seaside/images/room/1.jpg",
      hoverImg: "https://www.madebydesignesia.com/themes/seaside/images/room/1-alt.jpg",
      label: "only 1 room left",
      guests: 2,
      size: "35 ft",
      link: "/room-single",
      description:
        "The Deluxe Room is spacious and comfortable, offering a pleasant stay. It comes with free Wi-Fi, a mini fridge, and round-the-clock room service to make your visit hassle-free.",
    },
    {
      id: 3,
      name: "SUPER DELUXE ROOM",
      price: 3500,
      img: "https://www.madebydesignesia.com/themes/seaside/images/room/1.jpg",
      hoverImg: "https://www.madebydesignesia.com/themes/seaside/images/room/1-alt.jpg",
      label: "only 3 room left",
      guests: 2,
      size: "40 ft",
      link: "/room-single",
      description:
        "The Super Deluxe Room combines comfort and luxury in a large, well-equipped space. It includes modern features like free Wi-Fi, a mini fridge, and 24/7 room service for a truly enjoyable experience.",
    },
  ];

  // Apply background image on mount (mimics HTML template behavior)
  useEffect(() => {
    const bgEl = backgroundRef.current;
    if (bgEl) {
      const bgImage = bgEl.getAttribute("data-bgimage");
      if (bgImage) {
        const [urlPart, attachment] = bgImage.split(" ");
        bgEl.style.backgroundImage = urlPart;
        bgEl.style.backgroundAttachment = attachment || "scroll";
        bgEl.style.backgroundSize = "cover";
        bgEl.style.backgroundPosition = "center";
        bgEl.style.position = "absolute";
        bgEl.style.top = "0";
        bgEl.style.left = "0";
        bgEl.style.width = "100%";
        bgEl.style.height = "100%";
        bgEl.style.zIndex = "-1";
      }
    }
  }, []);

  return (
    <>
      {/* Dynamic Background */}
      <div
        id="background"
        data-bgimage="url('/uploads/rooms.jpg') fixed"
        ref={backgroundRef}
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
        <section
          id="section-main"
          className="no-bg no-top"
          aria-label="section-menu"
        >
          <div className="container">
            <div className="row g-4">
              {rooms.map((room) => (
                <div className="col-lg-4" key={room.id}>
                  <div className="de-room">
                    <div className="d-image">
                      <div className="d-label">{room.label}</div>
                      <div className="d-details">
                        <span className="d-meta-1">
                          <img src="/assets/images/ui/user.svg" alt="Guests" />{" "}
                          {room.guests} Guests
                        </span>
                        <span className="d-meta-2">
                          <img
                            src="/assets/images/ui/floorplan.svg"
                            alt="Size"
                          />{" "}
                          {room.size}
                        </span>
                      </div>
                      <a href={room.link}>
                        <img
                          src={room.img}
                          className="img-fluid"
                          alt={room.name}
                        />
                        <img
                          src={room.hoverImg}
                          className="d-img-hover img-fluid"
                          alt={room.name}
                        />
                      </a>
                    </div>

                    <div className="d-text">
                      <h3>{room.name}</h3>
                      <p>{room.description}</p>
                      <a href={room.link} className="btn-line">
                        <span>Book Now For ₹{room.price}</span>
                      </a>
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
