import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find(prod => prod.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
