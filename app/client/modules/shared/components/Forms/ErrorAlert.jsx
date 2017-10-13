import React from 'react';
import { connect } from 'react-redux';
import { getFormError } from 'redux-form';
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

export function ErrorAlert({ error = [] }) {
  const errors = error.map((e, i) => (
    <Error key={i}>{e}</Error>
  ));

  return error.length > 0 && (
    <Alert>
      {errors}
    </Alert>
  );
}

export default connect(
  (state, props) => ({
    error: getFormError(props.name)(state)
  })
)(ErrorAlert);
