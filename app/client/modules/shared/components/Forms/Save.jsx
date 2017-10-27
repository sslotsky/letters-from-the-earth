import React from 'react';
import { Submit } from 'MODULES/shared/components/Layout/Page';

export default function Save({ pristine, invalid, submitting, children, disabled }) {
  return (
    <Submit disabled={pristine || invalid || submitting || disabled}>
      {children}
    </Submit>
  );
}
