import React from "react";
import { Route, Redirect, Switch } from "react-router";
import { Choose, LetterType } from "MODULES/letters/components";
import {
  List as EmployeeList,
  New as NewEmployee
} from "MODULES/employees/pages";
import { PrivateRoute, AdminRoute, Dashboard } from "MODULES/shared/components";

import Home from "./Home";
import Toast from "./Toast";
import Confirm from "./Confirm";

export default function App() {
  return (
    <div>
      <Toast />
      <Switch>
        <Route path="/letters/choose" component={Choose} />
        <Route path="/letters/start/:type" component={LetterType} />
        <Route path="/" exact component={Home} />
        <Route path="/confirm/:token" exact component={Confirm} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <AdminRoute path="/employees" exact component={EmployeeList} />
        <AdminRoute path="/employees/new" exact component={NewEmployee} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>

    </div>
  );
}
