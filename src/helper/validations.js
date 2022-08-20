import * as Yup from 'yup';

export const introSchema = Yup.object().shape({
  phone: Yup.string()
    .required('Input field is required')
    .min(2, 'Phone number too short')
    .max(15, 'Phone number too long'),
});

export const signUpSchema = Yup.object().shape({
    full_name: Yup.string().required('Input field is required'),
    email: Yup.string().email('Invalid email').required('Input field is required'),
    username: Yup.string().required('Input field is required'),
    account_type: Yup.string().required('Input field is required'),
})
