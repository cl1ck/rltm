import React from 'react';
import HolyGrailLayoutRoute from 'layouts/HolyGrailLayoutRoute';
import NavbarLayoutRoute from 'layouts/NavbarLayoutRoute';
import Home from 'components/Home';
import Page1 from 'components/Page1';

const App = () => (
  <React.Fragment>
    <HolyGrailLayoutRoute
      exact
      path="/"
      component={Home}
    />
    <NavbarLayoutRoute
      path="/page1"
      component={Page1}
    />
  </React.Fragment>
);

export default App;
