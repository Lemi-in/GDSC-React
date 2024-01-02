import React from 'react';
import ShoppingCart from '../components/ShoppingCart';

const CartPage = ({ cartItems, updateCartItem, removeCartItem }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ShoppingCart cartItems={cartItems} updateCartItem={updateCartItem} removeCartItem={removeCartItem} />
    </div>
  );
};

export default CartPage;
