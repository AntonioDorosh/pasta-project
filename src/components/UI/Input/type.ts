import {ChangeEvent, InputHTMLAttributes} from "react";

export interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
