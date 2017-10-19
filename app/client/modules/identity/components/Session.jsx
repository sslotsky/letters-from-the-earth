import React from 'react';
import { connect } from 'react-redux';
import { Buttons } from 'MODULES/shared/components/Layout';
import { isAuthenticated } from 'MODULES/shared/selectors';
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

  return <Buttons><Logout /></Buttons>;
}

export default connect(isAuthenticated)(Session);

