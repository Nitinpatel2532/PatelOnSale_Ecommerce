import React, { useEffect, useState } from "react";
import axios from "axios" 
import { useNavigate } from "react-router-dom";

const PurchasePage = () => {
  const [order, setOrder] = useState(null);

  // to navigate om Home page
  let navigate=useNavigate()

   // final buy
  function finalbuy() {
    {
      // store all data in JSON database

      axios.post('http://localhost:3000/users', order)
        .then(res => alert("📦 We’ve received your order — it’s on the way!"))
      
      // render on home page
      navigate('/')

      
    }
  }


  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("order"));
    setOrder(orderData);
    {console.log(orderData)}
  }, []);

  if (!order) {
    return <p className="text-center mt-10 text-xl">No purchase found.</p>;
  }

  const { buyNowItem, shippingInfo, orderDate } = order;

  
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10 space-y-8">
      <h2 className="text-2xl font-bold text-center">🛒 Your Order Receipt</h2>

      {/* Product Details */}
      <div className="border p-4 rounded-xl flex gap-4 items-center" style={{textAlign:"center"}}>
        <img
          src={buyNowItem.image}
          alt={buyNowItem.title}
          className="w-32 h-32 object-cover rounded-lg"
          style={{width:"200px"}}
        />
        <div>
          <h3 className="text-2xl font-semibold">{buyNowItem.title}</h3>
          <p className="text-gray-600">{buyNowItem.description}</p>
          <p className="mt-2 font-medium">Type: {buyNowItem.type}</p>
          <p>Selected Size: {buyNowItem.selectedSize}</p>
          <p>Selected Color: {buyNowItem.selectedColor}</p>
          <p>Quantity: {buyNowItem.quantity}</p>
          <p className="font-bold mt-2 text-lg"> <strong>Total: ₹{buyNowItem.totalPrice}</strong></p>
        </div>
      </div>

      {/* Shipping Details */}
      <div className="border p-4 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">📌 Order Shipping Address</h3>
        <ul className="space-y-2">
          {Object.entries(shippingInfo).map(([key, value]) => (
            <li key={key} className="flex justify-between border-b pb-1">
              <span className="capitalize font-medium">{key} : </span>
              <span>{value || "N/A"}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* create button to store in database */}
      <div className="purchasebtn">
     <button onClick={finalbuy}>Confirm your order</button> <br />
      </div>
      

      {/* Order Date */}
      <div className="text-right text-gray-500">
        <p>Order Date: {new Date(orderDate).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default PurchasePage;
