import React from 'react';
import { Switch } from 'react-router-dom';
import PageWithNavbarSidebarHeaderAndFooter from 'layouts/PageWithNavbarSidebarHeaderAndFooter';
import PageWithNavbarHeaderAndFooter from 'layouts/PageWithNavbarHeaderAndFooter';
import PageWithHeaderAndFooter from 'layouts/PageWithHeaderAndFooter';
import Header from 'components/Page/Header';
import Footer from 'components/Page/Footer';
import Navbar from 'components/Page/Navbar';
import Sidebar from 'components/Page/Sidebar';
import Home from 'components/Home';

import 'assets/css/main.css';

const App = () => (
  <Switch>
    <PageWithHeaderAndFooter exact path="/" component={Home} header={Header} footer={Footer} />
    <PageWithNavbarHeaderAndFooter
      path="/nav"
      component={Home}
      header={Header}
      footer={Footer}
      navbar={Navbar}
    />
    <PageWithNavbarSidebarHeaderAndFooter
      path="/side"
      component={Home}
      header={Header}
      footer={Footer}
      sidebar={Sidebar}
      navbar={Navbar}
    />
  </Switch>
);

export default App;
