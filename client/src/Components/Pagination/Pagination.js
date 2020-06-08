import React from 'react';
import Pagination from 'react-js-pagination';
import { pageSize } from '../../config';
import './Pagination.css';

export default function PaginationContainer({
  totalResults,
  page,
  setPage,
}) {
  return (
    <Pagination
      hideDisabled
      activePage={+page}
      itemsCountPerPage={pageSize}
      totalItemsCount={totalResults}
      pageRangeDisplayed={9}
      onChange={(p) => {
        setPage(p);
      }}
    />
  );
}
