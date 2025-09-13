// Gallery.jsx
import React, { useEffect } from "react";
import Footer from "./Footer";

const Gallery = () => {
  const galleryItems = [
    {
      title: "Hotel Yogarjun Palace",
      image:
        "/uploads/gallary.jpeg",
    },
    {
      title: "Hotel Yogarjun Palace",
      image:
        "/uploads/gallary1.jpeg",
    },
    {
      title: "Hotel Yogarjun Palace",
      image:
        "/uploads/gallary2.jpeg",
    },
    {
      title: "Hotel Yogarjun Palace",
      image:
        "/uploads/gallary3.jpeg",
    },
    {
      title: "Hotel Yogarjun Palace",
      image:
        "/uploads/gallary4.jpeg",
    },
    {
      title: "Hotel Yogarjun Palace",
      image:
        "/uploads/gallary5.jpeg",
    },
  ];

  useEffect(() => {
    // Initialize Magnific Popup if jQuery + plugin are present (as in the HTML theme)
    if (
      typeof window !== "undefined" &&
      window.$ &&
      window.$.fn &&
      typeof window.$.fn.magnificPopup === "function"
    ) {
      window.$(".image-popup").magnificPopup({
        type: "image",
        gallery: { enabled: true },
        mainClass: "mfp-fade",
        removalDelay: 300,
      });
    }
  }, [galleryItems.length]);

  return (
    <>
      {/* Fixed Background */}
      <div
        id="background"
        style={{
          backgroundImage:
            "url('/uploads/slider7.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          minHeight: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></div>

      <div id="content-absolute">
        {/* subheader */}
        <section id="subheader" className="no-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h4>Latest</h4>
                <h1>Gallery</h1>
              </div>
            </div>
          </div>
        </section>

        <section id="section-main" className="no-bg no-top" aria-label="section-menu">
          <div className="container">
            <div id="gallery" className="row g-4">
              {galleryItems.map((item, i) => (
                <div className="col-md-4 item" key={i}>
                  <div className="de-image-hover">
                    <a href={item.image} className="image-popup">
                      <span className="dih-title-wrap">
                        <span className="dih-title">{item.title}</span>
                      </span>
                      <span className="dih-overlay"></span>
                      <img src={item.image} className="lazy img-fluid" alt={item.title} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* subheader close */}
      <Footer />
      </div>
    </>
  );
};

export default Gallery;
