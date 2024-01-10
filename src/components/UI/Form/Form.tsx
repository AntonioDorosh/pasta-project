import React from 'react';
import {useFormik} from "formik";
import {TFormValues} from "./type.ts";
import {
    ValidationButton,
    ValidationForm,
    ValidationInput
} from "./Form.styled.tsx";
import {validationSchema} from "./Schema/validationSchema.ts";


const Form = () => {


    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        touched,
        isSubmitting
    } = useFormik<TFormValues>({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
        },
        validationSchema,
        onSubmit: (values, formikHelpers) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                formikHelpers.resetForm();
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
            <ValidationButton disabled={isSubmitting}>Submit</ValidationButton>
        </ValidationForm>
    );
};

export default Form;