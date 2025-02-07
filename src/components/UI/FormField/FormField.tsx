import React, {ChangeEvent} from 'react';
import {ErrorMessage, FormInput, Label} from "@/components/UI/Form/Form.styled";

type FormFieldProps = {
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string | undefined;
};

export const FormField = ({name, type, onChange, error, label, value}: FormFieldProps) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <FormInput
        name={name}
        id={name}
        type={type}
        onChange={onChange}
        value={value}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

