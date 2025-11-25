// components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <Container>
        <Row>
          {/* About */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="mb-3">About Us</h5>
            <p>
              Welcome to MyStore — your one-stop shop for the latest trends and best deals online.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="/cart" className="text-light text-decoration-none">Cart</a></li>
              <li><a href="/wishlist" className="text-light text-decoration-none">Wishlist</a></li>
              <li><a href="/admin-login" className="text-light text-decoration-none">Admin Login</a></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="mb-3">Contact</h5>
            <p><FaMapMarkerAlt className="me-2" /> 123 E-commerce St, Bhopal, India</p>
            <p><FaEnvelope className="me-2" /> support@mystore.com</p>
            <p><FaPhone className="me-2" /> +91 8719966634</p>
          </Col>

          {/* Follow Us */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex">
              <a href="#" className="text-light fs-4 me-3"><FaFacebook /></a>
              <a href="#" className="text-light fs-4 me-3"><FaInstagram /></a>
              <a href="#" className="text-light fs-4"><FaTwitter /></a>
            </div>
          </Col>
        </Row>

        {/* Bottom Text */}
        <hr className="border-light" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
