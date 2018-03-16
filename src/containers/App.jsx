import React from 'react';
import { FormattedMessage } from 'react-intl';
import { hot } from 'react-hot-loader';

const App = () => (
  <h1><FormattedMessage id="containers.App.hello" /></h1>
);

export default hot(module)(App);
