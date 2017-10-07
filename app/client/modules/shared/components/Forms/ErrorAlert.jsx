import React from 'react';
import styled from 'styled-components';

const Alert = styled.div`
  flex: 1;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #f2dede;
  color: #a94442;
  border-radius: .25rem;
`;

const Error = styled.p`
  margin: 0;

  &:not(:first-child) {
    margin-top: .5rem;
  }
`;

export default function ErrorAlert({ meta }) {
  const { touched, invalid, error } = meta;
  const hasError = touched && invalid;
  const errors = hasError && error.map((e, i) => (
    <Error key={i}>{e}</Error>
  ));

  return hasError && (
    <Alert>
      {errors}
    </Alert>
  );
}
