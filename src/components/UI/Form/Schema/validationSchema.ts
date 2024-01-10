import * as Yup from 'yup';

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneRegexp = /^(\+)(\d{3}\s?){4}(\d{2})?$/;

export const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .matches(emailRegex, 'Invalid email')
        .required('Required'),
    phone: Yup.string()
        .matches(phoneRegexp, 'Invalid phone number, without spaces')
        .required('Required'),
    address: Yup.string()
        .min(10, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});