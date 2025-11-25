// components/OfferBanner.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import offerImg from "../assets/image/offer4.jpg";
import vdo2 from "../assets/video/vdo2.mp4"

const OfferBanner = () => {
  return (
    <Container fluid className="p-0">
      <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
          height:"450px"
        }}
      >
        {/* Background Image */}
        <video
          src={vdo2}
          controls  autoPlay
          alt="Offer Banner"
          style={{
            width: "100%",
            height: "450px",
            objectFit: "cover",
            filter: "brightness(0.6)"
          }}
        /> <video/>

        {/* Offer Text Overlay */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <h1 className="mb-3">🔥 Mega Summer Sale!</h1>
          <p className="mb-4">Up to 70% OFF on selected products. Limited time offer!</p>
          <Button variant="warning">Shop Now</Button>
        </div>
      </div>
    </Container>
  );
};

export default OfferBanner;
