import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    district: "",
    state: "",
    pincode: "",
    phone: "",
    payment:"",
    alternate:","
  });

  function handleChange(e){
    const{name,value}=e.target
    setFormData({ ...formData, [name]:value });
  };
  let navigate =useNavigate()

  function handleBuyNow(e){
    e.preventDefault()

    // Save address data to localStorage
    localStorage.setItem("shippingInfo", JSON.stringify(formData));

    // Fetch existing cart data
    const buyNowItem = JSON.parse(localStorage.getItem("buyNowItem")) || [];

    // Combine address and cart data to one order
    const order = {
      shippingInfo: formData,
      buyNowItem: buyNowItem,
      orderDate: new Date().toISOString(),
    };

    // Save complete order in localStorage
    localStorage.setItem("order", JSON.stringify(order));

    localStorage.removeItem("buyNowItem");
    // localStorage.removeItem("cart");

    alert("You Have Confirmed Your Address!");

    navigate('/Purchase_page')

  };

  return (
    <>
      <h5 style={{textAlign:"center",marginTop:"12px",textDecoration:"underline"}}>Shipping Information</h5>
      <hr />
      <div className="formpage">
        <div data-aos="fade-down-right">
        <div className="form">

        <form action="" onSubmit={handleBuyNow}>
            <label htmlFor="">Name: </label>
            <input type="text" name="name" placeholder="Enter your full name" onChange={handleChange} required /><br /><br />

            <label htmlFor="">Email: </label>
            <input type="text" name="email" placeholder="Enter your Email" onChange={handleChange} required /><br /><br />

            <label htmlFor="">Address: </label>
            <input type="text" name="address" placeholder="Enter your Address" onChange={handleChange} required /><br /><br />

            <label htmlFor="">District: </label>
            <input type="text" name="district" placeholder="Enter your District" onChange={handleChange}  required/><br /><br />

            <label htmlFor="">State: </label>
            <select name="state" id=""  onChange={handleChange} required>
              <option value="">--select state--</option>
              <option value="madhya pradesh">madhya pradesh</option>
              <option value="uttar pradesh">uttar pradesh</option>
              <option value="Andhra pradesh">Andhra pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Punjab">Punjab</option>
            </select><br /><br />

            <label htmlFor="">Pin code: </label>
            <input type="text" name="pincode" placeholder="Enter your pincode" onChange={handleChange} required /><br /><br />

            <label htmlFor="">phone: </label>
            <input type="text" name="phone" placeholder="Enter your phone number" onChange={handleChange} required /><br /><br />

            <label htmlFor="">Alternate ph: </label>
            <input type="text" name="alternate" placeholder="Enter your Alternate ph:" onChange={handleChange} required/><br /><br />

            <label htmlFor="">payment method:</label><br />
            <input type="radio" name="payment" value={"online"}  onChange={handleChange} />Online  <br />
            <input type="radio" name="payment" value={"cash"}  onChange={handleChange} />Cash
            <br /><br />


            <input type="submit" value={"Confirm your address"} className="btn" />
            
      </form>

          </div>
          </div>
      

      </div>
     
      
    </>
  )
};

export default Login;
