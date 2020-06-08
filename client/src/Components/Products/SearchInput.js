import React from 'react';
import { useField } from 'formik';
import s from './Search.module.scss';

export default (props) => {
  const [field, meta] = useField(props);
  const isInputHasError = meta.error && meta.touched;

  return (
    <input
      className={s.searchForm__input}
      style={{
        borderColor: isInputHasError ? '#cc0000' : '#dedee0',
      }}
      {...props}
      {...field}
    />
  );
};
