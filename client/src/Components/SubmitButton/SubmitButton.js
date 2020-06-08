import React from 'react';
import s from './SubmitButton.module.scss';

const SubmitButton = ({ children }) => {
  return (
    <button className={s.submitButton} type="submit">
      {children}
    </button>
  );
};

export default SubmitButton;
