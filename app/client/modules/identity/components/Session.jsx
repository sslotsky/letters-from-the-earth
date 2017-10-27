import React from 'react';
import { connect } from 'react-redux';
import { Buttons } from 'MODULES/shared/components/Layout';
import { isAuthenticated } from 'MODULES/shared/selectors';
import Glyph from 'MODULES/shared/components/Glyph/NavGlyph';
import { NavSection } from 'MODULES/shared/components/Layout/Page';
import SignUp from './SignUp';
import Logout from './Logout';
import Login from './Login';

export function Session({ authenticated }) {
  const home = (
    <Glyph
      name="home"
      title="Home"
      path="/"
      exact
    />
  );

  const choose = (
    <Glyph
      name="envelope"
      title="Start New Letter"
      path="/letters/choose"
    />
  );

  if (!authenticated) {
    return [
      <NavSection key="nav">
        {home}
        {choose}
      </NavSection>,
      <NavSection key="session">
        <Buttons>
          <Login />
          <SignUp />
        </Buttons>
      </NavSection>
    ];
  }

  return [
    <NavSection key="nav">
      {home}
      {choose}
      <Glyph title="Dashboard" name="dashboard" path="/dashboard" />
    </NavSection>,
    <NavSection key="session">
      <Buttons>
        <Logout />
      </Buttons>
    </NavSection>
  ];
}

export default connect(isAuthenticated)(Session);

