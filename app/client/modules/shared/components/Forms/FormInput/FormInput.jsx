import React from 'react';
import { FormLabel, Error } from './styles';

export default function FormInput({ input, meta, label, type = 'text', asyncField = false }) {
  const { touched, invalid, valid, active, error, asyncValidating } = meta;
  const hasError = touched && invalid;
  const errors = hasError && error.map((m, i) => (
    <Error key={i}>{m}</Error>
  ));

  return (
    <FormLabel>
      <span>
        {label}
        {asyncField && [
          asyncValidating && <i key="spin" className="fa fa-spinner fa-spin fa-fw" />,
          valid && !active && !asyncValidating && <i key="check" className="fa fa-check" />
        ]}
      </span>
      <input {...input} type={type} autoComplete="off" />
      {errors}
    </FormLabel>
  );
}
