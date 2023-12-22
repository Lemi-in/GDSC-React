import React, { useState } from 'react';

function ShoppingCart() {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = () => {
    if (itemName && price > 0 && quantity > 0) {
      setCartItems([
        ...cartItems,
        { name: itemName, quantity, price },
      ]);
      setItemName('');
      setQuantity(1);
      setPrice(0);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'itemName':
        setItemName(value);
        break;
      case 'quantity':
        setQuantity(Number(value));
        break;
      case 'price':
        setPrice(Number(value));
        break;
      default:
        break;
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <form>
        <label htmlFor="itemName">Item Name:</label>
        <input
          type="text"
          id="itemName"
          name="itemName"
          value={itemName}
          onChange={handleInputChange}
        />
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={handleInputChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={handleInputChange}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </form>
      <h2>Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.quantity * item.price}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">Total Price:</td>
            <td>{calculateTotalPrice()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ShoppingCart;
