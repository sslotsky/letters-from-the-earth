import React from 'react';
import { Button } from 'APP_ROOT/styled/Layout';

export default function Save({ pristine, invalid, ...props }) {
  return (
    <Button type="submit" disabled={pristine || invalid} {...props} />
  );
}
