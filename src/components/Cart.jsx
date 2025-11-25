

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import AOS from 'aos';
import 'aos/dist/aos.css';


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // ✅ initialize navigation


  // Load cart items from localStorage on component mount
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
    
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Function to remove a specific item by its index
  const removeItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Function to clear the entire cart
  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  // Function to calculate total price of all items
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + Number(item.totalPrice), 0);
  };

  // Function to handle buy now click for a specific item
  const buyNow = (item) => {
    // You can store this item in localStorage or pass state while navigating
    localStorage.setItem("buyNowItem", JSON.stringify(item));
    navigate("/login");
  };

  // Function to handle buy all
  const buyAll = () => {
    // You can store cart items or total price in localStorage if needed
    localStorage.setItem("buyAllItems", JSON.stringify(cartItems));
    navigate("/login");
  };

  return (
    <div>
      <h5 style={{ textAlign: "center", margin: "15px" }}>🛍️ Items You’ve Picked</h5>
      <h6>Total Products: {cartItems.length}</h6>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <div className="itemmain">
            {cartItems.map((item, index) => (
              <div data-aos="fade-down-right"
                key={index}
                className="cartdiv"
                style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
              >
                <img src={item.image} alt="" />
                <div className="cartdetail">
                  <h5>{item.type}</h5>
                  <p>{item.description}</p>
                  <strong>
                    <p>Price: ₹{item.price}</p>
                  </strong>
                  <p>Quantity: {item.quantity}</p>
                  <strong>
                    <p>Total Price: ₹{item.totalPrice}</p>
                  </strong>
                  <p>Size: {item.selectedSize}</p>
                  <p>Color: {item.selectedColor}</p>
                </div>
                <div className="cartbutton">
                  <button onClick={() => removeItem(index)}>Remove</button>
                  <button onClick={() => buyNow(item)} style={{ marginTop: "10px" }}>
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h5 style={{ marginTop: "20px" }}>Total Price of All Items: ₹{getTotalPrice()}</h5>

          <div style={{ marginTop: "20px" }} className="totalbtn">
            <button onClick={clearCart}>Clear Cart</button>
            <button onClick={buyAll} style={{ marginLeft: "10px" }}>
              Buy All
            </button>
          </div>
        </div>
      )}
     
      
    </div>
  );
};

export default Cart;

