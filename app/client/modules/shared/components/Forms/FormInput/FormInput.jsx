import React from 'react';
import { FormLabel, Error } from './styles';

export default function FormInput({ input, meta, label }) {
  const { touched, invalid, error } = meta;
  const hasError = touched && invalid;
  const errors = hasError && error.map((m, i) => (
    <Error key={i}>{m}</Error>
  ));

  return (
    <FormLabel>
      {label}
      <input {...input} />
      {errors}
    </FormLabel>
  );
}
