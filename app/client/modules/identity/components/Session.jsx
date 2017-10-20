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

  if (!authenticated) {
    return [
      <NavSection key="nav">
        {home}
      </NavSection>,
      <NavSection key="session">
        <Buttons>
          <Login />
        </Buttons>
      </NavSection>
    ];
  }

  return [
    <NavSection key="nav">
      {home}
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

