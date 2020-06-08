import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { userOperations } from '../../../modules/user';
import routes from '../../../router/routes';
import { Link } from 'react-router-dom';
import Input from '../../Input/Input';
import SubmitButton from '../../SubmitButton/SubmitButton';
import validationSchema from './LoginValidationSchema';
import s from '../../Form/Form.module.scss';

const LoginFormContainer = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(userOperations.login(values));
  };

  return (
    <div className={s.form}>
      <Formik
        initialValues={{ email: '', password: '' }}
        {...{ onSubmit, validationSchema }}
      >
        <Form className={s.form__form}>
          <span className={s.form__header}>Login</span>
          <Input
            label="Email"
            type="email"
            name="email"
            autocomplete="email"
          />
          <Input label="Password" type="password" name="password" />
          <SubmitButton>Continue</SubmitButton>
          <span className={s.form__changeAuthPage}>
            I have no account,&nbsp;
            <Link to={routes.register}>Register</Link>
          </span>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginFormContainer;
