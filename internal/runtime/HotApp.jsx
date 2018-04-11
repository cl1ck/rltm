import React from 'react';
import { hot } from 'react-hot-loader';
import App from 'App';
import GlobalThemeProvider from 'runtime/containers/GlobalThemeProvider';

const HotReloadable = () => (
  <GlobalThemeProvider>
    <App />
  </GlobalThemeProvider>
);

export default hot(module)(HotReloadable);
