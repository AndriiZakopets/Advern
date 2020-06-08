import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { userOperations } from '../../../modules/user';
import validationSchema from './RegisterValidationSchema';
import Input from '../../Input/Input';
import { Link } from 'react-router-dom';
import routes from '../../../router/routes';
import SubmitButton from '../../SubmitButton/SubmitButton';
import s from '../../Form/Form.module.scss';

const RegisterFormContainer = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(userOperations.register(values));
  };

  return (
    <div className={s.form}>
      <Formik
        initialValues={{
          email: '',
          fullName: '',
          password: '',
          passwordAgain: '',
        }}
        {...{ validationSchema, onSubmit }}
      >
        <Form className={s.form__form}>
          <span className={s.form__header}>Register</span>
          <Input label="Full Name" type="text" name="fullName" />
          <Input label="Email" type="email" name="email" />
          <Input label="Password" type="password" name="password" />
          <Input
            label="Password Again"
            type="password"
            name="passwordAgain"
          />
          <SubmitButton>Register</SubmitButton>
          <span className={s.form__changeAuthPage}>
            I already have an account,&nbsp;
            <Link to={routes.login}>Log in</Link>
          </span>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterFormContainer;
