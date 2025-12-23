import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PurchasePage = () => {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  
 function finalbuy() {
  if (!order) return;

 
  const orderToSend = {
    ...order,
    orderDate: new Date(order.orderDate).toISOString()
  };

  axios.post("http://localhost:8000/api/orders/", orderToSend, {
    headers: { "Content-Type": "application/json" }
  })
  .then(res => {
    alert("📦 We’ve received your order — it’s on the way!");
    localStorage.removeItem("order");
    navigate("/");
  })
  .catch(err => {
    console.error(err.response ? err.response.data : err);
    alert("❌ Order failed");
  });
}


  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("order"));
    setOrder(orderData);
  }, []);

  if (!order) {
    return <p>No purchase found.</p>;
  }

  const { buyNowItem, shippingInfo, orderDate } = order;

  return (
    <div>
      <h2>🛒 Order Receipt</h2>

      <h3>Product</h3>
      <p>{buyNowItem.type}</p>
      <p>Qty: {buyNowItem.quantity}</p>
      <p>Total: ₹{buyNowItem.totalPrice}</p>

      <h3>Shipping</h3>
      <p>{shippingInfo.name}</p>
      <p>{shippingInfo.phone}</p>
      <p>{shippingInfo.address}</p>

      <button onClick={finalbuy}>Confirm Order</button>

      <p>{new Date(orderDate).toLocaleString()}</p>
    </div>
  );
};

export default PurchasePage;
