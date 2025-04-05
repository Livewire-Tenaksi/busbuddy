import React, { useState, useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import a from "../../assets/images/onlinebook.png";
import b from "../../assets/images/offer1.jpg";
import c from "../../assets/images/ticket.png";
import "../Style.css";

const Btslide1 = () => {
  const CData = [
    { id: 1, image: a, title: "Easy Booking through Online", con: "With our fast and user-friendly online bus booking system, you can book tickets anytime, anywhere in just a few clicks.A wide selection of buses across various cities and routes, Real-time seat availability to help you choose your preferred seat, Instant confirmation via email and SMS" },
    { id: 2, image: b, title: "Exciting offers !", con: "We believe in making travel affordable and rewarding for our customers. Check out the amazing offers and discounts available when you book your bus tickets with us! First-Time User Offer – Get flat 10% OFF on your first booking!" },
    { id: 3, image: c, title: "E-Ticketing & Paperless Travel", con: "No need to carry a physical ticket! Digital tickets sent directly to your email & phone.Hassle-free boarding ,Eco-friendly and convenient paperless travel,Save time and help the environment by going digital!" },
  ];

  const [control, setControl] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setControl((prev) => (prev + 1) % CData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  let next = () => {
    setControl((prev) => (prev + 1) % CData.length);
  };

  let previous = () => {
    setControl((prev) => (prev - 1 + CData.length) % CData.length);
  };

  return (
    <div className="carousel-container pb-5 p-2 p-sm-5">
      <div className="card mb-3 slide-content" >
        <button className="slide-btn left" onClick={previous}>
          <GrPrevious />
        </button>
        <div className="row g-0" >
          <div className="col-md-4">
            <img src={CData[control].image} className="img-fluid rounded-start" style={{objectFit:"cover",height:"250px"}} alt="..." />
          </div>
          <div className="col-md-8 align-self-center">
            <div className="card-body">
              <h5 className="card-title">{CData[control].title}</h5>
              <p className="card-text">{CData[control].con}</p>
            </div>
          </div>
        </div>
        <button className="slide-btn right" onClick={next}>
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Btslide1;
