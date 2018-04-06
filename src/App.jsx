import React from 'react';
import { Switch } from 'react-router-dom';
// import Layout from 'layouts/PageWithNavbarSidebarHeaderAndFooter';
// import Layout from 'layouts/PageWithNavbarHeaderAndFooter';
import Layout from 'layouts/PageWithHeaderAndFooter';
import Home from 'components/Home';

const App = () => (
  <Switch>
    <Layout exact path="/" component={Home} />
  </Switch>
);

export default App;
