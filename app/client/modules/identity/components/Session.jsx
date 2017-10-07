import React from 'react';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import Logout from './Logout';

export function Session({ authenticated }) {
  if (!authenticated) {
    return <SignUp />;
  }

  return <Logout />;
}

export default connect(
  state => ({ authenticated: !!state.identity.user })
)(Session);

