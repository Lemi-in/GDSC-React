import React from 'react';
import ProductDetail from '../components/ProductDetail';

const ProductPage = ({ products }) => {
  return (
    <div>
      <ProductDetail products={products} />
    </div>
  );
};

export default ProductPage;
