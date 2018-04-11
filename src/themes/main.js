import buildColorScheme from 'tools/buildColorScheme';
import common from 'themes/common';
import extend from 'deep-extend';

const colors = buildColorScheme({
  primary: '#2962ff',
  secondary: '#ff1744',
  background: '#fcfcfc',
});

const theme = {
  colors: (colors),
};

export default extend(theme, common);
