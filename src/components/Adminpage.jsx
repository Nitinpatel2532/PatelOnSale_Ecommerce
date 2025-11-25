import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin_page = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:3000/users')
            .then(data => setUsers(data.data))
            .catch(err => console.error(err));
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this order?")) {
            axios.delete(`http://localhost:3000/users/${id}`)
                .then(() => {
                    fetchData();
                })
                .catch(err => console.error(err));
        }
    };

    return (
        <>
            <h2 style={{ textAlign: "center", fontSize: "25px", marginTop: "5px" }}>👋 Hello, Admin — Here’s Your Customer</h2>
            <hr />

            <div className="datacontainer">
                {users.map((item, index) => (
                    <div className="data" key={item.id || index}>
                        <h5>Order #{index + 1}</h5>
                        <hr />

                        <h5>📦 Product Details</h5>
                        <p><strong>Product:</strong> {item.buyNowItem?.type}</p>
                        <p><strong>Price:</strong> ₹ {item.buyNowItem?.price}</p>
                        <p><strong>Quantity:</strong> {item.buyNowItem?.quantity}</p>
                        <p><strong>Size:</strong> {item.buyNowItem?.selectedSize}</p>
                        <p><strong>Color:</strong> {item.buyNowItem?.selectedColor}</p>
                        <p><strong>Total Price:</strong> ₹ {item.buyNowItem?.totalPrice}</p>

                        <hr />

                        <h5>📇 Shipping Info</h5>
                        <p><strong>Name:</strong> {item.shippingInfo?.name}</p>
                        <p><strong>Email:</strong> {item.shippingInfo?.email}</p>
                        <p><strong>Phone:</strong> {item.shippingInfo?.phone}</p>
                        <p><strong>Alternate:</strong> {item.shippingInfo?.alternate}</p>
                        <p><strong>Address:</strong> {item.shippingInfo?.address}, {item.shippingInfo?.district}, {item.shippingInfo?.state}, {item.shippingInfo?.pincode}</p>
                        <p><strong>Payment Mode:</strong> {item.shippingInfo?.payment}</p>

                        <hr />

                        <p><strong>🕒 Order Date:</strong> {item.orderDate ? new Date(item.orderDate).toLocaleString() : 'N/A'}</p>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                            <button 
                                style={{ padding: "5px 10px", background: "crimson", color: "#fff", border: "none", borderRadius: "4px" }} 
                                onClick={() => handleDelete(item.id)}
                            >
                                🗑️ Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Admin_page;
 