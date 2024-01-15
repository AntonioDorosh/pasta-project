import React, {FormEvent} from 'react';
import {useFormik} from "formik";
import {TFormValues} from "./type.ts";
import {
    ValidationButton,
    ValidationForm,
    ValidationInput
} from "./Form.styled.tsx";
import {validationSchema} from "./Schema/validationSchema.ts";
import Modal from "../Modal/Modal.tsx";
import Text from "../../../styles/Text/Text.ts";
import remCalc from "../../../utils/remCalc.ts";
import {useAppDispatch} from "../../../redux/hooks/useStore.ts";
import {closeModal} from "../../../redux/reducers/modal/slice.ts";

type ErrorObject = {
    message: string
}

const initialValue: TFormValues = {
    name: '',
    address: '',
    email: '',
    phone: ''
};

const Form = () => {
    const dispatch = useAppDispatch();
    const {
        values,
        errors,
        handleChange,
        touched,
        isSubmitting,
        handleSubmit
    } = useFormik<TFormValues>({
        initialValues: initialValue,
        validationSchema,
        onSubmit: async (values, formikHelpers) => {
            try {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
                formikHelpers.setSubmitting(false);
                dispatch(closeModal());
            } catch (e) {
                const error: ErrorObject = {message: 'An error occurred'};
                if (e instanceof Error && e.message) {
                    error.message = e.message;
                }
                formikHelpers.setErrors({email: error.message});
                formikHelpers.setSubmitting(false);
            }
        }
    });

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        if (!values.name || !values.email || !values.phone || !values.address) {
            e.preventDefault();
            alert('Please fill in the form');
        }
        handleSubmit(e);
        e.preventDefault();
    };

    return (
        <Modal>
            <Text fontSize={remCalc(20)}>Checkout payment</Text>
            <ValidationForm onSubmit={submitHandler}>
                <label htmlFor="name">{errors.name && touched.name &&
                    <p>{errors.name}</p>}</label>
                <ValidationInput id={'name'} placeholder={'enter your name'}
                                 value={values.name} onChange={handleChange}
                                 $borderColor={errors.name && '1px solid red'}/>
                <label htmlFor="email">{errors.email && touched.email &&
                    <p>{errors.email}</p>}</label>
                <ValidationInput id={'email'} placeholder={'enter your email'}
                                 value={values.email} onChange={handleChange}
                                 $borderColor={errors.email && '1px solid red'}
                />
                <label htmlFor="phone">{errors.phone && touched.phone &&
                    <p>{errors.phone}</p>}</label>
                <ValidationInput id={'phone'} placeholder={'enter your phone'}
                                 value={values.phone} onChange={handleChange}
                                 $borderColor={errors.phone && '1px solid red'}
                />
                <label htmlFor="address">{errors.address && touched.address &&
                    <p>{errors.address}</p>}</label>
                <ValidationInput id={'address'}
                                 placeholder={'enter your address'}
                                 value={values.address} onChange={handleChange}
                                 $borderColor={errors.address && '1px solid red'}
                />
                <ValidationButton
                    disabled={isSubmitting || values === initialValue}>Submit</ValidationButton>
            </ValidationForm>
        </Modal>
    )
};

export default Form;