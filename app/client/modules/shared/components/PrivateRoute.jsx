import React from 'react';
import { connect } from 'react-redux';
import { isAuthenticated } from 'MODULES/shared/selectors';
import { Route, Redirect } from 'react-router-dom';

export function PrivateRoute({ authenticated, component: Component, ...rest }) {
  const redirect = {
    pathname: '/',
    state: { status: 307 }
  };

  return (
    <Route {...rest} render={({ staticContext, ...props }) => {
      if (!authenticated) {
        if (staticContext) {
          staticContext.statusCode = props.status || 307;
        }

        return (
          <Redirect to={redirect} />
        );
      }

      return <Component {...props} />;
    }} />
  );
}

export default connect(isAuthenticated)(PrivateRoute);
