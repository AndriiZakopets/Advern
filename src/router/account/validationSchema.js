import * as yup from 'yup';

export const updateAccountSchema = yup
  .object()
  .shape({
    fullName: yup
      .string()
      .defined(`body should have required property 'fullName'`)
      .min(1, 'Name can not be blank.'),
    avatar: yup
      .string()
      .defined(`body should have required property 'avatar'`),
    phone: yup
      .string()
      .defined(`body should have required property 'phone'`),
    location: yup
      .string()
      .defined(`body should have required property 'location'`),
  })
  .strict(true);
