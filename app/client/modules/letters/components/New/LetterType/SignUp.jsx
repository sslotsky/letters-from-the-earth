import React from 'react';
import { toggle } from 'MODULES/shared/decorators';
import { ButtonLink } from 'MODULES/shared/components/Layout';
import SignUpModal from 'MODULES/identity/components/SignUp/SignUpModal';

export function SignUp({ open, ...props }) {
  return (
    <ButtonLink onClick={open}>
      Sign Up
      <SignUpModal {...props} />
    </ButtonLink>
  );
}

export default toggle(SignUp);
