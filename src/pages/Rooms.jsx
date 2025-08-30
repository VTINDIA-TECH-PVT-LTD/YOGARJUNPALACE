import React from "react";
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
      link: "/single-room",
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
      guests: 3,
      size: "35 ft",
      link: "/delux-room",
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
      link: "/super-delux-room",
      description:
        "The Super Deluxe Room combines comfort and luxury in a large, well-equipped space. It includes modern features like free Wi-Fi, a mini fridge, and 24/7 room service for a truly enjoyable experience.",
    },
  ];

  return (

     <>

     {/* Fixed Background */}
      {/* Fixed Background */}
      <div
        id="background"
        style={{
          backgroundImage:
            "url('/uploads/rooms.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "163%",
          position: "absolute",
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
                    <a href={room.link}>
                      <img src={room.img} className="img-fluid" alt={room.name} />
                      <img src={room.hoverImg} className="d-img-hover img-fluid" alt={room.name} />
                    </a>
                  </div>

                  <div className="d-text">
                    <h3>{room.name}</h3>
                    <p class="justify">{room.description}</p>
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
