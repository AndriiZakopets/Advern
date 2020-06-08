import React from 'react';
import s from './Input.module.scss';

export default ({ label = '', ...props }) => {
  return (
    <label className={s.input}>
      {label}
      <input {...props} />
    </label>
  );
};
