import React from "react";
import { connect } from "react-redux";
import { isAuthenticated } from "MODULES/shared/selectors";
import { inject } from "MODULES/shared/decorators";
import { Route, Redirect } from "react-router-dom";

export function PrivateRoute({ allowed, component: Component, ...rest }) {
  const redirect = {
    pathname: "/",
    state: { status: 307 }
  };

  return (
    <Route
      {...rest}
      render={({ staticContext, ...props }) => {
        if (!allowed) {
          if (staticContext) {
            staticContext.statusCode = props.status || 307;
          }

          return <Redirect to={redirect} />;
        }

        return <Component {...props} />;
      }}
    />
  );
}

export default connect(isAuthenticated)(
  inject(({ authenticated }) => ({
    allowed: authenticated
  }))(PrivateRoute)
);
