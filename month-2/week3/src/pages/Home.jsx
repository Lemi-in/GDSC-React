import React from 'react';
import ProductList from '../components/ProductList';

const Home = ({ products }) => {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
