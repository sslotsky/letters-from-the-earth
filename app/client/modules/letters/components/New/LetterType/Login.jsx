import React from 'react';
import { toggle } from 'MODULES/shared/decorators';
import { ButtonLink } from 'MODULES/shared/components/Layout';
import LoginModal from 'MODULES/identity/components/Login/LoginModal';

export function Login({ open, ...props }) {
  return (
    <ButtonLink onClick={open}>
      Login
      <LoginModal {...props} />
    </ButtonLink>
  );
}

export default toggle(Login);

