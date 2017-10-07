import React from 'react';
import { connect } from 'react-redux';
import { Buttons } from 'MODULES/shared/components/Layout';
import SignUp from './SignUp';
import Logout from './Logout';
import Login from './Login';

export function Session({ authenticated }) {
  if (!authenticated) {
    return (
      <Buttons>
        <Login />
        <SignUp />
      </Buttons>
    );
  }

  return <Logout />;
}

export default connect(
  state => ({ authenticated: !!state.identity.user })
)(Session);

