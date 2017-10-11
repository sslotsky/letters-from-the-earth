import React from 'react';
import { connect } from 'react-redux';
import { Save } from 'MODULES/shared/components';
import { Secondary } from 'MODULES/shared/components/Layout';
import select, { authenticated } from 'MODULES/shared/selectors';
import SignUp from './SignUp';
import Login from './Login';

export function Submit({ authenticated, open, ...props }) {
  return [
    <Save {...props} disabled={!authenticated} key="save">
      Submit
    </Save>,
    !authenticated && (
      <Secondary key="login">
        <SignUp /> or <Login /> to submit
      </Secondary>
    )
  ];
}

const transform = loggedIn => ({ authenticated: loggedIn });
const selector = select(transform, authenticated);
export default connect(selector)(Submit);

