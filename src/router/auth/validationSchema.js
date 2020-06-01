import * as yup from 'yup';

export const registerSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required(`body should have required property 'email'`)
      .email('Must be a valid email adress.'),
    fullName: yup
      .string()
      .required(`body should have required property 'fullName'`),
    password: yup
      .string()
      .required(`body should have required property 'password'`)
      .min(
        8,
        'Password is too short - should be at least 8 characters.',
      )
      .max(
        50,
        'Password is too long - should be less than 50 characters.',
      )
      .matches(
        /^([A-Za-z0-9]*)$/g,
        'Password can only contain Latin letters and numbers.',
      ),
  })
  .strict(true);

export const loginSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required(`body should have required property 'email'`),
    password: yup
      .string()
      .required(`body should have required property 'password'`),
  })
  .strict(true);
