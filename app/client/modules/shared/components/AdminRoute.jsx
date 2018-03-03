import React from "react";
import { connect } from "react-redux";
import { userInfo } from "MODULES/shared/selectors";
import { inject } from "MODULES/shared/decorators";
import { Route, Redirect } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

export default connect(userInfo)(
  inject(({ isAdmin }) => ({
    allowed: isAdmin
  }))(PrivateRoute)
);
