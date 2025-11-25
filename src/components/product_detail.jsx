import React, { useEffect, useState } from 'react';

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    const storedProduct = localStorage.getItem('selected_product');
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    }
  }, []);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color!");
      return;
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const productToAdd = {
      ...product,
      quantity,
      selectedSize,
      selectedColor,
      totalPrice:  Number(product.price) * quantity
    };

    cart.push(productToAdd);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Item added to cart!");
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      {product ? (
        <div className="pdetail">
          <h2>Product Details</h2>
          <div className="pdet">
            <img
              src={product.image}
              alt={product.type}
              style={{ width: "300px" }}
            />

            <h3>{product.type}</h3>
            <p><strong>Base Price:</strong> ₹{Number(product.price)}</p>

            {/* Size Selection */}
            <label>
              Select Size:
              <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                <option value="">--Choose Size--</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
              </select>
            </label>
            <br /><br />

            {/* Color Selection */}
            <label>
              Select Color:
              <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                <option value="">--Choose Color--</option>
                <option value="Black">Black</option>
                <option value="Blue">Blue</option>
                <option value="White">White</option>
                <option value="Grey">Grey</option>
              </select>
            </label>
            <br /><br />

            {/* Quantity Selector */}
            <div>
              <strong>Quantity:</strong>
              <button onClick={decreaseQuantity}>-</button>
              <span style={{ margin: '0 10px' }}>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <br />

            {/* Total Price */}
            <p><strong>Total Price:</strong> ₹{product.price * quantity}</p>

            {/* Shipping Info */}
            <p><strong>Shipping Info:</strong> Free delivery within 5-7 business days</p>

            {/* Action Buttons */}
            <button onClick={handleAddToCart} style={{ backgroundColor: "red", color: "white" }}>Add to Cart</button>
            
            <button onClick={() => setProduct(null)}  style={{backgroundColor:"red",color:"white"}}>Close</button>
          </div>
        </div>
      ) : (
        <p>Loading product info...</p>
      )}
    </>
  );
}

export default ProductDetail;

 
          
          
         
          
          
          
          
