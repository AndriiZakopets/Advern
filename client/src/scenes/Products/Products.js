import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import {
  productsOperations,
  productsSelectors,
} from '../../modules/products';
import ProductsList from '../../Components/Products/ProductsList';
import { getPage } from '../../utils/helpers';
import Pagination from '../../Components/Pagination/Pagination';
import Search from '../../Components/Products/Search';
import s from './Products.module.scss';

const Products = (props) => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelectors.getProducts);
  const params = queryString.parse(props.location.search);
  const page = params?.page ?? 1;
  const [searchQuery, setSearchQuery] = useState({});

  useEffect(() => {
    dispatch(productsOperations.getProducts(searchQuery));
  }, [searchQuery]);

  const setPage = (pageNumber) => {
    const params = queryString.parse(props.location.search);
    params.page = pageNumber;

    const paramsStr = Object.entries(params)
      .map(([key, val]) => `${key}=${val}`)
      .join('&');

    props.history.push({
      pathname: props.location.pathname,
      search: paramsStr,
    });
  };

  return (
    <div className={s.products}>
      <Search {...{ setSearchQuery, setPage }} />
      <Pagination
        {...props}
        page={page}
        setPage={setPage}
        totalResults={products.length}
      />
      <ProductsList products={getPage(products, page)} />
      <Pagination
        {...props}
        page={page}
        setPage={setPage}
        totalResults={products.length}
      />
    </div>
  );
};

export default Products;
