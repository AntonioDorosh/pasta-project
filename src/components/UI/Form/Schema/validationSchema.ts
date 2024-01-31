import * as Yup from 'yup';

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('A name field is required'),
    email: Yup.string()
        .matches(emailRegex, 'Invalid email')
        .required('A email field is required'),
    phone: Yup.number()
        .typeError("That doesn't look like a phone number")
        .integer("A phone number can't include a decimal point")
        .min(11)
        .required('A phone number is required'),
    address: Yup.string()
        .min(10, 'Too Short!')
        .max(50, 'Too Long!')
        .required('A address field is required'),
});
