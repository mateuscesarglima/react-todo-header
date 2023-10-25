import { HtmlHTMLAttributes } from 'react';

type InputType = HtmlHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...rest }: InputType) => {
  return (
    <Input {...rest} />
  );
}