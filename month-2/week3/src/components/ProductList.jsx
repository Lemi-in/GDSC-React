import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product Listings</h2>
      {products.map(product => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
