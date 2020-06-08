import React from 'react';
import Input from '../../Input/Input';
import { Link } from 'react-router-dom';
import routes from '../../../router/routes';
import SubmitButton from '../../SubmitButton/SubmitButton';
import s from '../../Form/Form.module.scss';

const RegisterFormView = ({ touched, errors, handleSubmit }) => (
  <form className={s.form__form} onSubmit={handleSubmit}>
    <span className={s.form__header}>Register</span>
    <Input
      {...{ errors, touched }}
      label="Email"
      type="email"
      name="email"
    />
    <Input
      {...{ errors, touched }}
      label="Full Name"
      type="text"
      name="fullName"
    />
    <Input
      {...{ errors, touched }}
      label="Password"
      type="password"
      name="password"
    />
    <Input
      {...{ errors, touched }}
      label="Password Again"
      type="password"
      name="passwordAgain"
    />
    <SubmitButton>Register</SubmitButton>
    <span className={s.form__changeAuthPage}>
      I already have an account,&nbsp;
      <Link to={routes.login}>Log in</Link>
    </span>
  </form>
);

export default RegisterFormView;
