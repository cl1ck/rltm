import React from 'react';
import { createContainer } from 'redux-bits';
import { ThemeProvider } from 'styled-components';
import { createSelector, createStructuredSelector } from 'reselect';
import themes from 'themes';

export const name = 'styledComponentsTheme';

export const state = {
  activeTheme: 'main',
  themes,
};

export const actions = {
  changeTheme: theme => theme,
  addTheme: (name, themeData) => ({ name, themeData }),
};

export const reducers = {
  changeTheme: (draft, theme) => {
    draft.theme = theme;
  },
  addTheme: (draft, { name, themeData }) => draft.themes[name] = themeData,
};

const activeThemeName = draft => draft.activeTheme;
const themeData = draft => draft.themes;
const activeTheme = createSelector(
  [activeThemeName, themeData],
  (name, themes) => themes[name],
);
const availableThemes = draft => Object.keys(draft.themes);
const themeSelector = createStructuredSelector({
  activeTheme,
  activeThemeName,
  availableThemes,
});

export const selectors = {
  activeTheme,
  activeThemeName,
  availableThemes,
  theme: themeSelector,
};

const GlobalTheme = createContainer(name, actions, selectors);

const GlobalThemeProvider = ({children}) => (
  <GlobalTheme selector="activeTheme">
    {({ activeTheme }) => (
      <ThemeProvider theme={activeTheme}>
        {React.Children.only(children)}
      </ThemeProvider>
    )}
  </GlobalTheme>
);

export default GlobalThemeProvider;

