import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { Choose, LetterType } from 'MODULES/letters/components';
import { PrivateRoute, Dashboard } from 'MODULES/shared/components';

import Home from './Home';

export default function App() {
  return (
    <Switch>
      <Route path="/letters/choose" component={Choose} />
      <Route path="/letters/start/:type" component={LetterType} />
      <Route path="/" exact component={Home} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route render={() => (
        <Redirect to="/" />
      )} />
    </Switch>
  );
}
