import React from 'react';
import { Button } from 'APP_ROOT/styled/Layout';

export default function Save({ pristine, invalid, children }) {
  return (
    <Button type="submit" disabled={pristine || invalid}>
      {children}
    </Button>
  );
}
