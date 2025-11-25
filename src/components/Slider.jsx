// components/ImageCarousel.jsx
import React from "react";
import { Carousel, Container } from "react-bootstrap";
import c1 from "../assets/image/hbg1.jpg";
import c2 from "../assets/image/bg1.jpg";
import c5 from "../assets/image/bg5.jpg";
import c4 from "../assets/image/bg6.jpg";
import c6 from "../assets/image/c1.jpg";

const ImageCarousel = () => {
  const images = [c1, c2, c5, c4,c6];

  return (
    <Container fluid className="p-0">
      <Carousel controls={true} indicators={true} interval={1000} fade>
        {images.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={img}
              alt={`Slide ${index + 1}`}
              style={{
                width:"100%",
                height: "450px",
                objectFit: "cover"
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default ImageCarousel;
