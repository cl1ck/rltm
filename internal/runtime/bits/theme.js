import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'redux-bits';
import { ThemeProvider } from 'styled-components';
import { createSelector } from 'reselect';
import themes from 'themes';

export const name = 'themes';

export const state = {
  activeTheme: 'main',
  themes,
};

export const actions = {
  changeTheme: theme => theme,
  addTheme: (themeName, themeData) => ({ themeName, themeData }),
};

export const reducers = {
  changeTheme: (draft, theme) => {
    draft.activeTheme = theme;
  },
  addTheme: (draft, { themeName, themeData }) => {
    draft.themes[themeName] = themeData;
  },
};

const activeThemeName = draft => draft.activeTheme;
const themeData = draft => draft.themes;
const activeThemeData = createSelector(
  [activeThemeName, themeData],
  (themeName, data) => data[themeName],
);
const availableThemes = draft => Object.keys(draft.themes);

export const selectors = {
  activeThemeData,
  activeThemeName,
  availableThemes,
};

const GlobalTheme = createContainer(name, actions, selectors);

const GlobalThemeProvider = ({ children }) => (
  <GlobalTheme selector="activeThemeData">
    {({ activeThemeData: theme }) => (
      <ThemeProvider theme={theme}>
        {React.Children.only(children)}
      </ThemeProvider>
    )}
  </GlobalTheme>
);

GlobalThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GlobalThemeProvider;
