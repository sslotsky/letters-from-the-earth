import React from 'react';
import { toggle } from 'MODULES/shared/decorators';
import { GlyphButton } from 'MODULES/shared/components';
import SignUpModal from './SignUpModal';

export function SignUp({ open, ...props }) {
  return (
    <GlyphButton name="plus-square" onClick={open}>
      Sign Up
      <SignUpModal {...props} />
    </GlyphButton>
  );
}

export default toggle(SignUp);
