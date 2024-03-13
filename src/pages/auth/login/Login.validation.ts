import * as Yup from 'yup';

export const loginValidation = Yup.object().shape({
  mobile: Yup.string().required('موبایل الزامی است'),
  password: Yup.string().max(255).required('پسورد الزامی است'),
});
