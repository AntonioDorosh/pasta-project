import React, {ChangeEvent} from 'react';
import {Label} from "@/components/UI/Form/Form.styled";
import {Input} from "@/components/UI/Input/Input";

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
      <Input
        name={name}
        id={name}
        type={type}
        onChange={onChange}
        value={value}
      />
      {error && <p style={{color: "red"}}>{error}</p>}
    </>
  );
};

