import * as Yup from 'yup';

export default Yup.object().shape({
  title: Yup.string()
    .required('Must enter a title.')
    .max(128, 'Title lenght must be less than 128 characters.'),
  location: Yup.string()
    .required('Must enter a location.')
    .max(128, 'Location lenght must be less than 128 characters.'),
  description: Yup.string(),
  price: Yup.number()
    .min(0, `Price can't be a negative number.`)
    .typeError('Price must be a number.'),
});

export const photosValidator = Yup.array()
  .test('photo', 'All files must be a jpeg/gif/png type.', function (
    photosArr,
  ) {
    return photosArr.reduce((acc, e) => {
      const acceptedImageTypes = [
        'image/gif',
        'image/jpeg',
        'image/png',
      ];

      return acc && acceptedImageTypes.includes(e.type);
    }, true);
  })
  .test('fileSize', 'File size must be less than 5MB.', function (
    photosArr,
  ) {
    return photosArr.reduce(
      (acc, e) => acc && e.size < 5242880,
      true,
    );
  });
