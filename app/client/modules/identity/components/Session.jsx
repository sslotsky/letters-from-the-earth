import React from "react";
import { connect } from "react-redux";
import { Buttons } from "MODULES/shared/components/Layout";
import { userInfo } from "MODULES/shared/selectors";
import Glyph from "MODULES/shared/components/Glyph/NavGlyph";
import { NavSection } from "MODULES/shared/components/Layout/Page";
import SignUp from "./SignUp";
import Logout from "./Logout";
import Login from "./Login";

export function Session({ authenticated, isAdmin }) {
  const home = <Glyph name="home" title="Home" path="/" exact />;

  const choose = (
    <Glyph name="envelope" title="Start New Letter" path="/letters/choose" />
  );

  if (!authenticated) {
    return (
      <React.Fragment>
        <NavSection>
          {home}
          {choose}
        </NavSection>
        <NavSection>
          <Buttons>
            <Login />
            <SignUp />
          </Buttons>
        </NavSection>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <NavSection>
        {home}
        {choose}
        <Glyph title="Dashboard" name="dashboard" path="/dashboard" />
        {isAdmin && <Glyph title="Employees" name="users" path="/employees" />}
      </NavSection>
      <NavSection>
        <Buttons>
          <Logout />
        </Buttons>
      </NavSection>
    </React.Fragment>
  );
}

export default connect(userInfo)(Session);
