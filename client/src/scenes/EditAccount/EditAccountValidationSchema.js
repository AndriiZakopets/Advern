import * as Yup from 'yup';

export default Yup.object({
  fullName: Yup.string()
    .required('Must enter a name.')
    .max(128, 'Name lenght must be less than 128 characters.'),
  phone: Yup.string()
    .required('Must enter a phone number.')
    .matches(
      /\+[0-9,\-, ]{10,20}/,
      'Must be a correct phone number.',
    ),
  location: Yup.string(),
});
