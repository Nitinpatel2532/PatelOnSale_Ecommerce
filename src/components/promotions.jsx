
import React, { useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

// images

import breezy from "../assets/image/breezy.png"
import promo2 from "../assets/image/promo2.jpg"
import promo3 from "../assets/image/promo3.webp"
import promo4 from "../assets/image/promo4.jpg"
import watch from "../assets/image/watch.webp"
import suit from "../assets/image/suit.avif"

export const Promotion = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true      // whether animation should happen only once
    });
  }, []);

  return (
    <Container className="my-5 p-4 bg-light rounded shadow">
      <Row className="align-items-center">
        {/* Image Section */}
        <Col md={6} className="mb-4 mb-md-0" data-aos="fade-right">
          <Image 
            src={breezy}
            alt="Promotion"
            fluid 
            rounded 
          />
        </Col>

        {/* Content Section */}
        <Col md={6} data-aos="fade-left">
          <h2 className="fw-bold mb-3">🔥 Sun-Kissed Summer Styles</h2>
          <p className="text-muted fs-5">
          Summer is here! Discover our range of breezy dresses and trendy sandals designed to keep you cool and stylish all season long. Bright patterns and lightweight fabrics make it easy to stand out at beach barbecues and boardwalk adventures. Don't let the heat dull your shine — shop our newest summer collection and make every day feel like a sun celebration!
          </p>
          <Button variant="primary" size="lg">
            Shop Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
};


export const Promotion2 = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration
        once: true      // whether animation should happen only once
      });
    }, []);
  
    return (
      <Container className="my-5 p-4 bg-light rounded shadow">
        <Row className="align-items-center">
       
  
          {/* Content Section */}
          <Col md={6} data-aos="fade-left">
            <h2 className="fw-bold mb-3">🕒 Timeless Style — Exclusive Watch Sale! 🕒
            </h2>
            <p className="text-muted fs-5">
            It’s time to elevate your style with our stunning collection of premium watches. Whether you’re dressing for business, adventure, or a night out, we’ve got the perfect piece for your wrist.

            </p>
            <Button variant="primary" size="lg">
              Shop Now
            </Button>
                </Col>
                
                   {/* Image Section */}
          <Col md={6} className="mb-4 mb-md-0" data-aos="fade-right">
            <Image 
              src={watch}
              alt="Promotion"
              fluid 
                        rounded 
                        // width={"400px"}
                        
                
            />
          </Col>
        </Row>
      </Container>
    );
};
  
export const Promotion3 = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration
        once: true      // whether animation should happen only once
      });
    }, []);
  
    return (
      <Container className="my-5 p-4 bg-light rounded shadow">
        <Row className="align-items-center">
          {/* Image Section */}
          <Col md={6} className="mb-4 mb-md-0" data-aos="fade-right">
            <Image 
              src={promo3}
              alt="Promotion"
              fluid 
              rounded 
            />
          </Col>
  
          {/* Content Section */}
          <Col md={6} data-aos="fade-left">
            <h2 className="fw-bold mb-3">Power Up with the Latest Tech
            </h2>
            <p className="text-muted fs-5">
            Step into the future with our newest tech arrivals. From powerful smartphones and cutting-edge laptops to smartwatches and accessories, these gadgets are designed to keep you connected and ahead of the curve. Experience blazing-fast performance and sleek design in every product. Upgrade your gear now and embrace innovation at your fingertips.

            </p>
            <Button variant="primary" size="lg">
              Shop Now
            </Button>
          </Col>
        </Row>
      </Container>
    );
};
  
export const Promotion4 = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration
        once: true      // whether animation should happen only once
      });
    }, []);
  
    return (
      <Container className="my-5 p-4 bg-light rounded shadow">
        <Row className="align-items-center">
         
  
          {/* Content Section */}
          <Col md={6} data-aos="fade-left">
            <h2 className="fw-bold mb-3">Home Entertainment Hub
            </h2>
            <p className="text-muted fs-5">
            Turn your living room into the ultimate entertainment hub. Browse our selection of ultra-HD TVs, immersive sound systems, and game consoles designed to bring big-screen excitement home. Whether you're gaming with friends or binge-watching your favorite series, these gadgets deliver stunning visuals and crystal-clear audio for an immersive experience. Elevate your downtime with home theater gear that's built to impress.

            </p>
            <Button variant="primary" size="lg">
              Shop Now
            </Button>
                </Col>
                
                 {/* Image Section */}
          <Col md={6} className="mb-4 mb-md-0" data-aos="fade-right">
            <Image 
              src={promo4}
              alt="Promotion"
              fluid 
              rounded 
            />
          </Col>
        </Row>
      </Container>
    );
};
  
export const Promotion5 = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration
        once: true      // whether animation should happen only once
      });
    }, []);
  
    return (
      <Container className="my-5 p-4 bg-light rounded shadow">
        <Row className="align-items-center">
         
         {/* Image Section */}
         <Col md={6} className="mb-4 mb-md-0" data-aos="fade-right">
            <Image 
              src={suit}
              alt="Promotion"
              fluid 
              rounded 
            />
                </Col>
                
          {/* Content Section */}
          <Col md={6} data-aos="fade-left">
            <h2 className="fw-bold mb-3">Effortless Chic for Every Day
 
            </h2>
            <p className="text-muted fs-5">
            Refresh your wardrobe with our range of easy-chic essentials. From classic blazers and tailored trousers to comfy tees and versatile denim, these pieces make getting dressed effortless. Transition seamlessly from desk to dinner in these versatile looks that keep you comfortable without sacrificing style. Shop our everyday collection and make every outfit count.


            </p>
            <Button variant="primary" size="lg">
              Shop Now
            </Button>
                </Col>
                
          
        </Row>
      </Container>
    );
  };



