import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'redux-bits';
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
  (themeName, data) => Object.assign({}, data[themeName], { name: themeName }),
);
const availableThemes = draft => Object.keys(draft.themes);

export const selectors = {
  activeThemeData,
  activeThemeName,
  availableThemes,
};

export default createContainer(name, actions, selectors);
