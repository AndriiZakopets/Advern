import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .required('Must enter an email.')
    .email('Must be a valid email adress.'),
  fullName: Yup.string().required('Must enter a name.'),
  password: Yup.string()
    .required('Must enter a password')
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
  passwordAgain: Yup.string()
    .required('Must confirm a password.')
    .test(
      'match',
      'Passwords do not match. Please try again.',
      function (confirmPassword) {
        const password = this.options.parent['password'];
        return (
          !password ||
          !confirmPassword ||
          password === confirmPassword
        );
      },
    ),
});
