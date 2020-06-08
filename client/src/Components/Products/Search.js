import React from 'react';
import SearchInput from './SearchInput';
import { Formik, Form } from 'formik';
import validationSchema from './SearchValidationSchema';
import s from './Search.module.scss';

export default ({ setSearchQuery, setPage }) => {
  const onSubmit = (values) => {
    const obj = {};
    if (values.keywords !== '') obj.keywords = values.keywords;
    if (values.location !== '') obj.location = values.location;
    if (values.priceFrom !== '') obj.priceFrom = values.priceFrom;
    if (values.priceTo !== '') obj.priceTo = values.priceTo;

    setPage(1);
    setSearchQuery(obj);
  };

  return (
    <div className={s.searchForm}>
      <Formik
        initialValues={{
          keywords: '',
          location: '',
          priceFrom: '',
          priceTo: '',
        }}
        {...{ onSubmit, validationSchema }}
      >
        <Form className={s.searchForm__form}>
          <SearchInput
            placeholder="Search products"
            type="text"
            name="keywords"
          />
          <SearchInput
            placeholder="Location"
            type="text"
            name="location"
          />
          <SearchInput
            placeholder="Price from"
            type="text"
            name="priceFrom"
          />
          <SearchInput
            placeholder="Price to"
            type="text"
            name="priceTo"
          />
          <button
            className={s.searchForm__submitButton}
            type="submit"
          >
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};
