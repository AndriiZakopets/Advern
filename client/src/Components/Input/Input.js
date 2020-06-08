import React from 'react';
import { useField } from 'formik';
import s from './Input.module.scss';

export default ({ label = '', ...props }) => {
  const [field, meta] = useField(props);
  const isInputHasError = meta.error && meta.touched;

  return (
    <label className={s.input}>
      {label}
      <input
        style={{
          borderColor: isInputHasError ? '#cc0000' : '#dedee0',
        }}
        {...props}
        {...field}
      />
      {isInputHasError ? (
        <div className={s.fieldError}>{meta.error}</div>
      ) : null}
    </label>
  );
};
