import * as Yup from 'yup';

export default Yup.object().shape({
  keywords: Yup.string(),
  location: Yup.string(),
  priceFrom: Yup.number().min(0).typeError('Price must be a number'),
  priceTo: Yup.number().min(0).typeError('Price must be a number'),
});
