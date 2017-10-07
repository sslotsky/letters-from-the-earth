import React from 'react';
import { connect } from 'react-redux';
import { GlyphButton } from 'MODULES/shared/components';
import * as actions from 'MODULES/identity/actions';

export function Logout({ logout }) {
  return (
    <GlyphButton name="sign-out" onClick={logout}>
      Logout
    </GlyphButton>
  );
}

export default connect(
  undefined,
  { logout: actions.logout }
)(Logout);
