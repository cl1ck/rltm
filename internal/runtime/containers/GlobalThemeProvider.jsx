import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import ThemeProvider from 'runtime/bits/theme';

const GlobalThemeProvider = ({ children }) => (
  <ThemeProvider selector="activeThemeData">
    {({ activeThemeData: theme }) => (
      <EmotionThemeProvider theme={theme}>
        {React.Children.only(children)}
      </EmotionThemeProvider>
    )}
  </ThemeProvider>
);

GlobalThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GlobalThemeProvider;
