import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../router/routes';
import s from './Products.module.scss';
import { formatDate } from '../../utils/helpers';

const ProductItem = ({ product }) => {
  return (
    <li className={s.productItem}>
      <Link
        to={`${routes.products}/${product.id}`}
        className={s.productItem__image}
      >
        {product?.photos?.[0] ? (
          <img src={product.photos[0]} alt="" />
        ) : (
          <span>No image</span>
        )}
      </Link>
      <Link
        to={`${routes.products}/${product.id}`}
        className={s.productItem__title}
      >
        {product.title}
      </Link>
      <span className={s.productItem__location}>
        {product.location} - {formatDate(product.createdAt)}
      </span>
      <span className={s.productItem__price}>
        {Math.ceil(product.price).toLocaleString()} грн.
      </span>
    </li>
  );
};

export default ProductItem;
