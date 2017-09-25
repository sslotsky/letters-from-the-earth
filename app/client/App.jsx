import React from 'react';
import { Route, Switch } from 'react-router';
import { New as NewLetter, LetterType } from 'MODULES/letters/components';

import Home from './Home';

export default function App() {
  return (
    <Switch>
      <Route path="/letters/new" exact component={NewLetter} />
      <Route path="/letters/new/:letterType" component={LetterType} />
      <Route component={Home} />
    </Switch>
  );
}
