import React from 'react';
import { connect } from 'react-redux';
import { isAuthenticated } from 'MODULES/shared/selectors';
import { Route, Redirect } from 'react-router-dom';

export function PrivateRoute({ authenticated, component: Component, ...rest }) {
  return (
    <Route {...rest} render={(props) => {
      if (!authenticated) {
        return (
          <Redirect to="/" />
        );
      }

      return <Component {...props} />;
    }} />
  );
}

export default connect(isAuthenticated)(PrivateRoute);
