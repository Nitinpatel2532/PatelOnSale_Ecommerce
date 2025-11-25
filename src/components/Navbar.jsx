// components/CustomNavbar.jsx
import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaBoxOpen, FaShoppingCart, FaHeart, FaUserShield } from "react-icons/fa";
import logo from "../assets/image/logo.png"

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className="shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block align-top me-2"
            style={{ borderRadius: "50%" }}
            width={"50px"}
          />
          MyStore
        </Navbar.Brand>

        {/* Toggle button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars style={{ color: "#fff" }} />
        </Navbar.Toggle>

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"><FaHome className="me-2" /> Home</Nav.Link>
            <Nav.Link as={Link} to="/products"><FaBoxOpen className="me-2" /> Products</Nav.Link>
            <Nav.Link as={Link} to="/cart"><FaShoppingCart className="me-2" /> Cart</Nav.Link>
            <Nav.Link as={Link} to="/wishlist"><FaHeart className="me-2" /> Wishlist</Nav.Link>
            <Nav.Link as={Link} to="/admin_login"><FaUserShield className="me-2" /> Admin Login</Nav.Link>
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search products"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
