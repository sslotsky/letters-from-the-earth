import React from 'react';
import { Route, Switch } from 'react-router';
import { New as NewLetter } from 'MODULES/letters/components';

import Home from './Home';

export default function App() {
  return (
    <Switch>
      <Route path="/letters/new" component={NewLetter} />
      <Route component={Home} />
    </Switch>
  );
}
