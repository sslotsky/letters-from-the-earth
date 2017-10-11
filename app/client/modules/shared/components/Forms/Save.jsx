import React from 'react';
import { Button } from 'MODULES/shared/components/Layout';

export default function Save({ pristine, invalid, submitting, children, disabled }) {
  return (
    <Button type="submit" disabled={pristine || invalid || submitting || disabled}>
      {children}
    </Button>
  );
}
