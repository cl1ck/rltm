import React from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/Home';

export const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default hot(module)(App);
