import buildColorScheme from 'tools/buildColorScheme';
import common from 'themes/common';
import extend from 'deep-extend';

export const colors = {
  primary: '#2962ff',
  secondary: '#ff1744',
  highlight: '#b4ff2b',
  background: '#fcfcfc',
};

const theme = {
  colors: buildColorScheme(colors),
};

export default extend(theme, common);
