import React from 'react';
import { toggle } from 'MODULES/shared/decorators';
import { GlyphButton } from 'MODULES/shared/components';
import LoginModal from './LoginModal';

export function Login({ open, ...props }) {
  return (
    <GlyphButton name="sign-in" onClick={open}>
      Login
      <LoginModal {...props} />
    </GlyphButton>
  );
}

export default toggle(Login);

