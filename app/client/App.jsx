import React from 'react';
import { Route, Switch } from 'react-router';
import { New as NewLetter, LetterType } from 'MODULES/letters/components';

import Home from './Home';

export default function App() {
  return (
    <Switch>
      <Route path="/letters/choose" component={NewLetter} />
      <Route path="/letters/start/:type" component={LetterType} />
      <Route component={Home} />
    </Switch>
  );
}
