import React from 'react';
import { Formik, Form } from 'formik';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userSelectors, userOperations } from '../../modules/user';
import validationSchema from './EditAccountValidationSchema';
import routes from '../../router/routes';
import SubmitButton from '../../Components/SubmitButton/SubmitButton';
import Input from '../../Components/Input/Input';
import s from '../../Components/Form/Form.module.scss';

const EditAccount = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelectors.getUser);

  if (!user) {
    return <Redirect to={routes.register} />;
  }

  const onSubmit = (values) => {
    dispatch(userOperations.updateAccount(values));
  };

  return (
    <div className={s.form}>
      <Formik
        initialValues={{
          fullName: user.fullName,
          phone: user.phone,
          location: user.location,
        }}
        {...{ onSubmit, validationSchema }}
      >
        <Form className={s.form__form}>
          <span className={s.form__header}>Edit profile</span>
          <Input label="Full name" name="fullName" type="text" />
          <Input
            label="Phone number"
            name="phone"
            type="tel"
            autocomplete="tel"
          />
          <Input label="Location" name="location" type="text" />
          <SubmitButton>Save</SubmitButton>
        </Form>
      </Formik>
    </div>
  );
};

export default EditAccount;
