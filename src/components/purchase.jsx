import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const PurchasePage = () => {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

<<<<<<< HEAD
  
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

=======
  const finalbuy = async () => {
    try {
      await axios.post(`${API_BASE_URL}/orders/`, order, {
        headers: { "Content-Type": "application/json" },
      });

      alert("📦 We’ve received your order — it’s on the way!");
      localStorage.removeItem("order");
      navigate("/");
    } catch (error) {
      console.error("Order failed:", error.response?.data || error);
      alert("❌ Order failed. Please try again.");
    }
  };
>>>>>>> 0c2881b ( file changed)

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

<<<<<<< HEAD
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
=======
      {/* Product */}
      <div className="border p-4 rounded-xl flex gap-4 items-center text-center">
        <img
          src={buyNowItem.image}
          alt={buyNowItem.title}
          className="w-32 h-32 object-cover rounded-lg"
          style={{ width: "200px" }}
        />
        <div>
          <h3 className="text-2xl font-semibold">{buyNowItem.title}</h3>
          <p>{buyNowItem.description}</p>
          <p>Type: {buyNowItem.type}</p>
          <p>Size: {buyNowItem.selectedSize}</p>
          <p>Color: {buyNowItem.selectedColor}</p>
          <p>Qty: {buyNowItem.quantity}</p>
          <p className="font-bold">₹ {buyNowItem.totalPrice}</p>
        </div>
      </div>

      {/* Shipping */}
      <div className="border p-4 rounded-xl">
        <h3 className="text-xl font-semibold mb-2">📌 Shipping Address</h3>
        {Object.entries(shippingInfo).map(([key, value]) => (
          <p key={key}>
            <strong>{key}:</strong> {value}
          </p>
        ))}
      </div>

      <div className="text-center">
        <button onClick={finalbuy}>Confirm your order</button>
      </div>

      <div className="text-right text-gray-500">
        {new Date(orderDate).toLocaleString()}
      </div>
>>>>>>> 0c2881b ( file changed)
    </div>
  );
};

export default PurchasePage;
