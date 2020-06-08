import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userSelectors } from '../../modules/user';
import { productsOperations } from '../../modules/products';
import validationSchema, {
  photosValidator,
} from './AddProductValidationSchema';
import routes from '../../router/routes';
import SubmitButton from '../../Components/SubmitButton/SubmitButton';
import Input from '../../Components/Input/Input';
import FileInput from '../../Components/Input/FileInput';
import TextArea from '../../Components/Input/TextArea';
import s from '../../Components/Form/Form.module.scss';
import addNotification from '../../Notification';

const AddProduct = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelectors.getUser);
  const [photos, setPhotos] = useState([]);

  if (!user) {
    return <Redirect to={routes.register} />;
  }

  const onSubmit = async ({
    title,
    location,
    description,
    price,
  }) => {
    try {
      await photosValidator.validate(photos);
      const formData = new FormData();

      formData.append('title', title);
      formData.append('location', location);
      formData.append('description', description);
      formData.append('price', +price);
      photos.forEach((photo, i) => {
        formData.append(i, photo);
      });

      dispatch(productsOperations.addProduct(formData));
    } catch (err) {
      addNotification('danger', err.message);
    }
  };

  return (
    <div className={s.form}>
      <Formik
        initialValues={{
          title: '',
          location: '',
          description: '',
          price: '',
        }}
        {...{ onSubmit, validationSchema }}
      >
        <Form className={s.form__form}>
          <span className={s.form__header}>Add Product</span>
          <Input label="Title" name="title" type="text" />
          <Input label="Location" name="location" type="text" />
          <TextArea
            label="Description"
            name="description"
            type="textfield"
          />
          <FileInput
            label="Photos"
            name="photos"
            type="file"
            multiple="multiple"
            onChange={(event) => {
              setPhotos([...event.currentTarget.files]);
            }}
          />
          <Input
            label="Price"
            name="price"
            type="text"
            placeholder="0"
          />
          <SubmitButton>Add product</SubmitButton>
        </Form>
      </Formik>
    </div>
  );
};

export default AddProduct;
