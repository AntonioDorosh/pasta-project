import React from 'react';
import {
    ValidationButton,
    ValidationForm,
    ValidationInput,
} from "./Form.styled.tsx";
import {useFormik} from "formik";
import {TFormValues} from "./type.ts";
import * as Yup from 'yup';

const Form = () => {
    const {
        values,
        handleBlur,
        handleChange,
        handleSubmit,
        errors
    } = useFormik<TFormValues>({
        initialValues: {
            name: '',
            phone: '',
            address: '',
            email: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Must be 2 characters or more')
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            phone: Yup.string()
                .min(2, 'Must be 2 characters or more')
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            address: Yup.string()
                .min(2, 'Must be 2 characters or more')
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    console.log(values)


    return (
        <ValidationForm onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <ValidationInput id={'name'} type="text"
                             placeholder={'enter your name'}
                             onChange={handleChange}
                             value={values.name}
                             onBlur={handleBlur}
                             $borderColor={errors.phone ? 'red' : undefined}/>
            <label htmlFor="phone">Phone</label>
            <ValidationInput id={'phone'} type="text"
                             placeholder={'enter your phone'}
                             onChange={handleChange}
                             value={values.phone}
                             onBlur={handleBlur}
                             $borderColor={errors.phone ? 'red' : undefined}
            />
            <label htmlFor="address">Address</label>
            <ValidationInput id={'address'} type="text"
                             placeholder={'enter your Address'}
                             onChange={handleChange}
                             value={values.address}
                             onBlur={handleBlur}
                             $borderColor={errors.phone ? 'red' : undefined}
            />
            <label htmlFor="email">Email</label>
            <ValidationInput id={'email'} type="text"
                             placeholder={'enter your Email'}
                             onChange={handleChange}
                             value={values.email}
                             onBlur={handleBlur}
                             $borderColor={errors.phone ? 'red' : undefined}
            />
            <ValidationButton>checkout</ValidationButton>
        </ValidationForm>
    );
};

export default Form;