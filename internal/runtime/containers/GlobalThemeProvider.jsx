import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import ThemeProvider from 'runtime/bits/theme';

const GlobalThemeProvider = ({ children }) => (
  <ThemeProvider selector="activeThemeData">
    {({ activeThemeData: theme }) => (
      <StyledThemeProvider theme={theme}>
        {React.Children.only(children)}
      </StyledThemeProvider>
    )}
  </ThemeProvider>
);

GlobalThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GlobalThemeProvider;
