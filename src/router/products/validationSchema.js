import * as yup from 'yup';

export const updateAccountSchema = yup
  .object()
  .shape({
    title: yup
      .string('asd')
      .required(`body should have required property 'title'`),
    description: yup
      .string()
      .defined(`body should have required property 'description'`),
    photos: yup
      .array()
      .of(yup.string())
      .defined(`body should have required property 'photos'`),
    location: yup
      .string()
      .defined(`body should have required property 'location'`),
    price: yup
      .number()
      .defined(`body should have required property 'price'`),
  })
  .strict(true);
