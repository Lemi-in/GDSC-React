import React from 'react';

const ShoppingCart = ({ cartItems, updateCartItem, removeCartItem }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => updateCartItem(item.id, item.quantity + 1)}>+</button>
                  <button onClick={() => updateCartItem(item.id, item.quantity - 1)}>-</button>
                  <button onClick={() => removeCartItem(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <p>Total: ${getTotalPrice()}</p>
            <button onClick={() => alert('Purchase functionality to be implemented')}>Complete Purchase</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
