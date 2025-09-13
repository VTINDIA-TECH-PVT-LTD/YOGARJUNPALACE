// src/components/Testimonial.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const containerStyle = {
    backgroundImage: "url('/uploads/4.jpg')", // path to your image
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "60px 20px", // optional: adjust spacing as needed
  };

  return (
    <section className="jarallax" id="testimonials" style={containerStyle}>
      {/* Remove the img tag if you're using backgroundImage in style */}
      {/* <img src="images/background/4.jpg" className="jarallax-img" alt="" /> */}

      <div className="container" style={{  borderRadius: "10px", padding: "20px" }}>
        <div className="row gx-4">
          <div className="col-lg-12 text-center">
            <h2 className="title center" id="testimonialsheading">
              Testimonials
              <span className="small-border"></span>
            </h2>
          </div>

          <div className="col-md-8 offset-md-2 wow fadeInUp">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              speed={800}
            >
              <SwiperSlide>
                <blockquote className="testimonial-big">
                  <span className="d-testi">
                    The rooms were clean, very comfortable, and the staff was
                    amazing. They went over and beyond to help make our stay
                    enjoyable. I highly recommend this hotel for anyone visiting
                    downtown
                  </span>
                  <span className="name">Abhijit Kar, Customer</span>
                </blockquote>
              </SwiperSlide>

              <SwiperSlide>
                <blockquote className="testimonial-big">
                  <span className="d-testi">
                    They were extremely accommodating and allowed us to check in
                    early at like 10am. We got to hotel super early and I didn’t
                    wanna wait. So this was a big plus. The service was exceptional
                    as well. Would definitely send a friend there.
                  </span>
                  <span className="name">Ajay Das, Customer</span>
                </blockquote>
              </SwiperSlide>

              <SwiperSlide>
                <blockquote className="testimonial-big">
                  <span className="d-testi">
                    I had a wonderful experience at the hotel. Every staff member I
                    encountered, from the valet to the check-in to the cleaning
                    staff were delightful and eager to help! Thank you! Will
                    recommend to my colleagues!
                  </span>
                  <span className="name">Abhijit Sahoo, Customer</span>
                </blockquote>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
