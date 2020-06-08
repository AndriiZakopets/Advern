import React from 'react';
import ProductItem from './ProductItem';
import s from './Products.module.scss';

const ProductsList = ({ products }) => {
  if (products.length === 0) return 'no products with this query.';
  else
    return (
      <ul className={s.productsList}>
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </ul>
    );
};

export default ProductsList;
