import React from 'react';
import { Button } from './styles';

export default function GlyphButton({ name, children, ...props }) {
  return (
    <Button {...props}>
      {children}
      <i className={`fa fa-${name}`} />
    </Button>
  );
}
