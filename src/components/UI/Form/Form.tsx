import React from 'react';
import {useFormik} from "formik";
import {TFormValues} from "./type.ts";
import {
    ValidationButton,
    ValidationForm,
    ValidationInput
} from "./Form.styled.tsx";
import * as Yup from "yup";


const Form = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegexp = /^(\+)(\d{3}\s?){4}(\d{2})?$/;

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        touched
    } = useFormik<TFormValues>({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
        },
        validationSchema: Yup.object({
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
        }),
        onSubmit: (values) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
            }, 500)
        }
    });

    console.log(errors)

    return (
        <ValidationForm onSubmit={handleSubmit}>
            <label htmlFor="name">{errors.name && touched.name &&
                <p>{errors.name}</p> || 'Valid Name'}</label>
            <ValidationInput id={'name'} placeholder={'enter your name'}
                             value={values.name} onChange={handleChange}
                             $borderColor={errors.name && '1px solid red'}/>
            <label htmlFor="email">{errors.email && touched.email &&
                <p>{errors.email}</p> || 'valid email'}</label>
            <ValidationInput id={'email'} placeholder={'enter your email'}
                             value={values.email} onChange={handleChange}
                             $borderColor={errors.email && '1px solid red'}
            />
            <label htmlFor="phone">{errors.phone && touched.phone &&
                <p>{errors.phone}</p> || 'valid phone'}</label>
            <ValidationInput id={'phone'} placeholder={'enter your phone'}
                             value={values.phone} onChange={handleChange}
                             $borderColor={errors.phone && '1px solid red'}
            />
            <label htmlFor="address">{errors.address && touched.address &&
                <p>{errors.address}</p> || 'valid address'}</label>
            <ValidationInput id={'address'} placeholder={'enter your address'}
                             value={values.address} onChange={handleChange}
                             $borderColor={errors.address && '1px solid red'}
            />
            <ValidationButton>Submit</ValidationButton>
        </ValidationForm>
    );
};

export default Form;