import React from 'react';
import { Switch } from 'react-router-dom';
import HolyGrailLayoutRoute from 'layouts/HolyGrailLayoutRoute';
import NavbarLayoutRoute from 'layouts/NavbarLayoutRoute';
import FullPageLayoutRoute from 'layouts/FullPageLayoutRoute';
import Home from 'components/Home';
import Page1 from 'components/Page1';

import 'assets/css/main.css';

const App = () => (
  <Switch>
    <HolyGrailLayoutRoute
      exact
      path="/"
      component={Home}
    />
    <NavbarLayoutRoute
      path="/page1"
      component={Page1}
    />
  </Switch>
);

export default App;
