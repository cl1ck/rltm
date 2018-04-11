import buildColorScheme from 'tools/buildColorScheme';
import common from 'themes/common';
import extend from 'deep-extend';

const colors = buildColorScheme({
  primary: '#0d47a1',
  secondary: '#263238',
  background: '#000a12',
});

const theme = {
  colors: (colors),
};

export default extend(theme, common);
