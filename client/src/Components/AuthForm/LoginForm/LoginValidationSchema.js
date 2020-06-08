import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email adress.')
    .required('Must enter an email.'),
  password: Yup.string()
    .min(8, 'Password is too short.')
    .max(50, 'Password is too long.')
    .required('Must enter a password.'),
});
