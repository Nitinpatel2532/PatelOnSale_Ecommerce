import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const Admin_page = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/orders/all/`);
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    }
  };

<<<<<<< HEAD
    const fetchData = () => {
        axios
            .get('http://localhost:8000/api/orders/')
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this order?")) {
            axios
                .delete(`http://localhost:8000/api/orders/${id}/`)
                .then(() => fetchData())
                .catch(err => console.error(err));
        }
    };

    return (
        <>
            <h2 style={{ textAlign: "center", fontSize: "25px", marginTop: "5px" }}>
                👋 Hello, Admin — Here’s Your Customer
            </h2>
            <hr />

            <div className="datacontainer">
                {users.map((item, index) => (
                    <div className="data" key={item.id}>
                        <h5>Order #{index + 1}</h5>
                        <hr />
=======
  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this order?")) return;

    try {
      await axios.delete(`${API_BASE_URL}/orders/${id}/`);
      fetchOrders();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "10px" }}>
        👋 Admin Dashboard
      </h2>
      <hr />
>>>>>>> 0c2881b ( file changed)

      <div className="datacontainer">
        {orders.map((item, index) => (
          <div className="data" key={item.id}>
            <h4>Order #{index + 1}</h4>

            <h5>📦 Product</h5>
            <p>{item.buyNowItem?.type}</p>
            <p>Qty: {item.buyNowItem?.quantity}</p>
            <p>Total: ₹ {item.buyNowItem?.totalPrice}</p>

<<<<<<< HEAD
                        <h5>📇 Shipping Info</h5>
                        <p><strong>Name:</strong> {item.shippingInfo?.name}</p>
                        <p><strong>Email:</strong> {item.shippingInfo?.email}</p>
                        <p><strong>Phone:</strong> {item.shippingInfo?.phone}</p>
                        <p><strong>Alternate:</strong> {item.shippingInfo?.alternate}</p>
                        <p>
                            <strong>Address:</strong>{" "}
                            {item.shippingInfo?.address},{" "}
                            {item.shippingInfo?.district},{" "}
                            {item.shippingInfo?.state},{" "}
                            {item.shippingInfo?.pincode}
                        </p>
                        <p><strong>Payment Mode:</strong> {item.shippingInfo?.payment}</p>
=======
            <h5>📇 Shipping</h5>
            <p>{item.shippingInfo?.name}</p>
            <p>{item.shippingInfo?.phone}</p>
            <p>{item.shippingInfo?.address}</p>
>>>>>>> 0c2881b ( file changed)

            <p>
              🕒{" "}
              {item.orderDate
                ? new Date(item.orderDate).toLocaleString()
                : "N/A"}
            </p>

<<<<<<< HEAD
                        <p>
                            <strong>🕒 Order Date:</strong>{" "}
                            {item.orderDate
                                ? new Date(item.orderDate).toLocaleString()
                                : "N/A"}
                        </p>

                        <button
                            style={{
                                padding: "5px 10px",
                                background: "crimson",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px"
                            }}
                            onClick={() => handleDelete(item.id)}
                        >
                            🗑️ Delete
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
=======
            <button
              style={{ background: "crimson", color: "#fff" }}
              onClick={() => handleDelete(item.id)}
            >
              🗑 Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
>>>>>>> 0c2881b ( file changed)
};

export default Admin_page;
