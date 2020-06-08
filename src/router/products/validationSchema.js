import * as yup from 'yup';

export const updateAccountSchema = yup
  .object()
  .shape({
    title: yup
      .string()
      .max(128, 'Title lenght must be less than 128 characters.')
      .required(`body should have required property 'title'`),
    description: yup
      .string()
      .defined(`body should have required property 'description'`),
    location: yup
      .string()
      .defined(`body should have required property 'location'`)
      .max(128, 'Location lenght must be less than 128 characters.'),
    price: yup
      .number()
      .defined(`body should have required property 'price'`),
  })
  .strict(true);
